import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  LineChart,
  RadioTower,
  TrendingDown,
  TrendingUp
} from 'lucide-react'
import useMarketData from '../../hooks/useMarketData'

function formatMarketPrice(value, digits = 2) {
  if (!Number.isFinite(Number(value))) {
    return 'Dato no disponible'
  }

  return Number(value)
    .toFixed(digits)
    .replace('.', ',')
}

function formatDate(value) {
  if (!value) return 'Fecha no disponible'

  return new Intl.DateTimeFormat(
    'es-ES',
    {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }
  ).format(new Date(`${value}T12:00:00`))
}

function buildSparkline(hours = []) {
  const values = hours
    .map(item => Number(item.price))
    .filter(Number.isFinite)

  if (values.length < 2) return null

  const min = Math.min(...values)
  const max = Math.max(...values)
  const range = max - min || 1

  return values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * 100
      const y = 48 - ((value - min) / range) * 34
      return `${x.toFixed(2)},${y.toFixed(2)}`
    })
    .join(' ')
}

function Metric({ label, value, unit, detail }) {
  return (
    <div className="rounded-[18px] border border-white/[0.12] bg-white/[0.07] p-4 backdrop-blur-sm">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/[0.68]">
        {label}
      </p>
      <p className="mt-2 text-2xl font-semibold leading-none text-white">
        {value}
      </p>
      {unit && (
        <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#83D6A4]">
          {unit}
        </p>
      )}
      {detail && (
        <p className="mt-2 text-xs leading-relaxed text-white/[0.62]">
          {detail}
        </p>
      )}
    </div>
  )
}

function trendIcon(label) {
  if (label === 'Mercado al alza') return TrendingUp
  if (label === 'Mercado a la baja') return TrendingDown
  return LineChart
}

