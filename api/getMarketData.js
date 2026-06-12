function formatNumber(value, digits = 2) {
  return Number(value)
    .toFixed(digits)
    .replace('.', ',')
}

function unavailableSource(source, reason, extra = {}) {
  return {
    status: 'unavailable',
    source,
    reason,
    ...extra
  }
}

function madridDateParts() {
  const date = new Date()
  const dateParts = new Intl.DateTimeFormat(
    'sv-SE',
    {
      timeZone: 'Europe/Madrid',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }
  ).format(date)

  const hour = Number(
    new Intl.DateTimeFormat(
      'en-GB',
      {
        timeZone: 'Europe/Madrid',
        hour: '2-digit',
        hour12: false
      }
    ).format(date)
  )

  return {
    date: dateParts,
    hour
  }
}

function formatCompactDate(date) {
  return date.toISOString().slice(0, 10).replaceAll('-', '')
}

function formatIsoDateFromParts(year, month, day) {
  return [
    String(year).padStart(4, '0'),
    String(month).padStart(2, '0'),
    String(day).padStart(2, '0')
  ].join('-')
}

function recentMadridDates(days = 7) {
  const { date } = madridDateParts()
  const start = new Date(`${date}T12:00:00Z`)

  return Array.from({ length: days }, (_, index) => {
    const value = new Date(start)
    value.setUTCDate(value.getUTCDate() - index)
    return {
      iso: value.toISOString().slice(0, 10),
      compact: formatCompactDate(value)
    }
  })
}

function currentIsoWeekInfo() {
  const { date } = madridDateParts()
  const value = new Date(`${date}T12:00:00Z`)
  const target = new Date(Date.UTC(
    value.getUTCFullYear(),
    value.getUTCMonth(),
    value.getUTCDate()
  ))

  const day = target.getUTCDay() || 7
  target.setUTCDate(target.getUTCDate() + 4 - day)

  const weekYear = target.getUTCFullYear()
  const yearStart = new Date(Date.UTC(weekYear, 0, 1))
  const week = Math.ceil((((target - yearStart) / 86400000) + 1) / 7)

  return {
    week,
    year: weekYear,
    yearSuffix: String(weekYear).slice(-2)
  }
}

function decodeHtml(value = '') {
  return String(value)
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&euro;/g, 'EUR')
}

function stripTags(value = '') {
  return decodeHtml(value)
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function parseMarketValue(value) {
  const clean = stripTags(value)

  if (!clean || /^n\.a\.$/i.test(clean)) {
    return null
  }

  const numeric = Number(clean.replace(',', '.'))
  return Number.isFinite(numeric) ? numeric : clean
}

function parseCsvNumber(value) {
  if (value === undefined || value === null) {
    return null
  }

  const clean = String(value).trim().replace(',', '.')

  if (!clean || /^n\.a\.$/i.test(clean)) {
    return null
  }

  const numeric = Number(clean)
  return Number.isFinite(numeric) ? numeric : null
}

function readPopupField(rowHtml, label) {
  const match = new RegExp(`<label>\\s*${label}:\\s*<\\/label>\\s*([^<]+)`, 'i')
    .exec(rowHtml)

  return match ? stripTags(match[1]) : null
}

function parseTableCells(rowHtml) {
  return Array.from(rowHtml.matchAll(/<td\b([^>]*)>([\s\S]*?)<\/td>/gi))
    .filter((match) => {
      const attrs = match[1]
      return !/class="[^"]*divider/i.test(attrs) && !/colspan=/i.test(attrs)
    })
    .map((match) => match[2])
}

function parseOmipWeek(weekLabel) {
  const match = String(weekLabel).match(/Wk(\d{1,2})-(\d{2})/i)

  if (!match) {
    return null
  }

  return {
    week: Number(match[1]),
    yearSuffix: match[2]
  }
}

function selectOmipReference(contracts) {
  const current = currentIsoWeekInfo()
  const withMeta = contracts
    .map((item) => ({
      ...item,
      meta: parseOmipWeek(item.weekCode)
    }))
    .filter((item) => item.meta)

  const exact = withMeta.find((item) =>
    item.meta.week === current.week &&
    item.meta.yearSuffix === current.yearSuffix
  )

  if (exact) {
    return {
      item: exact,
      label: 'semana corriente',
      kind: 'current-week'
    }
  }

  const next = withMeta
    .filter((item) =>
      item.meta.yearSuffix === current.yearSuffix &&
      item.meta.week > current.week
    )
    .sort((a, b) => a.meta.week - b.meta.week)[0]

  if (next) {
    return {
      item: next,
      label: 'proxima semana publicada',
      kind: 'next-published-week'
    }
  }

  return {
    item: withMeta.at(-1) ?? contracts.at(-1),
    label: 'ultima semana publicada',
    kind: 'latest-published-week'
  }
}

