import services from '../../data/services'

import Card from '../ui/Card'
import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'
import InfoBlock from '../ui/InfoBlock'
import AnimatedReveal from '../ui/AnimatedReveal'
import StaggerGrid from '../ui/StaggerGrid'

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
        <StaggerGrid
          items={services}
          className="grid md:grid-cols-2 xl:grid-cols-4 gap-6"
renderItem={(item) => (

  <Card
    className="
      h-full
      min-h-[260px]

      bg-white

      px-8
      py-8

      group

      hover:border-corporateGreen/40
    "
  >

    <div
      className="
        mb-8

        flex
        h-14
        w-14
        items-center
        justify-center

        rounded-2xl

        bg-[#f3f6ee]

        text-corporateGreen
      "
    >

      <item.icon
        className="w-6 h-6"
        strokeWidth={1.9}
      />

    </div>

    <div className="space-y-4">

      <h3 className="ui-title">
        {item.title}
      </h3>

      <p className="card-text">
        {item.text}
      </p>

    </div>

  </Card>

)}/>
    </Section>

  )

}