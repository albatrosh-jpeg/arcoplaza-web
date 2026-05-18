export default function Process() {

  const steps = [
    {
      number: '01',
      title: 'Envío de factura',
      text: 'Revisamos consumos, tarifas y condiciones contractuales.'
    },
    {
      number: '02',
      title: 'Revisión técnica',
      text: 'Detectamos sobrecostes y oportunidades reales de ahorro.'
    },
    {
      number: '03',
      title: 'Propuesta clara',
      text: 'Te explicamos las mejoras de forma sencilla y transparente.'
    },
    {
      number: '04',
      title: 'Empieza el ahorro',
      text: 'Gestionamos los cambios y realizamos seguimiento continuo.'
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
          lg:px-6

          py-16
          lg:py-24
        "
      >

        <div className="text-left mb-10 lg:mb-16">

          <div className="eyebrow text-corporateGreen mb-4">
            Cómo trabajamos
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
            Proceso claro y acompañado.
          </h2>

          <p
            className="
              body-md
              lg:body-lg

              max-w-3xl
            "
          >
            Analizamos tu suministro, detectamos oportunidades de optimización
            y gestionamos todo el proceso de forma transparente y personalizada.
          </p>

        </div>

        <div
          className="
            grid

            gap-4
            lg:gap-5

            md:grid-cols-2
            lg:grid-cols-4
          "
        >

          {steps.map((item) => (

            <div
              key={item.number}
              className="
                bg-surface-elevated

                border
                border-border-soft

                rounded-[24px]

                p-6
                lg:p-8

                min-h-[240px]
                lg:min-h-[300px]

                flex
                flex-col

                transition-all
                duration-300

                hover:border-corporateGreen/40
              "
            >

              <div
                className="
                  w-14
                  h-14

                  rounded-full

                  bg-[#eef2f5]

                  border
                  border-border-soft

                  flex
                  items-center
                  justify-center

                  text-[24px]
                  font-bold

                  text-corporateGreen

                  mb-8
                "
              >

                {item.number}

              </div>

              <h3
                className="
                  ui-title

                  text-[26px]
                  leading-tight

                  mb-4
                "
              >

                {item.title}

              </h3>

              <p className="card-text">

                {item.text}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  )

}