function summarizeSeries(rows, valueKey) {
  const values = rows
    .map((item) => item[valueKey])
    .filter((value) => Number.isFinite(value))

  if (!values.length) {
    return null
  }

  const average = values.reduce((total, price) => total + price, 0) / values.length
  const min = Math.min(...values)
  const max = Math.max(...values)

  return {
    average,
    min,
    max,
    minPeriod: rows.find((item) => item[valueKey] === min)?.period,
    maxPeriod: rows.find((item) => item[valueKey] === max)?.period
  }
}

function hourRangeFromPeriod(period) {
  if (!Number.isFinite(Number(period))) {
    return null
  }

  const start = Number(period) - 1
  const end = Number(period)

  return `${String(start).padStart(2, '0')}:00 - ${String(end).padStart(2, '0')}:00`
}

function summarizeDaily(hours, currentHour) {
  const summary = summarizeSeries(hours, 'price')

  if (!summary) {
    return null
  }

  const minRow = hours.find((item) => item.price === summary.min)
  const maxRow = hours.find((item) => item.price === summary.max)

  return {
    ...summary,
    minHour: minRow?.hour,
    maxHour: maxRow?.hour,
    cheapestHourRange: hourRangeFromPeriod(minRow?.period),
    priciestHourRange: hourRangeFromPeriod(maxRow?.period),
    currentHour,
    currentPrice: hours.find((item) => item.period === currentHour + 1)?.price ?? hours[0]?.price
  }
}

function percentChange(current, previous) {
  const currentValue = Number(current)
  const previousValue = Number(previous)

  if (!Number.isFinite(currentValue) || !Number.isFinite(previousValue) || previousValue === 0) {
    return null
  }

  return ((currentValue - previousValue) / previousValue) * 100
}

function describePercentChange(value) {
  if (!Number.isFinite(Number(value))) {
    return 'Dato no disponible'
  }

  const absolute = Math.abs(Number(value))
    .toFixed(1)
    .replace('.', ',')

  if (Math.abs(Number(value)) < 0.1) {
    return 'Sin cambios relevantes'
  }

  return `${Number(value) > 0 ? '+' : '-'}${absolute}%`
}

function buildDailyMarketSummary(latest, previousDays = []) {
  if (!latest) {
    return null
  }

  const previousDay = previousDays[0] ?? null
  const comparableWeek = previousDays
    .slice(0, 7)
    .map((item) => Number(item.average))
    .filter(Number.isFinite)
  const previousWeekAverage = comparableWeek.length >= 3
    ? comparableWeek.reduce((total, value) => total + value, 0) / comparableWeek.length
    : null
  const dailyVariationPercent = previousDay
    ? percentChange(latest.average, previousDay.average)
    : null
  const weeklyVariationPercent = previousWeekAverage
    ? percentChange(latest.average, previousWeekAverage)
    : null

  const referenceVariation = Number.isFinite(weeklyVariationPercent)
    ? weeklyVariationPercent
    : dailyVariationPercent
  const trendLabel = !Number.isFinite(referenceVariation)
    ? 'Dato no disponible'
    : Math.abs(referenceVariation) < 5
      ? 'Mercado estable'
      : referenceVariation > 0
        ? 'Mercado al alza'
        : 'Mercado a la baja'
  const commentary = !Number.isFinite(weeklyVariationPercent)
    ? 'No hay histórico reciente suficiente de OMIE para contextualizar la sesión sin introducir estimaciones.'
    : Math.abs(weeklyVariationPercent) < 5
      ? 'El precio medio diario se mantiene en niveles cercanos a la media observada durante las últimas sesiones publicadas.'
      : weeklyVariationPercent > 0
        ? 'El precio medio diario se sitúa por encima de la media observada durante las últimas sesiones publicadas.'
        : 'El precio medio diario se sitúa por debajo de la media observada durante las últimas sesiones publicadas.'

  return {
    source: 'OMIE',
    marketType: latest.marketType,
    dataDate: latest.dataDate,
    queryDate: latest.queryDate,
    unit: latest.unit,
    average: latest.average,
    averageMWh: latest.average * 1000,
    dailyVariationPercent,
    dailyVariationLabel: describePercentChange(dailyVariationPercent),
    weeklyVariationPercent,
    weeklyVariationLabel: describePercentChange(weeklyVariationPercent),
    trendLabel,
    commentary,
    comparisonDays: comparableWeek.length,
    previousDayDate: previousDay?.dataDate ?? null
  }
}
function buildOmieDownloadUrl(filename, parents) {
  const params = new URLSearchParams({
    filename,
    parents
  })

  return `https://www.omie.es/es/file-download?${params.toString()}`
}

