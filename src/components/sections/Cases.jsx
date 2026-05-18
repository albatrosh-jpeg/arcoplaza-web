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
      className="bg-[#f8f8f6] border-y border-[#d7d0c4]"
    >
    <AnimatedReveal>

    <SectionTitle
      eyebrow="Casos reales"
      title="Optimizaciones reales sobre suministros reales."
    />
    </AnimatedReveal>
    <StaggerGrid
      items={cases}
      className="grid lg:grid-cols-3 gap-6"
      renderItem={(item) => (

        <Card
          className="h-full bg-[#fcfbf8] border border-[#d7d0c4] rounded-[32px] p-10"
        >

          <div className="text-sm uppercase tracking-wider text-slate-500 mb-8">
            {item.type}
          </div>

          <div className="space-y-8">

            <StatCard
              label="Antes"
              value={item.before}
              className="text-slate-400"
            />

            <StatCard
              label="Después"
              value={item.after}
              className="text-corporateGreen"
            />

            <div className="pt-6 border-t border-[#e5e7eb]">

              <StatCard
                label="Ahorro anual estimado"
                value={item.saving}
                className="text-corporate"
              />

            </div>

          </div>

        </Card>

        )}
      />
    </Section>

  )

}