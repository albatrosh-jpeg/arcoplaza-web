import SectionTitle from '../components/ui/SectionTitle'

const steps = [
  {
    number: '01',
    title: 'Nos envías una factura',
    text: 'Con una factura reciente podemos obtener una visión inicial del suministro y de las condiciones actuales.'
  },
  {
    number: '02',
    title: 'Realizamos el análisis',
    text: 'Revisamos tarifas, potencia contratada, condiciones comerciales y posibles oportunidades de optimización.'
  },
  {
    number: '03',
    title: 'Detectamos oportunidades',
    text: 'Identificamos posibles sobrecostes, riesgos y áreas donde existe margen de mejora.'
  },
  {
    number: '04',
    title: 'Te presentamos una propuesta',
    text: 'Recibes una valoración clara de la situación actual y de las acciones que podrían resultar interesantes.'
  }
]

export default function AnalysisProcess() {

  return (

    <section
      id="como-funciona"
        className="py-20 lg:py-32
        bg-surface-primary
      "
    >

      <div className="container-content">

      <SectionTitle
          eyebrow="PROCESO"
          title="Cómo funciona"
          text="Un proceso sencillo, transparente y orientado a detectar oportunidades reales de optimización."
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
                card-top-accent
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
                  heading-h3
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