async function fetchOmieText(filename, parents) {
  const response = await fetch(
    buildOmieDownloadUrl(filename, parents),
    {
      headers: {
        Accept: 'application/octet-stream,text/plain,*/*'
      }
    }
  )

  if (!response.ok) {
    throw new Error(`OMIE ${filename} responded ${response.status}`)
  }

  const buffer = await response.arrayBuffer()
  return new TextDecoder('windows-1252').decode(buffer)
}

async function fetchFirstValidOmieFile(candidates, parser) {
  for (const candidate of candidates) {
    try {
      const text = await fetchOmieText(candidate.filename, candidate.parents)
      const parsed = parser(text, candidate)

      if (parsed) {
        return parsed
      }
    }
    catch {}
  }

  return null
}

function parseOmieDailyFile(text, candidate) {
  const lines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)

  if (lines[0] !== 'MARGINALPDBC;') {
    return null
  }

  const rows = lines.slice(1)
    .map((line) => line.split(';'))
    .map((columns) => {
      const year = Number(columns[0])
      const month = Number(columns[1])
      const day = Number(columns[2])
      const period = Number(columns[3])
      const priceMWh = parseCsvNumber(columns[4])
      const portugalPriceMWh = parseCsvNumber(columns[5])

      if (!year || !month || !day || !period || !Number.isFinite(priceMWh)) {
        return null
      }

      return {
        date: formatIsoDateFromParts(year, month, day),
        period,
        hour: `${String(period - 1).padStart(2, '0')}:00`,
        price: priceMWh / 1000,
        priceMWh,
        spainPrice: priceMWh / 1000,
        spainPriceMWh: priceMWh,
        portugalPrice: Number.isFinite(portugalPriceMWh) ? portugalPriceMWh / 1000 : null,
        portugalPriceMWh
      }
    })
    .filter(Boolean)
    .slice(0, 24)

  if (!rows.length) {
    return null
  }

  const summary = summarizeDaily(rows, madridDateParts().hour)

  if (!summary) {
    return null
  }

  return {
    status: 'available',
    source: 'OMIE',
    sourceDetail: 'Precios horarios del mercado diario en Espana',
    marketType: 'Mercado Diario',
    fileType: 'MARGINALPDBC',
    queryDate: madridDateParts().date,
    dataDate: rows[0].date,
    unit: '\u20ac/kWh',
    sourceUnit: 'EUR/MWh',
    conversion: 'OMIE publica en EUR/MWh; los indicadores horarios se convierten dividiendo entre 1000.',
    hours: rows,
    ...summary
  }
}

function parseOmieIntradayAuctionFile(text, candidate) {
  const lines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)

  if (lines[0] !== 'MARGINALPIBC;') {
    return null
  }

  const rows = lines.slice(1)
    .map((line) => line.split(';'))
    .map((columns) => {
      const year = Number(columns[0])
      const month = Number(columns[1])
      const day = Number(columns[2])
      const period = Number(columns[3])
      const priceMWh = parseCsvNumber(columns[4])
      const portugalPriceMWh = parseCsvNumber(columns[5])

      if (!year || !month || !day || !period || !Number.isFinite(priceMWh)) {
        return null
      }

      return {
        date: formatIsoDateFromParts(year, month, day),
        period,
        price: priceMWh / 1000,
        priceMWh,
        spainPrice: priceMWh / 1000,
        spainPriceMWh: priceMWh,
        portugalPrice: Number.isFinite(portugalPriceMWh) ? portugalPriceMWh / 1000 : null,
        portugalPriceMWh
      }
    })
    .filter(Boolean)

  if (!rows.length) {
    return null
  }

  const summary = summarizeSeries(rows, 'price')

  if (!summary) {
    return null
  }

  return {
    session: candidate.session,
    dataDate: rows[0].date,
    rows,
    ...summary
  }
}

