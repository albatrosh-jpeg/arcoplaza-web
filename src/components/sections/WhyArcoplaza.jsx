
import SectionTitle from '../ui/SectionTitle'
import whyArcoplaza from '../../data/whyArcoplaza'
import Card from '../ui/Card'
import Section from '../ui/Section'
import FeatureGrid from '../ui/FeatureGrid'
import AnimatedReveal from '../ui/AnimatedReveal'

export default function WhyArcoplaza() {

  return (

<Section
  className="bg-[#eef2f5] border-y border-[#d7d0c4]" >
<AnimatedReveal>

<SectionTitle
  eyebrow="Por qué Arcoplaza"
  title="Supervisión energética clara y rigurosa."
  text="Analizamos cada suministro de forma individual para detectar sobrecostes, mejorar condiciones y plantear optimizaciones reales adaptadas a cada cliente."
/>
</AnimatedReveal>
        <FeatureGrid>

          {whyArcoplaza.map((item) => (

            <Card
              key={item.number}
              className="bg-[#fcfbf8] border border-[#d7d0c4] rounded-[32px] p-10 min-h-[320px] flex flex-col hover:border-corporateGreen transition-all duration-300"
            >

              <div className="text-5xl font-black text-[#dfe5ea] mb-10">
                {item.number}
              </div>

              <h3 className="text-2xl font-black text-corporate leading-tight mb-5">
                {item.title}
              </h3>

              <p className="text-slate-600 leading-relaxed text-lg">
                {item.text}
              </p>

            </Card>

          ))}

        </FeatureGrid>

    </Section>

  )
}