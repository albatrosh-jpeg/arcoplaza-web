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
            title="Supervisamos suministros de compañías líderes."
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
            gap-x-8
            gap-y-10

            items-center
          "
        >

          {companies.map((company) => (

            <div
              key={company.name}
              className="
                flex
                items-center
                justify-center

                opacity-70

                transition-all
                duration-300

                hover:opacity-100
              "
            >

              <img
                src={company.logo}
                alt={company.name}
                className="
                  h-10
                  lg:h-12

                  w-auto
                  object-contain

                  grayscale

                  transition-all
                  duration-300

                  hover:grayscale-0
                "
                loading="lazy"
              />

            </div>

          ))}

        </div>


    </Section>

  )

}