function parseOmieContinuousFile(text) {
  const lines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)

  const headerIndex = lines.findIndex((line) => line.includes(';Periodo;') && line.includes('Medio'))

  if (headerIndex < 0) {
    return null
  }

  const rows = lines.slice(headerIndex + 1)
    .map((line) => line.split(';'))
    .map((columns) => {
      const year = Number(columns[0])
      const month = Number(columns[1])
      const day = Number(columns[2])
      const period = Number(columns[3])
      const maxSpain = parseCsvNumber(columns[4])
      const minSpain = parseCsvNumber(columns[7])
      const averageSpain = parseCsvNumber(columns[10])

      if (!year || !month || !day || !period || !Number.isFinite(averageSpain)) {
        return null
      }

      return {
        date: formatIsoDateFromParts(year, month, day),
        period,
        maxSpain: Number.isFinite(maxSpain) ? maxSpain / 1000 : null,
        minSpain: Number.isFinite(minSpain) ? minSpain / 1000 : null,
        averageSpain: averageSpain / 1000,
        maxSpainMWh: maxSpain,
        minSpainMWh: minSpain,
        averageSpainMWh: averageSpain
      }
    })
    .filter(Boolean)

  if (!rows.length) {
    return null
  }

  const summary = summarizeSeries(rows, 'averageSpain')

  if (!summary) {
    return null
  }

  return {
    status: 'available',
    source: 'OMIE',
    sourceDetail: 'Precios maximos, minimos y medios ponderados del mercado intradiario continuo',
    marketType: 'Mercado Intradiario Continuo',
    fileType: 'precios_pibcic',
    queryDate: madridDateParts().date,
    dataDate: rows[0].date,
    unit: '\u20ac/kWh',
    sourceUnit: 'EUR/MWh',
    conversion: 'OMIE publica en EUR/MWh; los indicadores se convierten dividiendo entre 1000.',
    rows,
    ...summary
  }
}

async function fetchValidOmieDailyFiles(limit = 8) {
  const candidates = recentMadridDates(12).map((date) => ({
    filename: `marginalpdbc_${date.compact}.1`,
    parents: 'marginalpdbc'
  }))
  const parsedFiles = []

  for (const candidate of candidates) {
    try {
      const text = await fetchOmieText(candidate.filename, candidate.parents)
      const parsed = parseOmieDailyFile(text, candidate)

      if (parsed) {
        parsedFiles.push(parsed)
      }

      if (parsedFiles.length >= limit) {
        break
      }
    }
    catch {}
  }

  return parsedFiles
}

// Real daily market prices and comparisons come from OMIE MARGINALPDBC public files. If no valid file is found, no local numeric substitute is returned.
async function fetchOmieDailyMarket() {
  const history = await fetchValidOmieDailyFiles()
  const latest = history[0] ?? null

  if (!latest) {
    return null
  }

  return {
    ...latest,
    marketSummary: buildDailyMarketSummary(latest, history.slice(1)),
    recentDailyAverages: history.map((item) => ({
      dataDate: item.dataDate,
      average: item.average,
      unit: item.unit
    }))
  }
}

// Intraday auction prices come from OMIE MARGINALPIBC session files. Missing sessions are ignored, not replaced.
async function fetchOmieIntradayAuctions() {
  const sessions = ['01', '02', '03', '04', '05', '06', '07']

  for (const date of recentMadridDates()) {
    const parsedSessions = []

    for (const session of sessions) {
      const filename = `marginalpibc_${date.compact}${session}.1`

      try {
        const text = await fetchOmieText(filename, 'marginalpibc')
        const parsed = parseOmieIntradayAuctionFile(
          text,
          {
            filename,
            parents: 'marginalpibc',
            session
          }
        )

        if (parsed) {
          parsedSessions.push(parsed)
        }
      }
      catch {}
    }

    if (parsedSessions.length) {
      const latestSession = parsedSessions.at(-1)

      return {
        status: 'available',
        source: 'OMIE',
        sourceDetail: 'Precios del mercado intradiario de subastas en Espana',
        marketType: 'Mercado Intradiario de Subastas',
        fileType: 'MARGINALPIBC',
        queryDate: madridDateParts().date,
        dataDate: latestSession.dataDate,
        unit: '\u20ac/kWh',
        sourceUnit: 'EUR/MWh',
        conversion: 'OMIE publica en EUR/MWh; los indicadores se convierten dividiendo entre 1000.',
        sessions: parsedSessions,
        latestSession: latestSession.session,
        average: latestSession.average,
        min: latestSession.min,
        max: latestSession.max,
        minPeriod: latestSession.minPeriod,
        maxPeriod: latestSession.maxPeriod
      }
    }
  }

  return null
}

