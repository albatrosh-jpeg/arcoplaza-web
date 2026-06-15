export const invoiceDiagnosisFields = [
  'CUPS',
  'Comercializadora',
  'Tarifa de acceso',
  'Potencia contratada por periodo',
  'Consumo por periodo',
  'Coste de energia',
  'Coste de potencia',
  'Energia reactiva',
  'Excesos de potencia',
  'Periodo facturado',
  'Total factura'
]

function hasValue(value) {
  if (Array.isArray(value)) return value.length > 0
  if (value && typeof value === 'object') return Object.keys(value).length > 0
  return value !== null && value !== undefined && value !== ''
}

function getMarketContext(marketData) {
  const source = marketData?.sources?.omieDaily
  const daily = source?.status === 'available' ? marketData?.daily : null

  if (!daily) {
    return {
      available: false,
      label: 'Referencia de mercado no disponible'
    }
  }

  return {
    available: true,
    label: `${daily.marketType ?? 'Mercado diario OMIE'} - ${daily.dataDate ?? 'fecha no disponible'}`,
    source: daily.source ?? source.source ?? 'OMIE',
    average: daily.average,
    unit: daily.unit
  }
}

export function buildManualSupplyDiagnosis({
  tipo,
  gasto,
  potencia,
  resultado,
  marketData
}) {
  const market = getMarketContext(marketData)
  const observations = []

  if (!hasValue(gasto)) {
    observations.push('Introduce el gasto mensual para iniciar la lectura preliminar.')
  }

  if (!hasValue(potencia)) {
    observations.push('La potencia contratada es necesaria para mostrar un rango economico orientativo.')
  }

  if (resultado?.status === 'available') {
    observations.push('Contrato compatible con una revision tecnica de condiciones actuales.')
    observations.push('Posible optimizacion del termino fijo sujeta a revisar factura y maximetros.')
  }

  if (market.available) {
    observations.push(`Contexto de mercado incorporado desde ${market.source}.`)
  }

  return {
    mode: 'manual',
    title: 'Diagnostico preliminar del suministro',
    supplyType: tipo,
    market,
    observations: observations.slice(0, 4)
  }
}

export function buildInvoiceSupplyDiagnosis(invoiceData, marketData) {
  const market = getMarketContext(marketData)
  const observations = []
  const detectedFields = {
    cups: invoiceData?.cups ?? null,
    company: invoiceData?.company ?? null,
    tariff: invoiceData?.tariff ?? null,
    periodPowers: invoiceData?.periodPowers ?? invoiceData?.power ?? null,
    periodConsumption: invoiceData?.periodConsumption ?? null,
    energyCost: invoiceData?.energyCost ?? null,
    powerCost: invoiceData?.powerCost ?? null,
    reactiveEnergy: invoiceData?.reactiveEnergy ?? null,
    powerExcess: invoiceData?.powerExcess ?? null,
    billingPeriod: invoiceData?.billingPeriod ?? null,
    total: invoiceData?.total ?? null
  }

  if (hasValue(detectedFields.periodPowers)) {
    observations.push('Potencia revisable a partir de los periodos detectados.')
    observations.push('Posible optimizacion del termino fijo pendiente de comparar con demanda real.')
  }

  if (hasValue(detectedFields.powerExcess)) {
    observations.push('Se detectan excesos de potencia.')
  }
  else if (hasValue(detectedFields.periodPowers)) {
    observations.push('No se detectan excesos de potencia en la lectura preliminar.')
  }

  if (hasValue(detectedFields.reactiveEnergy)) {
    observations.push('Se detecta energia reactiva y conviene revisar su impacto.')
  }

  if (hasValue(detectedFields.tariff)) {
    observations.push('Contrato compatible con alternativas actuales de mercado.')
  }

  if (market.available) {
    observations.push(`Contexto de mercado cruzado con ${market.source}.`)
  }

  invoiceData?.warnings?.forEach((warning) => {
    if (warning && observations.length < 6) {
      observations.push(warning)
    }
  })

  if (!observations.length) {
    observations.push('Conviene realizar una revision tecnica con la factura completa.')
  }

  return {
    mode: 'invoice',
    title: 'Diagnostico preliminar con factura',
    market,
    detectedFields,
    observations: observations.slice(0, 6),
    missingFields: invoiceDiagnosisFields.filter((field) => {
      const keyByLabel = {
        CUPS: 'cups',
        Comercializadora: 'company',
        'Tarifa de acceso': 'tariff',
        'Potencia contratada por periodo': 'periodPowers',
        'Consumo por periodo': 'periodConsumption',
        'Coste de energia': 'energyCost',
        'Coste de potencia': 'powerCost',
        'Energia reactiva': 'reactiveEnergy',
        'Excesos de potencia': 'powerExcess',
        'Periodo facturado': 'billingPeriod',
        'Total factura': 'total'
      }

      return !hasValue(detectedFields[keyByLabel[field]])
    })
  }
}
