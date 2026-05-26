import cases from '../../data/cases'
import Card from '../ui/Card'
import SectionTitle from '../ui/SectionTitle'
import Section from '../ui/Section'
import StatCard from '../ui/StatCard'
import AnimatedReveal from '../ui/AnimatedReveal'
import StaggerGrid from '../ui/StaggerGrid'

export default function Cases() {

  return (

    <Section
      className="
        bg-[#f8f8f6]

        border-y
        border-[#d7d0c4]
      "
    >

      <AnimatedReveal>

        <SectionTitle
          eyebrow="CASOS DE ÉXITO"
          title="Optimizaciones reales sobre suministros reales."
        />

      </AnimatedReveal>

      <StaggerGrid
        items={cases}
        className="
          grid

          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4

          gap-5

          items-start
        "
        renderItem={(item) => (

          <Card
            className="
              rounded-[28px]

              border
              border-border-soft

              bg-white/70

              p-6

              h-auto
            "
          >

            <div
              className="
                text-[12px]

                uppercase
                tracking-[0.16em]

                text-text-muted

                mb-5
              "
            >
              {item.type}
            </div>

            <div className="space-y-4">

              <StatCard
                label="Antes"
                value={item.before}
                className="
                  text-[24px]
                  lg:text-[30px]

                  leading-none

                  text-[#94A3B8]
                "
              />

              <StatCard
                label="Después"
                value={item.after}
                className="
                  text-[44px]
                  lg:text-[50px]

                  leading-none

                  text-corporateGreen
                "
              />

              <div
                className="
                  pt-5

                  border-t
                  border-[#e5e7eb]
                "
              >

                <StatCard
                  label="Ahorro anual estimado"
                  value={item.saving}
                  className="
                    text-[40px]

                    leading-none

                    text-corporate
                  "
                />

              </div>

            </div>

          </Card>

        )}
      />

    </Section>

  )

}