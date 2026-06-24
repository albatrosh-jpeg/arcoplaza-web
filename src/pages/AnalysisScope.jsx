import {
  Activity,
  BadgeEuro,
  BarChart3,
  Building2,
  Factory,
  Gauge,
  Landmark,
  LineChart,
  ReceiptText,
  TrendingUp,
  Zap
} from 'lucide-react'

const leftItems = [
  ['Comercializadora', Building2],
  ['Tarifa', Zap],
  ['Potencia', Gauge],
  ['Consumo', BarChart3],
  ['Reactiva', Activity]
]

const rightItems = [
  ['Excesos', TrendingUp],
  ['Precio energía', BadgeEuro],
  ['Peajes', Landmark],
  ['OMIE', LineChart],
  ['OMIP', Factory]
]

function AnalysisChip({ label, icon: Icon, side }) {
  return (
    <div
      className={`
        group
        relative
        flex
        items-center
        gap-3
        rounded-[18px]
        border
        border-border-soft
        bg-white/90
        px-4
        py-3
        text-left
        text-corporate
        shadow-[0_14px_34px_rgba(16,37,66,0.06)]
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-corporateGreen/35
        hover:shadow-[0_18px_42px_rgba(16,37,66,0.10)]
        ${side === 'right' ? 'lg:flex-row-reverse lg:text-right' : ''}
      `}
    >
      <span
        className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-2xl
          bg-corporateGreen-soft
          text-corporateGreen
        "
      >
        <Icon size={20} strokeWidth={1.8} />
      </span>

      <span className="text-sm font-semibold text-corporate">
        {label}
      </span>

      <span
        className={`
          pointer-events-none
          absolute
          top-1/2
          hidden
          h-px
          w-14
          -translate-y-1/2
          bg-corporateGreen/35
          lg:block
          ${side === 'right' ? 'right-full' : 'left-full'}
        `}
      />

      <span
        className={`
          pointer-events-none
          absolute
          top-1/2
          hidden
          h-2
          w-2
          -translate-y-1/2
          rounded-full
          bg-corporateGreen
          lg:block
          ${side === 'right' ? 'right-[calc(100%+3.35rem)]' : 'left-[calc(100%+3.35rem)]'}
        `}
      />
    </div>
  )
}

export default function AnalysisScope() {
  return (
    <section className="border-b border-border-soft bg-white py-20 lg:py-24">
      <div className="container-content">
        <div className="mb-12 max-w-3xl text-left">
          <h2 className="heading-h2 text-corporate">
            ¿Qué analiza exactamente Arcoplaza?
          </h2>
        </div>

        <div
          className="
            relative
            mx-auto
            grid
            max-w-6xl
            gap-6
            lg:grid-cols-[1fr_1.45fr_1fr]
            lg:items-center
          "
        >
          <div className="grid gap-3">
            {leftItems.map(([label, Icon]) => (
              <AnalysisChip
                key={label}
                label={label}
                icon={Icon}
                side="left"
              />
            ))}
          </div>

          <div
            className="
              relative
              order-first
              min-h-[360px]
              overflow-hidden
              rounded-[32px]
              border
              border-border-soft
              bg-[radial-gradient(circle_at_50%_20%,rgba(67,184,134,0.12),transparent_32%),linear-gradient(180deg,#FFFFFF_0%,#F8F6F1_100%)]
              text-corporate
              shadow-[0_28px_80px_rgba(16,37,66,0.08)]
              lg:order-none
            "
          >
            <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(45,126,81,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(45,126,81,0.06)_1px,transparent_1px)] [background-size:36px_36px]" />

            <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-corporateGreen/15 bg-white/45" />
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-corporateGreen/20" />

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[190px]
                w-[150px]
                -translate-x-1/2
                -translate-y-1/2
                -rotate-6
                rounded-[22px]
                border
                border-[#DDE8F2]
                bg-white
                shadow-[0_26px_58px_rgba(16,37,66,0.16)]
              "
            >
              <div className="absolute left-5 top-5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-corporateGreen">
                <ReceiptText size={16} />
                Factura
              </div>

              <div className="absolute left-5 right-5 top-14 space-y-2">
                <span className="block h-2 rounded-full bg-[#C9D6E3]" />
                <span className="block h-2 w-4/5 rounded-full bg-[#DDE7EF]" />
                <span className="block h-2 w-3/5 rounded-full bg-[#E7EDF3]" />
              </div>

              <div className="absolute bottom-8 left-5 right-5 flex items-end gap-2">
                <span className="h-8 flex-1 rounded-t-lg bg-corporateGreen/35" />
                <span className="h-14 flex-1 rounded-t-lg bg-corporateGreen/60" />
                <span className="h-10 flex-1 rounded-t-lg bg-[#2A7ED1]/40" />
                <span className="h-[72px] flex-1 rounded-t-lg bg-corporate/70" />
              </div>
            </div>

            <div
              className="
                absolute
                bottom-14
                left-1/2
                h-20
                w-64
                -translate-x-1/2
                rounded-[50%]
                bg-[linear-gradient(135deg,rgba(67,184,134,0.25),rgba(6,87,183,0.18))]
                blur-xl
              "
            />

            <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-corporateGreen/20 bg-white/85 px-4 py-2 text-xs font-semibold text-corporate shadow-[0_14px_32px_rgba(16,37,66,0.08)]">
              <span className="h-2 w-2 rounded-full bg-corporateGreen" />
              Lectura técnica del suministro
            </div>
          </div>

          <div className="grid gap-3">
            {rightItems.map(([label, Icon]) => (
              <AnalysisChip
                key={label}
                label={label}
                icon={Icon}
                side="right"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
