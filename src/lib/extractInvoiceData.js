import { extractInvoiceText } from './invoice/extractInvoiceText.js'

const DATE_PATTERN = String.raw`\d{1,2}[\/.-]\d{1,2}[\/.-]\d{2,4}`
const NUMBER_PATTERN = String.raw`\d+(?:[.,]\d+)?`

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function cleanCompany(value) {
  return value
    ?.replace(/\s+/g, ' ')
    .replace(/[.,;:\s]+$/, '')
    .trim() || null
}

function findCompany(text) {
  const declaredCompany = text.match(
    /energ(?:i|\u00ed)a\s+comercializada\s+por\s+([^\n.]{2,80})/i
  )

  if (declaredCompany) {
    return cleanCompany(declaredCompany[1])
  }

  const companies = [
    'Iberdrola', 'Endesa', 'Naturgy', 'Holaluz', 'Repsol', 'Aldro',
    'Factor Energia', 'Factor Energ\u00eda', 'Plenitude', 'Aizen',
    'Plena Energia', 'Plena Energ\u00eda', 'Audax', 'Fenie', 'CHC',
    'Octopus', 'Podo', 'Acciona', 'EDP', 'Lucera', 'Cepsa',
    'Energia XXI', 'Energ\u00eda XXI', 'Gana Energia', 'Gana Energ\u00eda',
    'Candela Energia', 'Candela Energ\u00eda', 'Cobra',
    'Energia de Madrid', 'Energ\u00eda de Madrid', 'Axpo', 'AEQ',
    'Agraria', 'Eleia', 'Ignis', 'GALP', 'TotalEnergies', 'Ahorreluz'
  ]

  for (const company of companies) {
    if (new RegExp(`\\b${escapeRegExp(company)}\\b`, 'i').test(text)) {
      return company
    }
  }

  return null
}

function findPeriodValues(text, unit) {
  const values = {}
  const periodNames = unit === 'kW'
    ? String.raw`(?:punta|valle)?`
    : String.raw`(?:punta|llano|valle)?`

  for (let period = 1; period <= 6; period += 1) {
    const patterns = [
      new RegExp(
        `\\bP${period}\\b\\s*:?\\s*${periodNames}\\s*(${NUMBER_PATTERN})\\s*${unit}\\b`,
        'i'
      ),
      new RegExp(
        `\\bP${period}\\b\\s*:?\\s*(${NUMBER_PATTERN})\\s*${unit}\\b`,
        'i'
      )
    ]

    const match = patterns
      .map((pattern) => text.match(pattern))
      .find(Boolean)

    if (match) {
      values[`P${period}`] = match[1]
    }
  }

  return Object.keys(values).length ? values : null
}

function findBillingPeriod(text) {
  const labelledPeriod = text.match(
    new RegExp(
      `(?:periodo|per\\S*odo)\\s+(?:fac\\s*turaci\\S*n|facturado|de\\s+fac\\s*turaci\\S*n)[\\s\\S]{0,900}?(${DATE_PATTERN})\\s*(?:-|a|hasta|al)?\\s*(${DATE_PATTERN})`,
      'i'
    )
  )

  const explicitRange = text.match(
    new RegExp(
      `(?:desde\\s*)?(${DATE_PATTERN})\\s*(?:-|a|hasta|al)\\s*(${DATE_PATTERN})`,
      'i'
    )
  )

  const match = labelledPeriod || explicitRange

  return match
    ? { from: match[1], to: match[2] }
    : null
}

function findTotal(text) {
  const patterns = [
    /\btotal\s+factura\b[\s:]*([\d.]+,\d{2}|[\d,]+\.\d{2})/i,
    /\bimporte\s+(?:total\s+)?de\s+(?:la|su)\s+factura\s+(?:es\s+)?(?:de\s+)?([\d.]+,\d{2}|[\d,]+\.\d{2})\s*(?:euros?|\u20ac)/i,
    /\btotal\b[\s:]*([\d.]+,\d{2}|[\d,]+\.\d{2})\s*\u20ac/i
  ]

  return patterns
    .map((pattern) => text.match(pattern)?.[1])
    .find(Boolean) || null
}

