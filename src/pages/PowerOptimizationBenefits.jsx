import SectionTitle from '../components/ui/SectionTitle'

const benefits = [
  {
    title: 'Evaluación técnica',
    text: 'Analizamos la relación entre la potencia contratada y la potencia realmente demandada.'
  },
  {
    title: 'Potencial de ahorro',
    text: 'Calculamos el impacto económico que podría tener una optimización de potencia.'
  },
  {
    title: 'Propuesta de actuación',
    text: 'Te indicamos si existe margen de mejora y qué cambios podrían resultar viables.'
  }
]

export default function PowerOptimizationBenefits() {

  return (

    <section className="py-20 lg:py-26">

      <div className="container-content">

        <SectionTitle
          eyebrow="RESULTADO"
          title="Qué obtendrás"
          text="Nuestro objetivo es ayudarte a entender si tu potencia contratada sigue siendo adecuada para el comportamiento real del suministro."
        />

        <div
          className="
            grid
            md:grid-cols-3
            gap-6
            mt-14
          "
        >

          {benefits.map((benefit) => (

            <div
              key={benefit.title}
              className="
                border
                border-border-soft
                rounded-[28px]
                p-8
                bg-white
              "
            >

              <h3
                className="
                  font-editorial
                  text-[30px]
                  leading-[1]
                  text-corporate
                  mb-4
                "
              >
                {benefit.title}
              </h3>

              <p
                className="
                  text-text-secondary
                  leading-relaxed
                "
              >
                {benefit.text}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  )

}