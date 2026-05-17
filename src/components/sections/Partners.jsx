
import LogoMarquee from '../ui/LogoMarquee'
import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'
import AnimatedReveal from '../ui/AnimatedReveal'

export default function Partners({
  companies
}) {

  return (

    <Section
      className="bg-[#fcfbf8] border-t border-[#d7d0c4]"
    >
      <AnimatedReveal>

      <SectionTitle
        eyebrow="Compañías con las que trabajamos"
        title="Empresas colaboradoras que hacen posible soluciones adaptadas para cada cliente."
        text="Trabajamos junto a múltiples comercializadoras y partners energéticos para ofrecer propuestas personalizadas en luz, gas, autoconsumo, instalaciones fotovoltaicas, baterías y cargadores para vehículo eléctrico."
      />
      </AnimatedReveal>

      <div className="bg-[#fcfbf8] px-8 md:px-16 py-12">

        <LogoMarquee items={companies} />

      </div>

    </Section>

  )

}