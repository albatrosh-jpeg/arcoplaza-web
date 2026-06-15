function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

function getDailyMarket(marketData) {
  const source = marketData?.sources?.omieDaily

  if (source?.status !== 'available' || !marketData?.daily) {
    return null
  }

  const {
    average,
    min,
    max,
    currentPrice,
    unit,
    dataDate,
    queryDate
  } = marketData.daily

  if (
    !Number.isFinite(Number(average)) ||
    !Number.isFinite(Number(min)) ||
    !Number.isFinite(Number(max))
  ) {
    return null
  }

  return {
    average: Number(average),
    min: Number(min),
    max: Number(max),
    currentPrice: Number.isFinite(Number(currentPrice))
      ? Number(currentPrice)
      : Number(average),
    unit,
    dataDate,
    queryDate,
    source: source.source ?? 'OMIE',
    marketType: source.marketType ?? 'Mercado diario OMIE'
  }
}

export default function calculateSavings({
  gasto,
  tipo,
  potencia,
  marketData,
  marketLoading = false,
  marketError = null
}) {
  if (!gasto) return null

  const annualSpend = Number(gasto) * 12

  if (!Number.isFinite(annualSpend) || annualSpend <= 0) {
    return null
  }

  const contractedPower = Number(potencia)

  if (!Number.isFinite(contractedPower) || contractedPower <= 0) {
    return {
      status: 'needs_power',
      reason: 'Introduce la potencia contratada para mostrar una estimación económica. Sin ese dato solo podemos interpretar el gasto anual de forma preliminar.',
      min: null,
      max: null,
      minPercent: null,
      maxPercent: null
    }
  }

  if (contractedPower > 200) {
    return {
      status: 'invalid_power',
      reason: 'Introduce una potencia contratada de hasta 200 kW para mantener esta estimación dentro del rango previsto de la calculadora.',
      min: null,
      max: null,
      minPercent: null,
      maxPercent: null
    }
  }

  const dailyMarket = getDailyMarket(marketData)

  if (!dailyMarket) {
    return {
      status: marketLoading ? 'loading' : 'unavailable',
      reason: marketError
        ? 'No se pudo conectar con la fuente de mercado.'
        : 'Dato OMIE no disponible.',
      min: null,
      max: null,
      minPercent: null,
      maxPercent: null
    }
  }

  const marketSpread =
    (dailyMarket.max - dailyMarket.min) / dailyMarket.average
  const currentPressure = Math.max(
    0,
    (dailyMarket.currentPrice - dailyMarket.average) / dailyMarket.average
  )
  const powerSignal = clamp(contractedPower / 100, 0, marketSpread / 2)

  const supplyComplexity = {
    vivienda: 0.72,
    empresa: 1,
    comunidad: 1.08
  }[tipo] ?? 1

  const marketOpportunity = (
    marketSpread * 0.22 +
    currentPressure * 0.1 +
    powerSignal
  ) * supplyComplexity

  const minFactor = clamp(marketOpportunity * 0.55, 0.03, 0.16)
  const maxFactor = clamp(marketOpportunity, minFactor + 0.02, 0.34)

  const min = Math.round(annualSpend * minFactor)
  const max = Math.round(annualSpend * maxFactor)

  return {
    status: 'available',
    min,
    max,
    minPercent: Math.round(minFactor * 100),
    maxPercent: Math.round(maxFactor * 100),
    market: dailyMarket
  }
}
