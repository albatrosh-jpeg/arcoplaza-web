import SectionTitle from '../ui/SectionTitle'
import whyArcoplaza from '../../data/whyArcoplaza'
import Card from '../ui/Card'
import Section from '../ui/Section'
import AnimatedReveal from '../ui/AnimatedReveal'
import StaggerGrid from '../ui/StaggerGrid'
import InfoBlock from '../ui/InfoBlock'

export default function WhyArcoplaza() {

  return (

    <Section
      id="why-arcoplaza"
      className="
        bg-[#fcfbf8]
        pt-0
        pb-10
        sm:pb-8
        "    
        >

      <div className="space-y-6 sm:space-y-10">

        <AnimatedReveal>

          <div className="max-w-[760px]">

            <SectionTitle
              eyebrow="Por qué Arcoplaza"
              title="Supervisión energética clara y rigurosa."
              text="Analizamos contratos eléctricos y de gas para empresas y comunidades, detectando sobrecostes, optimizando tarifas y supervisando el consumo energético de forma continua, con una visión personalizada."
              align="left"
            />

          </div>

        </AnimatedReveal>

        <div>

          <StaggerGrid
            items={whyArcoplaza}
            className="
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-5
            "
            
renderItem={(item) => {

  const Icon = item.icon

  return (

    <Card
className="
          h-full
          bg-[#fcfbf8]

          border
          border-[#e7e1d7]

          rounded-[24px]
          sm:rounded-[28px]

          px-5
          py-6

          sm:px-7
          sm:py-8

          min-h-[190px]
          sm:min-h-[220px]

          flex
          flex-col

          transition-all
          duration-300

          hover:-translate-y-1
          hover:shadow-[0_20px_50px_rgba(16,37,66,0.08)]
        "    >

<div
  className="
    flex
    items-center

    gap-4

    mb-4
    sm:mb-6
  "
>

        <div
          className="
            flex-shrink-0

            flex

            h-10
            w-10

            sm:h-12
            sm:w-12

            items-center
            justify-center

            rounded-full

            bg-[#f3f6ee]
            text-corporateGreen
          "
        >

          <Icon size={20} strokeWidth={1.8} />

        </div>

        <h3
          className="
            text-[20px]
            sm:text-[24px]

            leading-tight
            tracking-tight

            font-swiss
            text-corporate
          "
        >
          {item.title}
        </h3>

      </div>

      <div className="space-y-4">

        <p
          className="
          text-[15px]
          leading-[1.7]

          sm:text-[16px]
          sm:leading-relaxed            
          text-slate-600
          "
        >
          {item.text}
        </p>

      </div>

    </Card>

  )

}}
          />

        </div>

      </div>

    </Section>

  )

}