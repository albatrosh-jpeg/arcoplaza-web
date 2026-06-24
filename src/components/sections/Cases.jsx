import cases from '../../data/cases'
import Section from '../ui/Section'
import AnimatedReveal from '../ui/AnimatedReveal'
import StaggerGrid from '../ui/StaggerGrid'
import {
  Building2,
  Factory,
  Home
} from 'lucide-react'

const caseIcons = {
  Comunidad: Building2,
  Vivienda: Home,
  Empresa: Factory
}

export default function Cases() {

  return (

    <Section
      className="
        bg-[#FCFBF8]

        border-y
        border-[#d7d0c4]
      "
      spacing="hero"
      containerClassName="
        py-20
        lg:py-28
      "
    >

      <AnimatedReveal>

        <div className="mb-12 max-w-3xl lg:mb-16">
          <div
            className="
              mb-4
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-corporateGreen
            "
          >
            CASOS DE ÉXITO
          </div>

          <h2
            className="
              max-w-2xl
              heading-h2
              text-corporate
            "
          >
            Resultados reales sobre suministros reales.
          </h2>

          <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-text-secondary lg:text-[18px]">
            Cada caso corresponde a un suministro distinto. Mostramos los resultados de forma individual, sin mezclar ahorros que no son comparables entre sí.
          </p>
        </div>

      </AnimatedReveal>

      <StaggerGrid
        items={cases}
        className="
          grid

          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3

          gap-5

          items-stretch
        "
        renderItem={(item) => {
          const Icon = caseIcons[item.type] || Building2

          return (

            <article
              className="
                card-top-accent
                group
                relative
                overflow-hidden
                rounded-[26px]

                border
                border-border-soft

                bg-white

                p-5
                lg:p-6

                shadow-[0_18px_48px_rgba(16,37,66,0.07)]
                transition-transform
                duration-300

                hover:-translate-y-1
              "
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-[14px]
                    bg-corporate
                    text-white
                    shadow-[0_10px_24px_rgba(16,37,66,0.16)]
                  "
                >
                  <Icon size={20} strokeWidth={1.9} />
                </div>

                <div
                  className="
                    rounded-full
                    bg-corporateGreen-soft
                    px-3
                    py-1.5
                    text-[12px]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-corporateGreen
                  "
                >
                  {item.type}
                </div>
              </div>

              <div className="grid gap-3">
                <div className="rounded-[18px] border border-border-soft bg-[#F8F6F1] p-4">
                  <div className="mb-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-text-muted">
                    Antes
                  </div>

                  <div className="font-swiss text-[22px] font-semibold leading-tight text-corporate">
                    {item.before}
                  </div>
                </div>

                <div className="rounded-[18px] border border-corporateGreen/20 bg-corporateGreen-soft p-4">
                  <div className="mb-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-corporateGreen">
                    Después
                  </div>

                  <div className="font-swiss text-[24px] font-semibold leading-tight text-corporateGreen">
                    {item.after}
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-border-soft pt-5">
                <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-text-muted">
                  Ahorro anual estimado
                </div>

                <div className="mt-2 font-swiss text-[38px] font-semibold leading-none text-corporate">
                  {item.saving}
                </div>
              </div>

            </article>

          )
        }}
      />

    </Section>

  )

}