export function extractInvoiceDataFromText(text) {
  const result = {
      cups: null,
      company: null,
      tariff: null,
      power: null,
      periodPowers: null,
      periodConsumption: null,
      energyCost: null,
      powerCost: null,
      reactiveEnergy: null,
      powerExcess: null,
      billingPeriod: null,
      maxDemand: null,
      total: null,
      warnings: []
    }

    const cupsMatch =
      text.match(/\bCUPS\b\s*[:\-]?\s*([A-Z]{2}\d{16,22}[A-Z0-9]*)/i) ||
      text.match(/\b(ES\d{16,22}[A-Z0-9]*)\b/i)

    if (cupsMatch) {
      result.cups = cupsMatch[1]
    }

    result.company = findCompany(text)

    const tariffMatch = text.match(/\b(2\.0TD|3\.0TD|6\.1TD)\b/i)

    if (tariffMatch) {
      result.tariff = tariffMatch[1].toUpperCase()
    }

    result.periodPowers = findPeriodValues(text, 'kW')
    result.periodConsumption = findPeriodValues(text, 'kWh')

    const powerMatch = text.match(/Potencia\s+punta\s*:\s*(\d+[.,]?\d*)\s*kW/i)
    const valleyMatch = text.match(/Potencia\s+valle\s*:\s*(\d+[.,]?\d*)\s*kW/i)

    if (powerMatch || valleyMatch) {
      result.power = {
        punta: powerMatch?.[1] || null,
        valle: valleyMatch?.[1] || null
      }
    }

    const maxDemandMatch = text.match(
      /Potencias\s+m\S*ximas\s+demandadas.*?(\d+[.,]?\d*)\s*kW.*?(\d+[.,]?\d*)\s*kW/is
    )

    if (maxDemandMatch) {
      result.maxDemand = {
        punta: maxDemandMatch[1],
        valle: maxDemandMatch[2]
      }
    }

    const contracted = parseFloat(
      (result.periodPowers?.P1 || result.power?.punta || '').replace(',', '.')
    )
    const demanded = parseFloat((result.maxDemand?.punta || '').replace(',', '.'))

    if (contracted && demanded && contracted > demanded * 2) {
      result.warnings.push(
        'Se detectan posibles desviaciones entre potencia contratada y demanda real'
      )
    }

    const reactiveMatch = text.match(
      /Importe\s+por\s+energ\S+a\s+reactiva.*?([\d.,]+)\s*\u20ac/is
    )

    if (reactiveMatch && parseFloat(reactiveMatch[1].replace(',', '.')) > 0) {
      result.reactiveEnergy = reactiveMatch[1]
      result.warnings.push('Se detectan posibles penalizaciones por energia reactiva')
    }

    const excessMatch = text.match(/Excesos\s+de\s+Potencia\s*([\d.,]+)\s*\u20ac/i)

    if (excessMatch && parseFloat(excessMatch[1].replace(',', '.')) > 0) {
      result.powerExcess = excessMatch[1]
      result.warnings.push('Se detectan indicios de excesos de potencia en el suministro')
    }

    if (/Penalizaci\S+n\s+por\s+baja\s+anticipada\s*:\s*SI/i.test(text)) {
      result.warnings.push('El suministro podria tener condiciones de permanencia activas')
    }

    const energyCostMatch = text.match(
      /(?:Termino|T\S*rmino)\s+de\s+energ\S+.*?([\d.,]+)\s*\u20ac/is
    )

    if (energyCostMatch) {
      result.energyCost = energyCostMatch[1]
    }

    const powerCostMatch = text.match(
      /(?:Termino|T\S*rmino)\s+de\s+potencia.*?([\d.,]+)\s*\u20ac/is
    )

    if (powerCostMatch) {
      result.powerCost = powerCostMatch[1]
    }

    result.billingPeriod = findBillingPeriod(text)
    result.total = findTotal(text)

    if (contracted > 15) {
      result.warnings.push('Potencia contratada elevada')
    }

    result.warnings = result.warnings.slice(0, 2)

  return result
}

export default async function extractInvoiceData(buffer) {
  try {
    const text = await extractInvoiceText(buffer)

    return extractInvoiceDataFromText(text)
  }
  catch {
    return null
  }
}
