import {
  ArrowRight,
  BarChart3,
  Building2,
  Calculator as CalculatorIcon,
  CheckCircle,
  ClipboardCheck,
  Euro,
  Flame,
  FileText,
  FolderOpen,
  Mail,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
  User,
  Zap
} from 'lucide-react'

import useContactForm from '../../hooks/useContactForm'

import Input from '../ui/Input'
import Textarea from '../ui/Textarea'
import Select from '../ui/Select'
import FileUpload from '../ui/FileUpload'
import {
  buildInvoiceSupplyDiagnosis,
  buildManualSupplyDiagnosis,
  invoiceDiagnosisFields
} from '../../utils/supplyDiagnosis'

export default function Calculator({
  tipo,
  setTipo,
  gasto,
  setGasto,
  potencia,
  setPotencia,
  resultado,
  marketData,
  marketLoading
}) {

  const {
    handleSubmit,
    loading,
    success,
    error,
    fileName,
    analysis,
    setFileName
  } = useContactForm()

  const market =
    resultado?.status === 'available'
      ? resultado.market
      : marketData?.sources?.omieDaily?.status === 'available'
        ? marketData.daily
        : null
  const marketDate = market?.dataDate
    ? new Intl.DateTimeFormat(
        'es-ES',
        {
          day: '2-digit',
          month: 'short',
          year: 'numeric'
        }
      ).format(new Date(`${market.dataDate}T12:00:00`))
    : null
  const marketAverage = market
    ? `${market.average.toFixed(3).replace('.', ',')} ${market.unit ?? '€/kWh'}`
    : null
  const manualDiagnosis = buildManualSupplyDiagnosis({
    tipo,
    gasto,
    potencia,
    resultado,
    marketData
  })
  const invoiceDiagnosis = analysis?.[0]
    ? buildInvoiceSupplyDiagnosis(analysis[0], marketData)
    : null

  return (

    <section
      className="
        border-y
        border-border-soft
        bg-[linear-gradient(180deg,#F8F6F1_0%,#FCFBF8_100%)]
      "
    >

      <div className="mx-auto max-w-[1280px] px-5 py-16 lg:px-8 lg:py-24">

        <div
          className="
            mb-10
            grid
            gap-10
            lg:mb-12
            lg:grid-cols-[1.05fr_0.95fr]
            lg:items-center
          "
        >

          <div className="max-w-[720px]">

            <div className="mb-5 text-[13px] font-semibold uppercase tracking-[0.2em] text-corporateGreen">
              Optimización energética
            </div>

            <h2
              className="
                max-w-[720px]
                font-editorial
                text-[42px]
                font-semibold
                leading-[1.05]
                text-corporate
                sm:text-[50px]
                lg:text-[56px]
              "
            >
              No vendemos energía.
              <br />
              Revisamos si la estás{' '}
              <span className="text-corporateGreen">
                pagando correctamente.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-text-secondary lg:text-[18px]">
              Calcula una estimación aproximada de ahorro en electricidad y gas a partir de tu consumo, potencia contratada y tipo de suministro.
            </p>

          </div>

          <div
            className="
              relative
              hidden
              min-h-[300px]
              overflow-hidden
              rounded-[32px]
              bg-[radial-gradient(circle_at_72%_18%,rgba(33,75,109,0.13),transparent_30%),linear-gradient(135deg,rgba(54,126,69,0.06),rgba(33,75,109,0.10))]
              lg:block
            "
          >
            <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full bg-[#CFE6F4]/50" />
            <div className="absolute right-24 top-2 h-48 w-64 rounded-full bg-[#DCECF4]/70" />
            <div className="absolute bottom-2 right-8 h-28 w-72 rounded-tl-[56px] bg-white/45" />

            <div className="absolute left-10 top-24 flex h-[74px] w-[74px] items-center justify-center rounded-full bg-[linear-gradient(135deg,#7BCB5F,#1FAE78)] text-white shadow-[0_20px_42px_rgba(54,126,69,0.28)]">
              <Zap size={34} fill="currentColor" />
            </div>

            <div className="absolute right-44 top-8 z-20 w-[255px] rounded-[22px] border border-white/80 bg-white/92 p-5 shadow-[0_24px_60px_rgba(16,37,66,0.16)] backdrop-blur-sm">
              <div className="text-[13px] font-semibold text-text-secondary">
                Ahorro estimado anual
              </div>

              <div className="mt-3 flex items-center justify-between">
                <div className="font-swiss text-[34px] font-semibold leading-none text-corporateGreen">
                  {marketAverage ?? 'OMIE'}
                </div>

                <div className="rounded-full bg-corporateGreen-soft px-3 py-1 text-[12px] font-semibold text-corporateGreen">
                  Mercado actual
                </div>
              </div>

              <div className="relative mt-5 h-[94px] border-t border-border-soft pt-4">
                <div className="absolute bottom-0 left-0 right-0 top-4 bg-[linear-gradient(#E7E1D7_1px,transparent_1px)] bg-[size:100%_24px]" />
                <div className="absolute bottom-0 left-0 right-0 h-14 bg-[linear-gradient(180deg,rgba(54,126,69,0.08),rgba(54,126,69,0.18))]" />
                <div className="absolute bottom-3 left-2 right-2 flex items-end justify-between">
                {[12, 22, 36, 26, 48, 70].map((height) => (
                  <div
                    key={height}
                    className="w-2 rounded-full bg-corporateGreen"
                    style={{ height }}
                  />
                ))}
                </div>
              </div>
            </div>

            <div className="absolute bottom-10 right-14 z-10 flex items-end gap-2">
              <div className="relative h-[118px] w-[74px] rounded-t-[18px] bg-[#7EB8D4] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.55)]">
                <Building2 className="absolute left-5 top-4 h-8 w-8 text-corporate/60" strokeWidth={1.6} />
                <div className="absolute bottom-4 left-3 right-3 grid grid-cols-2 gap-2">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <span key={index} className="h-3 rounded-sm bg-white/55" />
                  ))}
                </div>
              </div>
              <div className="h-[155px] w-[86px] rounded-t-[20px] bg-[#5A9EC1] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.5)]">
                <div className="mt-5 grid grid-cols-2 gap-2 px-3">
                  {Array.from({ length: 10 }).map((_, index) => (
                    <span key={index} className="h-3 rounded-sm bg-white/55" />
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute right-14 top-16 z-20 h-12 w-24 -rotate-12 rounded-[10px] border border-white/60 bg-[linear-gradient(135deg,#2E7D50,#9BCB78)] shadow-[0_14px_28px_rgba(16,37,66,0.13)]" />

            <div className="absolute bottom-12 right-0 z-30 flex h-[68px] w-[68px] items-center justify-center rounded-full bg-white text-[#0B69D1] shadow-[0_18px_44px_rgba(16,37,66,0.18)]">
              <Flame size={34} fill="currentColor" />
            </div>
          </div>

        </div>

        <div
          className="
            grid
            gap-6
            xl:grid-cols-2
          "
        >

          <div
            className="
              card-top-accent
              rounded-[28px]
              border
              border-border-soft
              bg-white
              p-6
              shadow-[0_20px_55px_rgba(16,37,66,0.08)]
              sm:p-8
            "
          >

            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-corporateGreen-soft text-corporateGreen">
                <CalculatorIcon size={24} />
              </div>

              <h3 className="heading-h3 text-corporate">
                Calcula tu ahorro potencial
              </h3>
            </div>

            <div className="space-y-5">

              <div>
                <label className="mb-2 block text-sm font-medium text-corporate">
                  Tipo de suministro
                </label>

                <Select
                  aria-label="Tipo de suministro"
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}
                  className="bg-white py-4"
                >
                  <option value="vivienda">Vivienda</option>
                  <option value="empresa">Empresa</option>
                  <option value="comunidad">Comunidad</option>
                </Select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-corporate">
                  Gasto mensual aproximado (€)
                </label>

                <IconField icon={Euro}>
                  <Input
                    type="number"
                    value={gasto}
                    onChange={(e) => setGasto(e.target.value)}
                    placeholder="Ejemplo: 180"
                    className="bg-white pr-12"
                  />
                </IconField>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-corporate">
                  Potencia contratada (kW)
                </label>

                <IconField icon={Zap}>
                  <Input
                    type="number"
                    min="0"
                    max="200"
                    step="0.01"
                    value={potencia}
                    onChange={(e) => setPotencia(e.target.value)}
                    placeholder="Ejemplo: 5.75"
                    className="bg-white pr-12"
                  />
                </IconField>
              </div>

              <div className="flex items-start gap-3 pt-2 text-sm text-text-secondary">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-corporateGreen" />
                <span>
                  Tus datos están seguros y solo se utilizarán para este análisis.
                </span>
              </div>

            </div>

          </div>

          <div
            className="
              relative
              overflow-hidden
              rounded-[28px]
              bg-corporate-gradient
              p-7
              text-white
              shadow-[0_20px_55px_rgba(16,37,66,0.14)]
              sm:p-8
            "
          >
            <div className="absolute right-6 top-6 grid grid-cols-4 gap-2 opacity-20">
              {Array.from({ length: 24 }).map((_, index) => (
                <span key={index} className="h-1.5 w-1.5 rounded-full bg-white" />
              ))}
            </div>

            <div className="relative z-10">

              {!resultado ? (

                <>

                  <div className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-green-300">
                    Simulación orientativa
                  </div>

                  <h3 className="heading-h3 max-w-xl text-white">
                    Analizamos personalmente los contratos de luz y gas para detectar
                    {' '}
                    <span className="text-green-300">
                      oportunidades reales de ahorro.
                    </span>
                  </h3>

                  <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-white/82">
                    Introduce los datos de tu suministro y te mostraremos una estimación aproximada basada en condiciones actuales de mercado.
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-white/58">
                    Referencia: {manualDiagnosis.market.label}.
                  </p>

                </>

              ) : resultado.status !== 'available' ? (

                <div>
                  <div className="text-sm uppercase tracking-[0.18em] text-green-300">
                    {resultado.status === 'needs_power' || resultado.status === 'invalid_power'
                      ? 'Datos pendientes'
                      : 'Mercado en consulta'}
                  </div>

                  <h3 className="mt-4 heading-h3 max-w-xl text-white">
                    {resultado.status === 'needs_power'
                      ? 'Añade la potencia contratada para calcular el rango económico.'
                      : resultado.status === 'invalid_power'
                        ? 'La potencia indicada queda fuera del rango de esta calculadora.'
                        : marketLoading || resultado.status === 'loading'
                          ? 'Consultando datos actuales de mercado.'
                          : 'Dato de mercado no disponible en este momento.'}
                  </h3>

                  <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-white/72">
                    {resultado.reason} {resultado.status === 'needs_power' || resultado.status === 'invalid_power'
                      ? 'No mostramos euros hasta contar con datos suficientes.'
                      : 'La calculadora no sustituye esa referencia por valores de ejemplo.'}
                  </p>
                </div>

              ) : (

                <div>
                  <div className="text-sm uppercase tracking-[0.18em] text-green-300">
                    Estimación preliminar con datos suficientes
                  </div>

                  <div className="mt-4 font-swiss text-5xl font-semibold leading-none text-white lg:text-6xl">
                    {resultado.minPercent}% – {resultado.maxPercent}%
                  </div>

                  <div className="mt-6 text-lg text-white/85">
                    Rango económico orientativo:
                  </div>

                  <div className="mt-2 font-swiss text-3xl font-semibold leading-tight text-green-300 lg:text-4xl">
                    {resultado.min.toLocaleString()}€ – {resultado.max.toLocaleString()}€/año
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-5 text-sm leading-relaxed text-white/65">
                    Estimación preliminar calculada a partir del gasto anual, la potencia indicada y {market.marketType}
                    {marketDate ? ` del ${marketDate}` : ''}, fuente {market.source}.
                    No sustituye la revisión técnica de contrato, potencia y condiciones.
                  </div>
                </div>

              )}

              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                <Benefit icon={Search} label="Análisis personalizado" />
                <Benefit icon={ClipboardCheck} label="Revisión de tarifas y condiciones" />
                <Benefit icon={BarChart3} label="Ahorro real estimado" />
              </div>

            </div>
          </div>

        </div>

        <div className="mb-7 grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[24px] border border-[#DDE7DD] bg-[#F7FAF7] p-6 shadow-[0_18px_45px_rgba(16,37,66,0.06)]">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-corporateGreen shadow-[0_12px_26px_rgba(45,126,81,0.12)]">
                <FileText size={23} />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-corporateGreen">
                  Diagnostico con factura
                </p>

                <h3 className="mt-3 text-2xl font-semibold leading-tight text-corporate">
                  Tengo una factura y quiero un analisis mas preciso.
                </h3>

                <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
                  Cuando adjuntas una factura podemos leer datos tecnicos del
                  suministro y generar observaciones preliminares sin prometer
                  ahorros concretos.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[24px] border border-border-soft bg-white p-6 shadow-[0_18px_45px_rgba(16,37,66,0.06)]">
            <p className="text-sm font-semibold text-corporate">
              Datos que preparan el diagnostico
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {invoiceDiagnosisFields.slice(0, 8).map((field) => (
                <span
                  key={field}
                  className="rounded-full border border-[#DDE7DD] bg-[#F7FAF7] px-3 py-1.5 text-xs font-medium text-[#2D7E51]"
                >
                  {field}
                </span>
              ))}
            </div>

            <a
              href="#formulario"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-corporate-gradient px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(8,40,74,0.16)] transition-transform hover:-translate-y-0.5"
            >
              Adjuntar factura
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <form
          id="formulario"
          onSubmit={handleSubmit}
          className="
            card-top-accent
            scroll-mt-6
            mt-7
            rounded-[28px]
            border
            border-border-soft
            bg-white
            p-6
            shadow-[0_20px_55px_rgba(16,37,66,0.08)]
            sm:p-8
          "
        >

          <div className="mb-8 flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-corporateGreen-soft text-corporateGreen">
              <FolderOpen size={26} />
            </div>

            <div>
              <div className="mb-2 text-[13px] font-semibold uppercase tracking-[0.2em] text-corporateGreen">
                Diagnostico preliminar
              </div>

              <h3 className="heading-h3 text-corporate">
                Adjunta facturas de electricidad y gas
              </h3>

              <p className="mt-2 text-text-secondary">
                y revisaremos datos de suministro, potencia, consumo, costes y condiciones.
              </p>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <div className="grid gap-4">
              <IconField icon={User} side="left">
                <Input
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  required
                  className="bg-white pl-12"
                />
              </IconField>

              <IconField icon={Mail} side="left">
                <Input
                  type="email"
                  name="email"
                  placeholder="Correo electrónico"
                  required
                  className="bg-white pl-12"
                />
              </IconField>

              <IconField icon={Phone} side="left">
                <Input
                  type="tel"
                  name="telefono"
                  placeholder="Teléfono"
                  className="bg-white pl-12"
                />
              </IconField>
            </div>

            <IconField icon={MessageCircle} side="left" align="top">
              <Textarea
                name="mensaje"
                placeholder="Cuéntanos brevemente tu caso"
                rows={7}
                className="h-full min-h-[172px] bg-white pl-12"
              />
            </IconField>
          </div>

          <FileUpload
            fileName={fileName}
            setFileName={setFileName}
            className="mt-6"
          />

          <button
            type="submit"
            disabled={loading}
            className="
              mt-6
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-[18px]
              bg-[linear-gradient(135deg,#43B886_0%,#0657B7_100%)]
              px-6
              py-5
              font-semibold
              text-white
              shadow-[0_16px_34px_rgba(6,87,183,0.22)]
              transition-transform
              hover:-translate-y-[1px]
              disabled:cursor-not-allowed
              disabled:opacity-70
            "
          >
            {loading
              ? 'Enviando...'
              : 'Solicitar análisis gratuito'}
            <ArrowRight size={20} />
          </button>

          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-text-muted">
            <ShieldCheck size={16} className="text-corporateGreen" />
            <span>Sin compromiso. Respuesta en 48-72h.</span>
          </div>

          {success && (
            <p className="mt-4 text-sm text-green-700">
              Solicitud enviada correctamente.
            </p>
          )}

          {invoiceDiagnosis && (

            <div
              className="
                mt-6
                rounded-2xl
                border
                border-[#d7d0c4]
                bg-[#f8f6f1]
                p-5
                text-sm
                text-[#163a70]
              "
            >

              <p className="mb-3 flex items-center gap-2 font-semibold">
                <CheckCircle size={16} className="text-corporateGreen" />
                {invoiceDiagnosis.title}
              </p>

              <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="space-y-2">
                <p>
                  Comercializadora detectada:{' '}
                  <span className="font-medium">
                    {invoiceDiagnosis.detectedFields.company || 'No detectada'}
                  </span>
                </p>

                <p>
                  Tarifa identificada:{' '}
                  <span className="font-medium">
                    {invoiceDiagnosis.detectedFields.tariff || 'No detectada'}
                  </span>
                </p>

                <p>
                  Total factura:{' '}
                  <span className="font-medium">
                    {invoiceDiagnosis.detectedFields.total || 'No detectado'}
                  </span>
                </p>

                <p>
                  Mercado usado:{' '}
                  <span className="font-medium">
                    {invoiceDiagnosis.market.label}
                  </span>
                </p>
                </div>

                <div className="space-y-2">
                  {invoiceDiagnosis.observations.map((observation, index) => (
                    <p key={index} className="flex gap-2">
                      <CheckCircle size={15} className="mt-0.5 shrink-0 text-corporateGreen" />
                      <span>{observation}</span>
                    </p>
                  ))}
                </div>
              </div>

              <p className="mt-4 leading-relaxed text-[#5b6b88]">
                Este diagnostico no promete ahorros concretos. Sirve para identificar puntos revisables antes de la revision tecnica manual.
              </p>

            </div>

          )}

          {error && (
            <p className="mt-4 text-sm text-red-600">
              Ha ocurrido un error. Inténtalo de nuevo.
            </p>
          )}

        </form>

      </div>

    </section>

  )

}

function IconField({
  children,
  icon: Icon,
  side = 'right',
  align = 'center'
}) {

  const sideClass =
    side === 'left'
      ? 'left-4'
      : 'right-4'

  const alignClass =
    align === 'top'
      ? 'top-4'
      : 'top-1/2 -translate-y-1/2'

  return (

    <div className="relative">
      {children}

      <Icon
        size={20}
        className={`
          pointer-events-none
          absolute
          ${sideClass}
          ${alignClass}
          text-corporateGreen
        `}
      />
    </div>

  )

}

function Benefit({
  icon: Icon,
  label
}) {

  return (

    <div className="text-center">
      <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-sky-300/35 bg-white/5 text-white">
        <Icon size={23} strokeWidth={1.8} />
      </div>

      <div className="text-sm font-semibold leading-snug text-white/88">
        {label}
      </div>
    </div>

  )

}
