import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'

export default function Partners({ companies }) {

  return (

<Section
  id="partners"
        className="
        bg-surface-primary

        border-y
        border-border-soft
      "
    >
        <div className="max-w-[760px] mb-10">

          <SectionTitle
            eyebrow="EXPERIENCIA EN MÚLTIPLES SECTORES"
            title="Analizamos suministros de distintas comercializadoras y sectores."
            text="Trabajamos con suministros energéticos vinculados a empresas, comunidades y organizaciones de distintos sectores."
            align="left"
          />

        </div>

        <div
          className="
            grid

            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-5
            gap-5

            items-center
          "
        >

          {companies.map((company) => (

            <div
              key={company.name}
              className="
                group
                relative

                flex
                items-center
                justify-center

                min-h-[104px]
                rounded-[18px]

                border
                border-[#ECE7DD]

                bg-white/82

                shadow-[0_10px_24px_rgba(24,55,93,0.04)]

                cursor-default

                transition-all
                duration-500
                ease-out

                hover:-translate-y-1
                hover:border-white
                hover:bg-white
                hover:shadow-[0_14px_32px_rgba(24,55,93,0.10),0_0_26px_rgba(54,126,69,0.14)]
              "
            >

              <img
                src={company.logo}
                alt={company.name}
                className="
                  h-10
                  lg:h-12

                  w-auto
                  max-w-[72%]
                  object-contain

                  transition-all
                  duration-500
                  ease-out

                  group-hover:scale-[1.04]
                "
                loading="lazy"
              />

            </div>

          ))}

        </div>


    </Section>

  )

}
