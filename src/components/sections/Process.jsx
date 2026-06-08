import {
  Check,
  Euro,
  FileChartColumn,
  FileUp,
  SearchCheck,
  ShieldCheck,
  TrendingUp
} from 'lucide-react'

import Section from '../ui/Section'

export default function Process() {

  const steps = [
    {
      number: '01',
      icon: FileUp,
      title: 'Envío de factura',
      text: 'Revisamos tu factura, consumos, tarifas y oportunidades.'
    },
    {
      number: '02',
      icon: SearchCheck,
      title: 'Revisión técnica',
      text: 'Identificamos aquellos costes que normalmente pasan desapercibidos.',
      highlighted: true
    },
    {
      number: '03',
      icon: FileChartColumn,
      title: 'Propuesta clara',
      text: 'Te explicamos qué está ocurriendo, qué cambios recomendamos y qué impacto pueden tener en el coste final.'
    },
    {
      number: '04',
      icon: Check,
      title: 'Seguimiento',
      text: 'Gestionamos los cambios y supervisamos la evolución del ahorro.'
    }
  ]

  return (

    <Section
      id="proceso"
      className="
        relative
        overflow-hidden
        border-b
        border-border-soft
        bg-[linear-gradient(180deg,#FCFBF8_0%,#F8F6F1_100%)]
      "
      spacing="hero"
      containerClassName="
        relative
        py-20
        lg:py-28
      "
    >

      <div className="pointer-events-none absolute right-6 top-8 hidden h-[260px] w-[420px] opacity-35 lg:block">
        <div className="absolute inset-0 bg-[linear-gradient(#d9e4ee_1px,transparent_1px),linear-gradient(90deg,#d9e4ee_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute right-16 top-10 h-44 w-44 rounded-full border border-corporate/20" />
        <div className="absolute right-24 top-16 h-32 w-32 rounded-full border border-dashed border-corporate/15" />
        <div className="absolute right-4 top-4 text-sm font-medium text-corporate/35">+</div>
        <div className="absolute bottom-8 right-10 text-xs font-medium text-corporate/35">02+</div>
      </div>

      <div className="relative z-10">

        <div className="mb-14 max-w-3xl lg:mb-16">

          <div className="eyebrow mb-4 text-corporateGreen">
            CÓMO TRABAJAMOS
          </div>

          <h2 className="section-title mb-5 max-w-[760px] lg:mb-6">
            Hay sobrecostes que pasan desapercibidos durante años.
          </h2>

          <div className="mb-6 h-0.5 w-14 bg-corporateGreen" />

          <p className="body-md max-w-2xl lg:body-lg">
            Analizamos tu suministro, detectamos oportunidades de optimización
            y gestionamos todo el proceso de forma <strong className="font-semibold text-corporate">transparente y personalizada.</strong>
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 xl:gap-8">

          {steps.map((item, index) => {

            const Icon = item.icon

            return (

              <div
                key={item.number}
                className="relative"
              >

                {index !== steps.length - 1 && (
                  <div className="absolute -right-8 top-1/2 z-20 hidden w-8 items-center xl:flex">
                    <div className="h-px flex-1 bg-corporate" />
                    <div className="h-2 w-2 rounded-full border border-corporate bg-[#FCFBF8]" />
                    <div className="h-px flex-1 bg-corporate" />
                  </div>
                )}

                <article
                  className={`
                    card-top-accent
                    relative
                    flex
                    min-h-[270px]
                    flex-col
                    items-center
                    rounded-[22px]
                    border
                    px-6
                    py-7
                    text-center
                    shadow-[0_18px_45px_rgba(16,37,66,0.06)]
                    transition-transform
                    duration-300
                    hover:-translate-y-1
                    ${
                      item.highlighted
                        ? 'border-[#CEDAEA] bg-[linear-gradient(180deg,#F3F8FF_0%,#FBFDFF_100%)]'
                        : 'border-[#E7E1D7] bg-white/78'
                    }
                  `}
                >

                  <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-corporateGreen/35 bg-white text-sm font-semibold text-corporateGreen">
                    {item.number}
                  </div>

                  <div className="mb-6 mt-7 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#F1F4EC] text-corporate shadow-[inset_0_0_0_1px_rgba(54,126,69,0.06)]">
                    <Icon size={34} strokeWidth={1.7} />
                  </div>

                  <h3 className="mb-3 text-[22px] font-editorial font-semibold leading-tight text-corporate">
                    {item.title}
                  </h3>

                  <p className="max-w-[220px] text-[14px] leading-relaxed text-text-secondary">
                    {item.text}
                  </p>

                  <div className={`mt-auto h-0.5 w-9 ${item.highlighted ? 'bg-corporate' : 'bg-corporateGreen'}`} />

                </article>

              </div>

            )

          })}

        </div>

        <div
          className="
            mt-8
            grid
            gap-5
            rounded-[18px]
            border
            border-[#E7E1D7]
            bg-white/74
            p-5
            shadow-[0_14px_40px_rgba(16,37,66,0.05)]
            lg:grid-cols-[1.15fr_1fr_1.1fr]
            lg:items-center
          "
        >

          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-corporate text-white">
              <TrendingUp size={30} strokeWidth={1.8} />
            </div>

            <div className="flex items-center gap-4">
              <div className="text-[32px] font-semibold leading-none text-corporateGreen">
                +2.300
              </div>

              <div className="text-xs font-bold uppercase leading-snug tracking-[0.06em] text-corporate">
                Suministros<br />revisados
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 border-y border-[#E7E1D7] py-5 lg:border-x lg:border-y-0 lg:px-8 lg:py-0">
            <ShieldCheck className="h-10 w-10 shrink-0 text-corporateGreen" strokeWidth={1.7} />

            <div className="text-xs font-bold uppercase leading-snug tracking-[0.06em] text-corporate">
              Rigor técnico<br />independencia<br />resultados reales
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#F1F4EC] text-corporate">
              <Euro size={30} strokeWidth={1.8} />
            </div>

            <div className="text-xs font-bold uppercase leading-snug tracking-[0.06em] text-corporate">
              Miles de euros detectados<br />en sobrecostes evitables
            </div>
          </div>

        </div>

      </div>

    </Section>

  )

}
