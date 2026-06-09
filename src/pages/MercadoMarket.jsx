import { useEffect, useState } from 'react'
import {
  Activity,
  ArrowDown,
  ArrowUp,
  CalendarDays,
  CircleAlert,
  Clock,
  Euro,
  Gauge,
  LineChart as LineChartIcon,
  Zap
} from 'lucide-react'
import DailyPriceChart from '../components/DailyPriceChart'
import Footer from '../components/sections/Footer'
import MarketOmipChart from '../components/MarketOmipChart'
import Navbar from '../components/sections/Navbar'

function formatMarketPrice(value, digits = 3) {
  if (!Number.isFinite(Number(value))) {
    return 'Dato no disponible'
  }

  return Number(value)
    .toFixed(digits)
    .replace('.', ',')
}

function formatDate(value) {
  if (!value) {
    return 'Fecha no disponible'
  }

  return new Intl.DateTimeFormat(
    'es-ES',
    {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }
  ).format(new Date(`${value}T12:00:00`))
}

function StatCard({
  icon: Icon,
  label,
  value,
  detail,
  tone = 'blue'
}) {
  const toneClasses = {
    blue: 'bg-[#EAF4FF] text-[#0A66B7]',
    green: 'bg-[#EAF7EF] text-[#2D7E51]',
    navy: 'bg-[#EAF0F7] text-[#08284A]'
  }

  return (
    <div className="card-top-accent rounded-[22px] border border-[#ECE7DD] bg-white p-5 shadow-[0_18px_40px_rgba(8,40,74,0.07)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7A8798]">
            {label}
          </p>
          <p className="mt-3 text-3xl font-semibold leading-none text-[#08284A]">
            {value}
          </p>
        </div>

        <div className={`flex h-11 w-11 items-center justify-center rounded-full ${toneClasses[tone]}`}>
          <Icon size={20} />
        </div>
      </div>

      {
        detail && (
          <p className="mt-4 text-sm leading-relaxed text-[#607089]">
            {detail}
          </p>
        )
      }
    </div>
  )
}

function MarketSourceCard({ source }) {
  const available = source?.status === 'available'

  return (
    <div className="card-top-accent rounded-[22px] border border-[#ECE7DD] bg-white p-5 shadow-[0_18px_40px_rgba(8,40,74,0.07)]">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2D7E51]">
        {source?.marketType ?? 'Mercado OMIE'}
      </p>
      <p className="mt-3 text-2xl font-semibold leading-tight text-[#08284A]">
        {available ? source.source : 'Dato no disponible'}
      </p>
      <div className="mt-4 space-y-1 text-sm leading-relaxed text-[#607089]">
        <p>
          Fuente: {source?.source ?? 'OMIE'}
        </p>
        <p>
          Fecha consultada: {formatDate(source?.queryDate)}
        </p>
        <p>
          Fecha del fichero: {formatDate(source?.dataDate)}
        </p>
        <p>
          Tipo de fichero: {source?.fileType ?? 'No disponible'}
        </p>
        {
          available ? (
            <>
              <p>
                Media calculada: {formatMarketPrice(source.average)} {source.unit}
              </p>
              {
                source.conversion && (
                  <p>
                    {source.conversion}
                  </p>
                )
              }
            </>
          ) : (
            <p>
              {source?.reason ?? 'OMIE no devolvio un fichero valido.'}
            </p>
          )
        }
      </div>
    </div>
  )
}

