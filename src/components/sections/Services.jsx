import services from '../../data/services'

import Card from '../ui/Card'
import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'
import InfoBlock from '../ui/InfoBlock'
import AnimatedReveal from '../ui/AnimatedReveal'

export default function Services() {

  return (

    <Section id="servicios">
    <AnimatedReveal>

        <SectionTitle
          eyebrow="Servicios"
          title="Asesoría energética clara y eficiente."
          text="Optimización energética basada en consumo real."
        />
        </AnimatedReveal>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        {services.map((item, index) => (
          <AnimatedReveal
          key={item.title}
          delay={index * 0.08}
        >
          <Card
          className="h-full group bg-[#f8f8f6] hover:border-corporateGreen min-h-[280px]" 
          >

            <div className="w-14 h-14 rounded-2xl bg-[#eef2f5] border border-[#d7d0c4] mb-6 shadow-sm flex items-center justify-center">

              <item.icon
                className="w-6 h-6 text-corporate"
                strokeWidth={2}
              />

            </div>

          <InfoBlock
            title={item.title}
            text={item.text}
            titleClassName="text-corporate"
            textClassName="text-slate-600"
          />
          </Card>
          </AnimatedReveal>

        ))}

      </div>

    </Section>

  )

}