async function fetchOmieContinuousMarket() {
  const candidates = recentMadridDates().map((date) => ({
    filename: `precios_pibcic_${date.compact}.1`,
    parents: 'precios_pibcic'
  }))

  return fetchFirstValidOmieFile(candidates, parseOmieContinuousFile)
}

function parseOmipWeekRows(sectionHtml) {
  const rows = Array.from(sectionHtml.matchAll(/<tr class="(?:odd|even)">([\s\S]*?)<\/tr>/gi))
  const contracts = []

  rows.forEach((rowMatch) => {
    const rowHtml = rowMatch[1]
    const contractMatch = /<\/span>\s*([^<]*FTB\s+Wk\d{1,2}-\d{2})\s*<\/strong>/i.exec(rowHtml)

    if (!contractMatch) {
      return
    }

    const contractName = stripTags(contractMatch[1])
    const weekCode = contractName.match(/Wk\d{1,2}-\d{2}/i)?.[0]
    const cells = parseTableCells(rowHtml)

    if (!weekCode || cells.length < 12) {
      return
    }

    const referencePriceD = parseMarketValue(cells[10])
    const referencePriceDMinus1 = parseMarketValue(cells[11])
    const lastDealPrice = parseMarketValue(cells[4])
    const referenceValue = Number.isFinite(referencePriceD)
      ? referencePriceD
      : referencePriceDMinus1

    contracts.push({
      contractName,
      weekCode,
      tradingLastDay: readPopupField(rowHtml, 'Trading last day'),
      nominalMWh: parseMarketValue(readPopupField(rowHtml, 'Nominal Fixo MWH')),
      tradingQuotation: readPopupField(rowHtml, 'Trading quotation'),
      bestBid: parseMarketValue(cells[1]),
      bestAsk: parseMarketValue(cells[2]),
      volumeMWh: parseMarketValue(cells[3]),
      price: Number.isFinite(lastDealPrice) ? lastDealPrice : null,
      openInterest: parseMarketValue(cells[7]),
      nrContracts: parseMarketValue(cells[8]),
      otcVolume: parseMarketValue(cells[9]),
      referencePriceD: Number.isFinite(referencePriceD) ? referencePriceD : null,
      referencePriceDMinus1: Number.isFinite(referencePriceDMinus1) ? referencePriceDMinus1 : null,
      referenceValue: Number.isFinite(referenceValue) ? referenceValue : null
    })
  })

  return contracts.filter((item) => Number.isFinite(item.referenceValue))
}

function normalizeOmipContracts(contracts, metadata) {
  if (!Array.isArray(contracts) || !contracts.length) {
    return null
  }

  const reference = selectOmipReference(contracts)
  const referencePrice = reference.item?.referenceValue

  if (!Number.isFinite(referencePrice)) {
    return null
  }

  const publishedPrices = contracts
    .map((item) => item.referenceValue)
    .filter((value) => Number.isFinite(value))

  return {
    status: 'available',
    source: 'OMIP',
    sourceDetail: 'Resultados del mercado OMIP - Power Derivatives',
    product: 'SPEL Base Futures - Week',
    zone: metadata.zone,
    instrument: metadata.instrument,
    queryDate: metadata.queryDate,
    unit: 'EUR/MWh',
    priceNumber: referencePrice,
    price: formatNumber(referencePrice),
    referenceWeek: reference.item.weekCode,
    referenceLabel: reference.label,
    referenceKind: reference.kind,
    publishedWeeksCount: contracts.length,
    maxPublishedWeeks: formatNumber(Math.max(...publishedPrices)),
    minPublishedWeeks: formatNumber(Math.min(...publishedPrices)),
    contracts,
    history: contracts.map((item) => ({
      week: item.weekCode,
      price: item.referenceValue
    }))
  }
}