function UnavailablePanel({ title, message }) {
  return (
    <div className="flex min-h-[280px] items-center justify-center rounded-[22px] border border-[#E2EAE3] bg-[#FBFCFA] p-6 text-center">
      <div className="max-w-md">
        <CircleAlert className="mx-auto text-[#2D7E51]" size={26} />
        <p className="mt-4 text-lg font-semibold text-[#08284A]">
          {title}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-[#607089]">
          {message}
        </p>
      </div>
    </div>
  )
}

export default function MercadoMarket() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadMarketData() {
      try {
        const response = await fetch('/api/getMarketData')

        if (!response.ok) {
          throw new Error(`Market API responded ${response.status}`)
        }

        setData(await response.json())
      }
      catch (loadError) {
        console.error(loadError)
        setError('No se pudo conectar con la API de mercado.')
      }
      finally {
        setLoading(false)
      }
    }

    loadMarketData()
  }, [])

  const omieDailySource = data?.sources?.omieDaily
  const omieIntradaySource = data?.sources?.omieIntraday
  const omieContinuousSource = data?.sources?.omieContinuous
  const omipSource = data?.sources?.omip
  const daily = omieDailySource?.status === 'available' ? data.daily : null
  const omip = omipSource?.status === 'available' ? data.omip : null

  return (
    <div className="min-h-screen bg-[#F7F6F1] text-[#08284A]">
      <Navbar />

      <main className="pt-[74px]">
        <section className="bg-corporate-gradient relative overflow-hidden text-white">
          <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:72px_72px]" />

          <div className="container-content relative py-16 lg:py-20">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#83D6A4]">
                Mercado electrico
              </p>

              <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.96] text-white md:text-6xl">
                Precio de la luz hoy y referencia semanal OMIP
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/78">
                Consulta precios reales publicados por OMIE y la referencia semanal
                de futuros de OMIP para interpretar mejor el coste del suministro.
              </p>
            </div>
          </div>
        </section>

        <section className="container-content py-12 lg:py-16">
          {
            error && (
              <div className="mb-6 rounded-[20px] border border-[#E2EAE3] bg-white p-5 text-sm text-[#607089] shadow-[0_18px_40px_rgba(8,40,74,0.07)]">
                {error} Los precios no se sustituyen por datos de ejemplo.
              </div>
            )
          }

          <div className="grid gap-6 lg:grid-cols-[1.45fr_0.55fr]">
            <div className="card-top-accent rounded-[26px] border border-[#ECE7DD] bg-white p-6 shadow-[0_22px_70px_rgba(8,40,74,0.08)] lg:p-8">
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#2D7E51]">
                    Mercado diario OMIE
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#08284A] md:text-4xl">
                    Precios horarios del mercado diario en Espana
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-3 text-sm text-[#607089]">
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays size={16} />
                      Fichero: {formatDate(daily?.dataDate ?? omieDailySource?.dataDate)}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Clock size={16} />
                      Consulta: {formatDate(daily?.queryDate ?? omieDailySource?.queryDate)}
                    </span>
                  </div>
                </div>

                <div className="rounded-[20px] bg-[#EAF7EF] px-5 py-4 text-right">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2D7E51]">
                    Precio actual
                  </p>
                  <p className="mt-2 text-4xl font-semibold text-[#08284A]">
                    {
                      loading
                        ? '...'
                        : daily
                          ? formatMarketPrice(daily.currentPrice)
                          : '-'
                    }
                  </p>
                  <p className="text-sm text-[#607089]">
                    {daily?.unit ?? 'Dato no disponible'}
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-[22px] border border-[#E2EAE3] bg-[#FBFCFA] p-4 lg:p-6">
                {
                  daily ? (
                    <DailyPriceChart
                      data={daily.hours}
                      currentHour={daily.currentHour}
                      unit={daily.unit}
                    />
                  ) : (
                    <UnavailablePanel
                      title="Precio horario no disponible"
                      message={omieDailySource?.reason ?? 'OMIE no ha devuelto un fichero MARGINALPDBC valido.'}
                    />
                  )
                }
              </div>
            </div>

            <aside className="rounded-[26px] bg-corporate-gradient p-6 text-white shadow-[0_22px_70px_rgba(8,40,74,0.16)] lg:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/12 text-[#83D6A4]">
                <Activity size={24} />
              </div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-[#83D6A4]">
                Fuente de datos
              </p>

              <h2 className="mt-3 text-3xl font-semibold leading-tight">
                {daily ? daily.source : 'OMIE'}
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-white/74">
                {daily?.sourceDetail ?? omieDailySource?.reason ?? 'Precio horario no disponible.'}
              </p>

              {
                daily?.conversion && (
                  <p className="mt-4 text-sm leading-relaxed text-white/62">
                    {daily.conversion}
                  </p>
                )
              }

              {
                !daily && !loading && (
                  <div className="mt-6 flex gap-3 rounded-[18px] border border-white/15 bg-white/8 p-4 text-sm leading-relaxed text-white/78">
                    <CircleAlert className="mt-0.5 shrink-0 text-[#83D6A4]" size={18} />
                    <span>
                      Si OMIE no devuelve un fichero valido, no se muestran precios
                      horarios de ejemplo.
                    </span>
                  </div>
                )
              }
            </aside>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {
              daily ? (
                <>
                  <StatCard
                    icon={Gauge}
                    label="Media del dia"
                    value={`${formatMarketPrice(daily.average)} ${daily.unit}`}
                    detail="Calculado a partir de las 24 horas reales de OMIE."
                    tone="blue"
                  />

                  <StatCard
                    icon={ArrowDown}
                    label="Hora mas barata"
                    value={`${formatMarketPrice(daily.min)} ${daily.unit}`}
                    detail={daily.cheapestHourRange}
                    tone="green"
                  />

                  <StatCard
                    icon={ArrowUp}
                    label="Hora mas cara"
                    value={`${formatMarketPrice(daily.max)} ${daily.unit}`}
                    detail={daily.priciestHourRange}
                    tone="navy"
                  />
                </>
              ) : (
                <StatCard
                  icon={Gauge}
                  label="Mercado diario"
                  value="Dato no disponible"
                  detail={omieDailySource?.reason ?? 'No se muestran media, minimo ni maximo sin un fichero valido de OMIE.'}
                  tone="blue"
                />
              )
            }

            <StatCard
              icon={Euro}
              label="Referencia OMIP"
              value={omip?.price ?? 'Dato no disponible'}
              detail={omip ? `${omip.unit} · ${omip.referenceLabel}` : omipSource?.reason}
              tone="green"
            />
          </div>

          {/*
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <MarketSourceCard source={omieIntradaySource} />
            <MarketSourceCard source={omieContinuousSource} />
          </div>
          */}

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="card-top-accent rounded-[24px] border border-[#ECE7DD] bg-white p-6 shadow-[0_18px_50px_rgba(8,40,74,0.08)] lg:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EAF7EF] text-[#2D7E51]">
                <Zap size={23} />
              </div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.24em] text-[#2D7E51]">
                OMIP semanal
              </p>

              <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#08284A]">
                {omip?.product ?? 'SPEL Base Futures - Week'}
              </h2>

              <div className="mt-7 rounded-[22px] bg-[#F7FAF7] p-5">
                <p className="text-sm text-[#607089]">
                  {omip?.referenceLabel ?? 'Referencia no disponible'}
                </p>
                <p className="mt-2 text-5xl font-semibold leading-none text-[#08284A]">
                  {omip?.price ?? '-'}
                </p>
                <p className="mt-1 text-sm text-[#607089]">
                  {omip?.unit ?? 'Dato no disponible'}
                </p>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-[16px] border border-[#E2EAE3] p-4">
                  <span className="block text-[#607089]">
                    Maximo entre semanas publicadas
                  </span>
                  <strong className="mt-1 block text-xl text-[#08284A]">
                    {omip?.maxPublishedWeeks ?? '-'}
                  </strong>
                </div>
                <div className="rounded-[16px] border border-[#E2EAE3] p-4">
                  <span className="block text-[#607089]">
                    Minimo entre semanas publicadas
                  </span>
                  <strong className="mt-1 block text-xl text-[#08284A]">
                    {omip?.minPublishedWeeks ?? '-'}
                  </strong>
                </div>
              </div>

              <div className="mt-5 space-y-2 text-sm leading-relaxed text-[#607089]">
                <p>
                  Fuente: {omip?.source ?? 'OMIP'}
                </p>
                <p>
                  Producto: {omip?.product ?? 'SPEL Base Futures - Week'}
                </p>
                <p>
                  Zona: {omip?.zone ?? 'ES'} · Instrumento: {omip?.instrument ?? 'FTB'}
                </p>
                <p>
                  Fecha consultada: {formatDate(omip?.queryDate ?? omipSource?.queryDate)}
                </p>
                <p>
                  Semanas publicadas disponibles: {omip?.publishedWeeksCount ?? 'Dato no disponible'}
                </p>
                {
                  omip?.referenceWeek && (
                    <p>
                      Semana utilizada: {omip.referenceWeek} · {omip.referenceLabel}
                    </p>
                  )
                }
                {
                  !omip && (
                    <p>
                      {omipSource?.reason ?? 'Dato OMIP no disponible.'}
                    </p>
                  )
                }
              </div>
            </div>

            <MarketOmipChart history={omip?.history ?? []} />
          </div>

          <div className="mt-10 rounded-[24px] border border-[#CFE6D6] bg-[#F2FAF5] p-6 text-sm leading-relaxed text-[#375070]">
            <div className="flex items-start gap-3">
              <LineChartIcon className="mt-1 shrink-0 text-[#2D7E51]" size={20} />
              <p>
                Media, minimo, maximo, hora barata y hora cara se calculan desde
                la serie horaria real de OMIE. Si una fuente falla, no se reemplaza
                por valores inventados.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
