import pdfParse from 'pdf-parse/lib/pdf-parse.js'

export default async function extractInvoiceData(buffer) {

  try {

    const data = await pdfParse(buffer)

    const text = data.text

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

    // COMERCIALIZADORA

const companies = [

  'Iberdrola',
  'Endesa',
  'Naturgy',
  'Holaluz',
  'Repsol',
  'Aldro',
  'Factor Energía',
  'Plenitude',
  'Aizen',
  'Plena Energía',
  'Audax',
  'Fenie',
  'CHC',
  'Octopus',
  'Podo',
  'Acciona',
  'EDP',
  "Lucera",
  "Cepsa",
  "Energía XXI",
  "Gana Energía",
  "Candela Energía",
  "Cobra",
  "Energía de Madrid",
  "Energía XXI",
  "Axpo",
  "AEQ",
  "Agraria",
  "Eleia",
  "Ignis",
  "GALP",
  "Acciona",
  "TotalEnergies",

]

for (const company of companies) {

  const regex =
    new RegExp(company, 'i')

  if (regex.test(text)) {

    result.company = company

    break

  }

}

    // TARIFA

    const tariffMatch =
      text.match(/(2\.0TD|3\.0TD|6\.1TD)/i)

    if (tariffMatch) {
      result.tariff = tariffMatch[1]
    }

    // POTENCIA

const periodPowers = {}

for (let i = 1; i <= 6; i++) {

  const match =
    text.match(
      new RegExp(
        `P${i}:\\s*(\\d+[.,]?\\d*)\\s*kW`,
        'i'
      )
    )

  if (match) {

    periodPowers[`P${i}`] = match[1]

  }

}

if (
  Object.keys(periodPowers).length
) {

  result.periodPowers = periodPowers

}

const periodConsumption = {}

for (let i = 1; i <= 6; i++) {

  const match =
    text.match(
      new RegExp(
        `P${i}:\\s*(\\d+[.,]?\\d*)\\s*kWh`,
        'i'
      )
    )

  if (match) {

    periodConsumption[`P${i}`] = match[1]

  }

}

if (
  Object.keys(periodConsumption).length
) {

  result.periodConsumption = periodConsumption

}

const powerMatch =
  text.match(
    /Potencia punta:\s*(\d+[.,]?\d*)\s*kW/i
  )

const valleyMatch =
  text.match(
    /Potencia valle:\s*(\d+[.,]?\d*)\s*kW/i
  )

if (powerMatch || valleyMatch) {

  result.power = {

    punta: powerMatch
      ? powerMatch[1]
      : null,

    valle: valleyMatch
      ? valleyMatch[1]
      : null

  }

}

const maxDemandMatch =
  text.match(
    /Potencias máximas demandadas.*?(\d+[.,]?\d*)\s*kW.*?(\d+[.,]?\d*)\s*kW/is
  )

if (maxDemandMatch) {

  result.maxDemand = {

    punta: maxDemandMatch[1],
    valle: maxDemandMatch[2]

  }

}

const contracted =
  parseFloat(
    result.power?.punta?.replace(',', '.')
  )

const demanded =
  parseFloat(
    result.maxDemand?.punta?.replace(',', '.')
  )

if (
  contracted &&
  demanded &&
  contracted > demanded * 2
) {

  result.warnings.push(
    'Se detectan posibles desviaciones entre potencia contratada y demanda real'
  )

}
const reactiveMatch =
  text.match(
    /Importe por energía reactiva.*?([\d.,]+)\s*€/is
  )

if (
  reactiveMatch &&
  parseFloat(
    reactiveMatch[1].replace(',', '.')
  ) > 0
) {


  result.reactiveEnergy = reactiveMatch[1]

result.warnings.push(
    'Se detectan posibles penalizaciones por energía reactiva'
  )

}
const excessMatch =
  text.match(
    /Excesos de Potencia\s*([\d.,]+)\s*€/i
  )

if (
  excessMatch &&
  parseFloat(
    excessMatch[1].replace(',', '.')
  ) > 0
) {


  result.powerExcess = excessMatch[1]

result.warnings.push(
    'Se detectan indicios de excesos de potencia en el suministro'
  )

}
if (

  /Penalización por baja anticipada:\s*SI/i.test(text)

) {

  result.warnings.push(
    'El suministro podría tener condiciones de permanencia activas'
  )

}
const energyCostMatch =
  text.match(/(?:Termino|T\S+rmino)\s+de\s+energ\S+.*?([\d.,]+)\s*€/is)

if (energyCostMatch) {
  result.energyCost = energyCostMatch[1]
}

const powerCostMatch =
  text.match(/(?:Termino|T\S+rmino)\s+de\s+potencia.*?([\d.,]+)\s*€/is)

if (powerCostMatch) {
  result.powerCost = powerCostMatch[1]
}

const periodMatch =
  text.match(/(?:Periodo|Per\S+odo)\s+(?:facturado|de facturaci\S+n).*?(\d{1,2}[\/.-]\d{1,2}[\/.-]\d{2,4}).*?(\d{1,2}[\/.-]\d{1,2}[\/.-]\d{2,4})/is)

if (periodMatch) {
  result.billingPeriod = {
    from: periodMatch[1],
    to: periodMatch[2]
  }
}
// TOTAL FACTURA

    const totalMatch =
      text.match(
        /Total(?:\s+factura)?\s*[:€]?\s*(\d+[.,]\d+)/i
      )

    if (totalMatch) {
      result.total = totalMatch[1]
    }

    // WARNINGS

const numericPower =
  parseFloat(
    result.power?.punta?.replace(',', '.')
  )

if (numericPower > 15) {

  result.warnings.push(
    'Potencia contratada elevada'
  )

}
result.warnings =
  result.warnings.slice(0, 2)
    return result

  } catch (error) {

    console.error(error)

    return null

  }

}
