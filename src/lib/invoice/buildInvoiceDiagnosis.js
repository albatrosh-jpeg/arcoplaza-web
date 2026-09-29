import { buildInvoiceSupplyDiagnosis } from '../../utils/supplyDiagnosis.js'

function hasValue(value) {
  if (Array.isArray(value)) return value.length > 0
  if (value && typeof value === 'object') return Object.keys(value).length > 0
  return value !== null && value !== undefined && value !== ''
}

function maskCups(cups) {
  if (!cups) return null

  const clean = String(cups).trim()

  if (clean.length <= 8) {
    return `${clean.slice(0, 2)}...`
  }

  return `${clean.slice(0, 4)}...${clean.slice(-4)}`
}

function formatPeriod(period) {
  if (!period?.from && !period?.to) return null

  return [period.from, period.to]
    .filter(Boolean)
    .join(' - ')
}

function calculateConfidence(detectedFields) {
  const checks = [
    detectedFields.cups,
    detectedFields.company,
    detectedFields.tariff,
    detectedFields.periodPowers,
    detectedFields.periodConsumption,
    detectedFields.billingPeriod,
    detectedFields.total
  ]

  const detected = checks.filter(hasValue).length
  const score = Math.round((detected / checks.length) * 100)

  if (score >= 70) {
    return {
      level: 'Alta',
      score,
      text: 'La lectura automatica ha encontrado varios datos clave de la factura.'
    }
  }

  if (score >= 40) {
    return {
      level: 'Media',
      score,
      text: 'La lectura automatica ha encontrado algunos datos, pero conviene revisarlos manualmente.'
    }
  }

  return {
    level: 'Baja',
    score,
    text: 'Dato detectado con baja confianza. No podemos confirmar este punto solo con la lectura automatica.'
  }
}

function toPrudentObservation(observation) {
  const text = String(observation || '').trim()

  if (!text) return null

  const lower = text.toLowerCase()

  if (lower.includes('no se detectan excesos de potencia')) {
    return 'No se han identificado indicios de excesos de potencia en la lectura automatica.'
  }

  if (lower.includes('excesos de potencia')) {
    return 'Posible punto revisable: aparecen indicios relacionados con excesos de potencia.'
  }

  if (lower.includes('reactiva')) {
    return 'Posible punto revisable: la factura podria incluir energia reactiva.'
  }

  if (lower.includes('potencia')) {
    return 'Posible punto revisable: la potencia contratada requiere una comprobacion manual con la demanda real.'
  }

  if (lower.includes('tarifa') || lower.includes('contrato')) {
    return 'Posible punto revisable: las condiciones de tarifa o contrato podrian analizarse con mas detalle.'
  }

  if (lower.includes('permanencia')) {
    return 'Posible punto revisable: podria existir alguna condicion contractual que conviene confirmar.'
  }

  return text
}

function unique(values) {
  return Array.from(new Set(values.filter(Boolean)))
}

export function buildInvoiceDiagnosis(invoiceData) {
  const baseDiagnosis = buildInvoiceSupplyDiagnosis(invoiceData, null)
  const detectedFields = baseDiagnosis.detectedFields
  const confidence = calculateConfidence(detectedFields)

  const observations = unique([
    ...baseDiagnosis.observations.map(toPrudentObservation),
    'Una revision manual permitiria afinar el diagnostico.'
  ]).slice(0, 6)

  return {
    title: 'Diagnostico preliminar de factura',
    confidence,
    detectedFields: {
      cups: maskCups(detectedFields.cups),
      company: detectedFields.company,
      tariff: detectedFields.tariff,
      periodPowers: detectedFields.periodPowers,
      periodConsumption: detectedFields.periodConsumption,
      energyCost: detectedFields.energyCost,
      powerCost: detectedFields.powerCost,
      reactiveEnergy: detectedFields.reactiveEnergy,
      powerExcess: detectedFields.powerExcess,
      billingPeriod: detectedFields.billingPeriod,
      billingPeriodLabel: formatPeriod(detectedFields.billingPeriod),
      total: detectedFields.total
    },
    observations,
    missingFields: baseDiagnosis.missingFields,
    disclaimer: 'Este diagnostico es preliminar y no confirma sobrecostes por si solo.'
  }
}
