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
    bg-white/92
    backdrop-blur-sm

    w-left
    max-w-[760px]

    border
    border-[#e7e1d7]

    rounded-[18px]

    shadow-[0_10px_30px_rgba(15,23,42,0.08)]

    px-6
    py-4
  "
>
    <div
  className="
  flex
  flex-wrap

  items-start

  gap-x-6
  gap-y-4
">
          {items.map((item, index) => {
        const Icon = item.icon

        return (
          <div
            key={index}
            className="
              flex
              items-start
              gap-3

              w-[155px]

              min-w-0
            "
          >            <div
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-corporateGreen-soft
                text-corporate
              "
            >
              <Icon size={22} strokeWidth={1.8} />
            </div>

            <div className="min-w-0">
              <div
                className="
                  text-[17px]
                  leading-relaxed
                  font-swiss
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
    </div>
  )
}