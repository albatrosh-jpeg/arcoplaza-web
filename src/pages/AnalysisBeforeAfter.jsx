import {
  AlertTriangle,
  ArrowRight,
  BadgeEuro,
  CheckCircle2,
  FileSearch,
  Gauge,
  ShieldCheck,
  TrendingDown,
  Zap
} from 'lucide-react'

const beforeItems = [
  ['Potencia revisable', 'Término fijo por comprobar', Gauge],
  ['Reactiva sin lectura', 'Concepto técnico no validado', Zap],
  ['Peajes y cargos', 'Importes regulados aplicados', BadgeEuro],
  ['Condiciones antiguas', 'Contrato pendiente de contraste', AlertTriangle]
]

const afterItems = [
  ['Potencia contrastada', 'Ajuste según uso real', Gauge],
  ['Reactiva controlada', 'Lectura técnica documentada', ShieldCheck],
  ['Peajes revisados', 'Conceptos identificados', BadgeEuro],
  ['Contrato contextualizado', 'Comparado con mercado actual', CheckCircle2]
]

function InvoiceMockup({ variant }) {
  const isAfter = variant === 'after'
  const items = isAfter ? afterItems : beforeItems

  return (
    <div
      className={`
        card-top-accent
        relative
        overflow-hidden
        rounded-[28px]
        border
        bg-white
        p-6
        shadow-[0_22px_60px_rgba(16,37,66,0.08)]
        text-corporate
        ${isAfter ? 'border-corporateGreen/24' : 'border-[#E7D7D2]'}
      `}
    >
      <div className="mb-6 flex items-center justify-between">
        <span
          className={`
            rounded-full
            px-3
            py-1
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.18em]
            ${isAfter ? 'bg-corporateGreen-soft text-corporateGreen' : 'bg-white text-corporate'}
          `}
        >
          {isAfter ? 'Después' : 'Antes'}
        </span>

        <FileSearch
          size={22}
          className={isAfter ? 'text-corporateGreen' : 'text-corporate'}
          strokeWidth={1.8}
        />
      </div>

      <div className="mb-6 rounded-[22px] border border-border-soft bg-[#F8F6F1] p-5">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-text-secondary">
              Factura eléctrica
            </div>
            <div className="mt-2 h-3 w-32 rounded-full bg-[#C9D6E3]" />
          </div>
          <div className="h-12 w-12 rounded-2xl bg-white shadow-[0_10px_24px_rgba(16,37,66,0.06)]" />
        </div>

        <div className="space-y-3">
          {[72, 92, 58, 84].map((width, index) => (
            <div key={width} className="flex items-center gap-3">
              <span
                className={`
                  h-2.5
                  w-2.5
                  rounded-full
                  ${isAfter ? 'bg-corporateGreen' : 'bg-corporate'}
                `}
              />
              <span
                className="h-2 rounded-full bg-[#DDE7EF]"
                style={{ width: `${width}%` }}
              />
              {index === 1 && (
                <span
                  className={`
                    h-7
                    w-7
                    rounded-full
                    border
                    ${isAfter ? 'border-corporateGreen/30 bg-corporateGreen-soft' : 'border-corporate/20 bg-white'}
                  `}
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-4 items-end gap-2">
          {[42, 66, 48, 82].map((height, index) => (
            <span
              key={height}
              className={`
                rounded-t-lg
                ${isAfter ? 'bg-corporateGreen/55' : 'bg-corporate/30'}
              `}
              style={{ height: `${height}px`, opacity: isAfter && index === 3 ? 0.5 : 1 }}
            />
          ))}
        </div>
      </div>

      <div className="grid gap-3">
        {items.map(([title, text, Icon]) => (
          <div
            key={title}
            className="flex items-start gap-3 rounded-[18px] border border-border-soft bg-white px-4 py-3"
          >
            <span
              className={`
                mt-0.5
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-2xl
                ${isAfter ? 'bg-corporateGreen-soft text-corporateGreen' : 'bg-white text-corporate'}
              `}
            >
              <Icon size={17} strokeWidth={1.85} />
            </span>
            <span>
              <span className="block text-sm font-semibold text-corporate">
                {title}
              </span>
              <span className="mt-1 block text-xs leading-relaxed text-text-secondary">
                {text}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function AnalysisBeforeAfter() {
  return (
    <section className="border-y border-border-soft bg-[#F8F6F1] py-20 lg:py-28">
      <div className="container-content">
        <div className="mb-12 max-w-3xl text-left">
          <h2 className="heading-h2 text-corporate">
            Así se ve una factura antes y después de revisarla.
          </h2>
        </div>

        <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr_0.8fr]">
          <InvoiceMockup variant="before" />

          <div className="flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-corporate-gradient text-white shadow-[0_18px_42px_rgba(6,87,183,0.18)]">
              <ArrowRight size={26} strokeWidth={1.8} />
            </div>
          </div>

          <InvoiceMockup variant="after" />

          <div className="rounded-[28px] border border-border-soft bg-white p-7 text-corporate shadow-[0_22px_60px_rgba(16,37,66,0.08)]">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-corporateGreen-soft text-corporateGreen">
              <TrendingDown size={26} strokeWidth={1.8} />
            </div>

            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-corporateGreen">
              Resultado técnico
            </div>

            <h3 className="mt-3 font-editorial text-3xl font-semibold leading-tight text-corporate">
              Lectura clara del suministro
            </h3>

            <p className="mt-4 text-sm leading-7 text-text-secondary">
              La factura deja de ser un importe aislado y pasa a mostrar que
              conceptos conviene revisar con criterio técnico.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              {[
                'Conceptos identificados',
                'Condiciones contrastadas',
                'Observaciones documentadas'
              ].map(item => (
                <div key={item} className="flex items-center gap-2 text-corporate">
                  <CheckCircle2 size={17} className="text-corporateGreen" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
