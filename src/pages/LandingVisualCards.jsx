import {
  ClipboardCheck,
  FileSearch,
  Gauge
} from 'lucide-react'

const cards = [
  {
    number: '01',
    icon: FileSearch,
    title: 'Analizamos el contrato',
    text: 'Revisamos tarifa, potencia contratada, condiciones comerciales y estructura de costes para entender el punto de partida.'
  },
  {
    number: '02',
    icon: Gauge,
    title: 'Detectamos sobrecostes',
    text: 'Localizamos importes innecesarios, desviaciones frente al mercado y condiciones que pueden estar penalizando el suministro.'
  },
  {
    number: '03',
    icon: ClipboardCheck,
    title: 'Proponemos mejoras',
    text: 'Traducimos el análisis en acciones concretas, con una lectura clara del ahorro potencial y los siguientes pasos.'
  }
]

export default function LandingVisualCards() {
  return (
    <section className="overflow-hidden bg-corporate-gradient py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1180px] px-5 lg:px-8">
        <div className="mb-10 max-w-3xl lg:mb-14">
          <div className="mb-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-corporateGreen">
            Metodología
          </div>

          <h2
            className="
              heading-h2
              !text-white
            "
          >
            Del dato técnico a una decisión clara
          </h2>

          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-white/70 lg:text-[18px]">
            Convertimos una factura compleja en una lectura sencilla: qué estás pagando, dónde puede haber margen y qué conviene hacer.
          </p>
        </div>

        <div className="grid min-w-0 gap-5 md:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon

            return (
              <article
                key={card.number}
                className="
                  card-top-accent
                  group
                  relative
                  min-h-[280px]
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/10
                  bg-[#F8F6F1]
                  p-6
                  shadow-[0_22px_55px_rgba(0,0,0,0.18)]
                  transition-transform
                  duration-300
                  hover:-translate-y-1
                  lg:p-7
                "
              >
                <div className="mb-8 flex items-start justify-between gap-5">
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-[18px]
                      bg-corporate
                      text-white
                      shadow-[0_12px_24px_rgba(16,37,66,0.18)]
                    "
                  >
                    <Icon size={22} strokeWidth={1.9} />
                  </div>

                  <div className="font-swiss text-[13px] font-semibold tracking-[0.16em] text-corporateGreen">
                    {card.number}
                  </div>
                </div>

                <h3
                  className="
                    mb-4
                    heading-h3
                    text-corporate
                  "
                >
                  {card.title}
                </h3>

                <p className="text-[15px] leading-[1.7] text-corporate lg:text-[16px]">
                  {card.text}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
