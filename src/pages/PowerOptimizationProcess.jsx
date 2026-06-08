import SectionTitle from '../components/ui/SectionTitle'

const steps = [
  {
    number: '01',
    title: 'Revisamos la demanda real',
    text: 'Analizamos el comportamiento eléctrico del suministro y la potencia efectivamente utilizada.'
  },
  {
    number: '02',
    title: 'Estudiamos los maxímetros',
    text: 'Comparamos la potencia contratada con los registros históricos disponibles.'
  },
  {
    number: '03',
    title: 'Evaluamos el margen de seguridad',
    text: 'Comprobamos si existe margen de reducción sin afectar a la operativa.'
  },
  {
    number: '04',
    title: 'Proponemos una optimización',
    text: 'Si detectamos potencial de mejora, te presentamos una propuesta concreta.'
  }
]

export default function PowerOptimizationProcess() {

  return (

    <section
      id="como-funciona"
        className="py-24 lg:py-32
        bg-surface-primary
      "
    >

      <div className="container-content">

        <SectionTitle
          eyebrow="PROCESO"
          title="Cómo realizamos el análisis"
          text="Cada propuesta parte del comportamiento real del suministro, no de estimaciones genéricas."
        />

        <div
          className="
            grid
            md:grid-cols-2
            xl:grid-cols-4
            gap-6
            mt-14
          "
        >

          {steps.map((step) => (

            <div
              key={step.number}
              className="
                border
                border-border-soft
                rounded-[28px]
                p-8
                bg-white
              "
            >

              <div
                className="
                  text-corporateGreen
                  text-sm
                  font-medium
                  mb-5
                "
              >
                {step.number}
              </div>

              <h3
                className="
                  font-editorial
                  text-[30px]
                  leading-[1]
                  text-corporate
                  mb-4
                "
              >
                {step.title}
              </h3>

              <p
                className="
                  text-text-secondary
                  leading-relaxed
                "
              >
                {step.text}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  )

}