// Real OMIP data is parsed from the external OMIP market page. If parsing fails, the API returns unavailable.
async function fetchOmipWeekly() {
  const { date: queryDate } = madridDateParts()
  const zone = 'ES'
  const instrument = 'FTB'
  const url =
    process.env.OMIP_DATA_URL ??
    `https://www.omip.pt/es/dados-mercado?date=${queryDate}&product=EL&zone=${zone}&instrument=${instrument}`

  const response = await fetch(
    url,
    {
      headers: {
        Accept: 'text/html'
      }
    }
  )

  if (!response.ok) {
    throw new Error(`OMIP source responded ${response.status}`)
  }

  const html = await response.text()
  const weekSection =
    html.match(/SPEL Base Futures - Week([\s\S]*?)SPEL Base Futures - Month/i)?.[1]

  if (!weekSection) {
    return null
  }

  return normalizeOmipContracts(
    parseOmipWeekRows(weekSection),
    {
      queryDate,
      zone,
      instrument
    }
  )
}

export default async function handler(req, res) {
  let omieDaily = unavailableSource(
    'OMIE',
    'Mercado diario OMIE no disponible.',
    {
      marketType: 'Mercado Diario'
    }
  )
  let omieIntraday = unavailableSource(
    'OMIE',
    'Mercado intradiario de subastas OMIE no disponible.',
    {
      marketType: 'Mercado Intradiario de Subastas'
    }
  )
  let omieContinuous = unavailableSource(
    'OMIE',
    'Mercado intradiario continuo OMIE no disponible.',
    {
      marketType: 'Mercado Intradiario Continuo'
    }
  )
  let omip = unavailableSource(
    'OMIP',
    'Dato OMIP no disponible.'
  )

  try {
    omieDaily = await fetchOmieDailyMarket() ?? unavailableSource(
      'OMIE',
      'No se encontro un fichero MARGINALPDBC valido.',
      {
        marketType: 'Mercado Diario',
        queryDate: madridDateParts().date
      }
    )
  }
  catch (error) {
    console.error('OMIE daily market unavailable:', error)
  }

  try {
    omieIntraday = await fetchOmieIntradayAuctions() ?? unavailableSource(
      'OMIE',
      'No se encontro un fichero MARGINALPIBC valido.',
      {
        marketType: 'Mercado Intradiario de Subastas',
        queryDate: madridDateParts().date
      }
    )
  }
  catch (error) {
    console.error('OMIE intraday auctions unavailable:', error)
  }

  try {
    omieContinuous = await fetchOmieContinuousMarket() ?? unavailableSource(
      'OMIE',
      'No se encontro un fichero precios_pibcic valido.',
      {
        marketType: 'Mercado Intradiario Continuo',
        queryDate: madridDateParts().date
      }
    )
  }
  catch (error) {
    console.error('OMIE continuous market unavailable:', error)
  }

  try {
    omip = await fetchOmipWeekly() ?? unavailableSource(
      'OMIP',
      'No se pudo parsear la seccion SPEL Base Futures - Week desde OMIP.',
      {
        queryDate: madridDateParts().date,
        product: 'SPEL Base Futures - Week',
        zone: 'ES',
        instrument: 'FTB'
      }
    )
  }
  catch (error) {
    console.error('OMIP data unavailable:', error)
    omip = unavailableSource(
      'OMIP',
      'OMIP no respondio correctamente. Dato OMIP no disponible.',
      {
        queryDate: madridDateParts().date,
        product: 'SPEL Base Futures - Week',
        zone: 'ES',
        instrument: 'FTB'
      }
    )
  }

  const daily = omieDaily.status === 'available' ? omieDaily : null
  const omipData = omip.status === 'available' ? omip : null

  return res.status(200).json({
    success: true,
    generatedAt: new Date().toISOString(),
    sources: {
      omieDaily,
      omieIntraday,
      omieContinuous,
      omip
    },
    daily,
    marketSummary: daily?.marketSummary ?? null,
    recentDailyAverages: daily?.recentDailyAverages ?? [],
    intraday: omieIntraday.status === 'available' ? omieIntraday : null,
    continuous: omieContinuous.status === 'available' ? omieContinuous : null,
    omip: omipData,
    price: omipData?.price ?? null,
    maxPublishedWeeks: omipData?.maxPublishedWeeks ?? null,
    minPublishedWeeks: omipData?.minPublishedWeeks ?? null,
    history: omipData?.history ?? []
  })
}
