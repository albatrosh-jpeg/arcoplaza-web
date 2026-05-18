import {
  ChartNoAxesColumn,
  Handshake,
  MonitorCog,
  Leaf,
} from "lucide-react"

const items = [
  {
    icon: ChartNoAxesColumn,
    title: "Análisis personalizado",
    text: "Detectamos oportunidades reales de ahorro.",
  },
  {
    icon: Handshake,
    title: "Negociación experta",
    text: "Optimizamos contratos y comercializadoras.",
  },
  {
    icon: MonitorCog,
    title: "Gestión continua",
    text: "Supervisión energética constante.",
  },
  {
    icon: Leaf,
    title: "Soluciones sostenibles",
    text: "Autoconsumo y eficiencia energética.",
  },
]

export default function HeroStatsCard() {
  return (
    <div
      className="
        hidden
        xl:grid
        grid-cols-4
        gap-5

        rounded-[30px]
        border
        border-[#ece7dd]

        bg-[#fcfbf8]/92
        backdrop-blur-md

        px-6
        py-5

        shadow-[0_18px_50px_rgba(16,37,66,0.06)]
      "
    >
      {items.map((item, index) => {
        const Icon = item.icon

        return (
          <div
            key={index}
            className="
              flex
              items-start
              gap-4
              min-w-0
            "
          >
            <div
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#f3f6ee]
                text-corporateGreen
              "
            >
              <Icon size={22} strokeWidth={1.8} />
            </div>

            <div className="min-w-0">
              <div
                className="
                  text-[17px]
                  leading-tight
                  font-semibold
                  tracking-tight
                  text-corporate
                  mb-1
                "
              >
                {item.title}
              </div>

              <div
                className="
                  text-[14px]
                  leading-relaxed
                  text-slate-500
                "
              >
                {item.text}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}