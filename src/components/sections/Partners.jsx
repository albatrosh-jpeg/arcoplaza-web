export default function Partners({ companies }) {

  return (

    <section id="partners"
      className="
        bg-surface-primary

        border-y
        border-border-soft
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto

          px-4
          lg:px-6

          py-14
          lg:py-10 sm:py-16
        "
      >

        <div className="mb-10">

          <div className="eyebrow text-corporateGreen mb-4">
            Experiencia en múltiples sectores
          </div>

          <h2
            className="
              section-title

              text-[34px]
              leading-[1]

              sm:text-[40px]

              lg:text-[46px]

              mb-5
            "
          >
            Supervisamos suministros de compañías líderes.
          </h2>

          <p
            className="
              body-md

              max-w-2xl
            "
          >
            Trabajamos con suministros energéticos vinculados a empresas,
            comunidades y organizaciones de distintos sectores.
          </p>

        </div>

        <div
          className="
            grid

            grid-cols-2
            sm:grid-cols-3
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

      </div>

    </section>

  )

}