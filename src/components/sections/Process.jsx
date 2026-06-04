export default function Process() {

  const steps = [
    {
      number: '01',
      title: 'Envío de factura',
      text: 'Revisamos tu factura, consumos, tarifas y oportunidades.'
    },
    {
      number: '02',
      title: 'Revisión técnica',
      text: 'Identificamos aquellos costes que normalmente pasan desapercibidos.'
    },
    {
      number: '03',
      title: 'Propuesta clara',
      text: 'Te explicamos qué está ocurriendo, qué cambios recomendamos y qué impacto pueden tener en el coste final.'
    },
    {
      number: '04',
      title: 'Seguimiento',
      text: 'Gestionamos los cambios y supervisamos la evolución del ahorro.'
    }
  ]

  return (

    <section
      id="proceso"
      className="
        bg-surface-secondary

        border-b
        border-border-soft

        overflow-hidden
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto

          px-4
          lg:px-16

          py-10 sm:py-16
          lg:py-10 sm:py-16 sm:py-24
        "
      >

        <div className="max-w-3xl mb-12 lg:mb-16">

          <div className="eyebrow text-corporateGreen mb-4">
            CÓMO TRABAJAMOS
          </div>

          <h2
            className="
              section-title

              text-[36px]
              leading-[0.98]

              sm:text-[42px]

              lg:text-5xl

              mb-5
              lg:mb-6
            "
          >
            Hay sobrecostes que pasan desapercibidos durante años.
          </h2>

          <p
            className="
              body-md
              lg:body-lg
            "
          >
            
            Analizamos tu suministro, detectamos oportunidades de optimización
            y gestionamos todo el proceso de forma transparente y personalizada.
          </p>

        </div>

        <div
          className="
            grid

            gap-4 sm:gap-8
            lg:gap-5 sm:gap-6 sm:p-10

            md:grid-cols-2
            lg:grid-cols-4
          "
        >

          {steps.map((item, index) => (

            <div
              key={item.number}
              className="
                relative
              "
            >

              {index !== steps.length - 1 && (

                <div
                  className="
                    hidden
                    lg:block

                    absolute
                    top-[22px]
                    left-[72px]
                    right-[-40px]

                    h-px

                    bg-border-soft
                  "
                />

              )}

              <div
                className="
                  text-[14px]
                  font-swiss
                  tracking-[0.14em]

                  text-corporateGreen

                  mb-4
                "
              >

                {item.number}

              </div>

              <h3
                className="
                  ui-title

                  text-[24px]

                  mb-4
                "
              >

                {item.title}

              </h3>

              <p
                className="
                  card-text

                  max-w-[260px]
                "
              >

                {item.text}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  )

}