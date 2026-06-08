import { motion } from 'framer-motion'
import {
  ArrowRight,
  BarChart3,
  Building2,
  Calculator as CalculatorIcon,
  CheckCircle,
  ClipboardCheck,
  Euro,
  Flame,
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

export default function Calculator({
  tipo,
  setTipo,
  gasto,
  setGasto,
  potencia,
  setPotencia,
  resultado
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
                  420€
                </div>

                <div className="rounded-full bg-corporateGreen-soft px-3 py-1 text-[12px] font-semibold text-corporateGreen">
                  Ahorro potencial
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
                    Introduce los datos de tu suministro y te mostraremos una estimación aproximada de ahorro anual.
                  </p>

                </>

              ) : (

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.96,
                    y: 20
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0
                  }}
                  transition={{
                    duration: 0.35,
                    ease: 'easeOut'
                  }}
                >
                  <div className="text-sm uppercase tracking-[0.18em] text-green-300">
                    Potencial de optimización detectado
                  </div>

                  <div className="mt-4 font-swiss text-5xl font-semibold leading-none text-white lg:text-6xl">
                    {resultado.minPercent}% – {resultado.maxPercent}%
                  </div>

                  <div className="mt-6 text-lg text-white/85">
                    Equivalente aproximado:
                  </div>

                  <div className="mt-2 font-swiss text-3xl font-semibold leading-tight text-green-300 lg:text-4xl">
                    {resultado.min.toLocaleString()}€ – {resultado.max.toLocaleString()}€/año
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-5 text-sm leading-relaxed text-white/65">
                    Estimación orientativa basada en suministros similares y parámetros energéticos generales.
                  </div>
                </motion.div>

              )}

              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                <Benefit icon={Search} label="Análisis personalizado" />
                <Benefit icon={ClipboardCheck} label="Revisión de tarifas y condiciones" />
                <Benefit icon={BarChart3} label="Ahorro real estimado" />
              </div>

            </div>
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
                Solicita revisión
              </div>

              <h3 className="heading-h3 text-corporate">
                Adjunta facturas de electricidad y gas
              </h3>

              <p className="mt-2 text-text-secondary">
                y revisaremos tarifas, potencia contratada y posibles optimizaciones.
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

          {analysis?.[0] && (

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
                Diagnóstico preliminar generado
              </p>

              <div className="space-y-2">
                <p>
                  Comercializadora detectada:{' '}
                  <span className="font-medium">
                    {analysis[0].company || 'No detectada'}
                  </span>
                </p>

                <p>
                  Tarifa identificada:{' '}
                  <span className="font-medium">
                    {analysis[0].tariff || 'No detectada'}
                  </span>
                </p>

                {analysis[0].warnings?.map((warning, index) => (
                  <p key={index}>
                    {warning}
                  </p>
                ))}
              </div>

              <p className="mt-4 leading-relaxed text-[#5b6b88]">
                Nuestro equipo revisará ahora la estructura tarifaria, la potencia contratada y posibles penalizaciones asociadas al suministro.
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