export default function MarketTeaser() {
  const {
    data: marketData,
    error,
    loading
  } = useMarketData()

  const dailySource = marketData?.sources?.omieDaily
  const daily = dailySource?.status === 'available'
    ? marketData?.daily
    : null
  const summary = daily?.marketSummary ?? marketData?.marketSummary ?? null
  const sparkline = useMemo(
    () => buildSparkline(daily?.hours),
    [daily]
  )
  const TrendIcon = trendIcon(summary?.trendLabel)
  const averageMWh = Number.isFinite(Number(summary?.averageMWh))
    ? summary.averageMWh
    : Number.isFinite(Number(daily?.average))
      ? Number(daily.average) * 1000
      : null

  return (
    <section className="relative overflow-hidden border-y border-[#E7E1D7] bg-[#F7F6F1]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.55] [background-image:radial-gradient(circle_at_80%_20%,rgba(45,126,81,0.13),transparent_28%),linear-gradient(115deg,rgba(255,255,255,0.9),rgba(247,246,241,0.78))]" />

      <div className="container-content relative py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-corporateGreen">
              Observatorio de mercado
            </p>

            <h2 className="heading-h2 mt-4 max-w-3xl text-corporate">
              Datos de mercado para interpretar mejor el coste de la energía.
            </h2>

            <p className="mt-5 max-w-2xl text-[17px] leading-8 text-[#46566B]">
              Arcoplaza reúne referencias de OMIE y OMIP para convertir la
              evolución del mercado eléctrico en una lectura clara, útil y
              verificable antes de revisar un suministro.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/mercado"
                className="inline-flex items-center gap-2 rounded-full bg-corporate-gradient px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(8,40,74,0.18)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                Ver análisis de mercado
                <ArrowRight size={17} />
              </Link>

              <div className="inline-flex items-center gap-2 rounded-full border border-[#D9E6DC] bg-white px-5 py-3 text-sm font-semibold text-[#2D7E51]">
                <RadioTower size={16} />
                Fuentes públicas verificables
              </div>
            </div>
          </div>

          <div className="card-top-accent overflow-hidden rounded-[28px] border border-[#DCD5CA] bg-[#071D31] shadow-[0_28px_80px_rgba(8,40,74,0.18)]">
            <div className="relative p-5 sm:p-7">
              <div className="pointer-events-none absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:42px_42px]" />
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#2D7E51]/25 blur-3xl" />

              <div className="relative">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#83D6A4]">
                      Mercado diario OMIE
                    </p>
                    <h3 className="mt-3 max-w-md text-2xl font-semibold leading-tight text-white sm:text-3xl">
                      Vista previa del Observatorio de Mercado
                    </h3>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/[0.62]">
                      Indicadores derivados de los ficheros reales de OMIE. Si la fuente no responde, no se sustituyen por estimaciones.
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/[0.12] bg-white/10 px-4 py-2 text-sm text-white/[0.70]">
                    <CalendarDays size={15} />
                    {loading ? 'Consultando' : formatDate(summary?.dataDate ?? daily?.dataDate ?? dailySource?.dataDate)}
                  </div>
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-[22px] border border-white/[0.12] bg-white/[0.08] p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/[0.68]">
                      Precio medio OMIE
                    </p>
                    <div className="mt-3 flex items-end gap-2">
                      <p className="text-5xl font-semibold leading-none text-white">
                        {loading ? '...' : averageMWh ? formatMarketPrice(averageMWh, 0) : '-'}
                      </p>
                      <p className="pb-1 text-sm font-semibold text-[#83D6A4]">
                        €/MWh
                      </p>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-white/[0.62]">
                      {daily ? `Equivale a ${formatMarketPrice(daily.average)} ${daily.unit}.` : 'Dato no disponible.'}
                    </p>
                  </div>

                  <div className="rounded-[22px] border border-white/[0.12] bg-white/[0.06] p-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#83D6A4]/35 bg-[#83D6A4]/10 text-[#83D6A4]">
                        <TrendIcon size={21} />
                      </span>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/[0.68]">
                          Tendencia
                        </p>
                        <p className="mt-1 text-xl font-semibold leading-tight text-white">
                          {loading ? 'Consultando' : summary?.trendLabel ?? 'Dato no disponible'}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-white/[0.64]">
                      {summary?.commentary ?? (error ? 'La API de mercado no ha respondido.' : dailySource?.reason ?? 'Dato no disponible.')}
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <Metric
                    label="Variación diaria"
                    value={loading ? '...' : summary?.dailyVariationLabel ?? 'Dato no disponible'}
                    detail={summary?.previousDayDate ? `Respecto al fichero del ${formatDate(summary.previousDayDate)}.` : 'Comparación no disponible sin sesión previa válida.'}
                  />
                  <Metric
                    label="Variación semanal"
                    value={loading ? '...' : summary?.weeklyVariationLabel ?? 'Dato no disponible'}
                    detail={summary?.comparisonDays ? `Respecto a la media de ${summary.comparisonDays} sesiones publicadas.` : 'Histórico insuficiente para comparar sin estimar.'}
                  />
                </div>

                <div className="mt-5 rounded-[22px] border border-white/[0.12] bg-white/[0.045] p-4">
                  <div className="mb-3 flex items-center justify-between gap-4 text-xs text-white/[0.58]">
                    <span className="inline-flex items-center gap-2">
                      <LineChart size={14} />
                      Evolución horaria como apoyo visual
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <BarChart3 size={14} />
                      Valores derivados de OMIE
                    </span>
                  </div>

                  <svg
                    viewBox="0 0 100 54"
                    className="h-24 w-full overflow-visible"
                    role="img"
                    aria-label="Vista previa secundaria de la evolución horaria del precio eléctrico"
                  >
                    <defs>
                      <linearGradient id="marketTeaserLine" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0%" stopColor="#45C08A" />
                        <stop offset="100%" stopColor="#1B74D1" />
                      </linearGradient>
                    </defs>

                    {[14, 28, 42].map(y => (
                      <line
                        key={y}
                        x1="0"
                        x2="100"
                        y1={y}
                        y2={y}
                        stroke="rgba(255,255,255,0.12)"
                        strokeWidth="0.4"
                      />
                    ))}

                    {sparkline ? (
                      <polyline
                        points={sparkline}
                        fill="none"
                        stroke="url(#marketTeaserLine)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                      />
                    ) : (
                      <path
                        d="M0 40 C16 37 20 27 34 30 C48 33 52 16 66 20 C78 23 82 14 100 16"
                        fill="none"
                        stroke="rgba(131,214,164,0.42)"
                        strokeLinecap="round"
                        strokeWidth="3"
                      />
                    )}
                  </svg>

                  {!daily && !loading && (
                    <p className="mt-2 text-sm leading-relaxed text-white/[0.62]">
                      {error
                        ? 'Dato no disponible. La API de mercado no ha respondido.'
                        : dailySource?.reason ?? 'Precio horario no disponible.'}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
