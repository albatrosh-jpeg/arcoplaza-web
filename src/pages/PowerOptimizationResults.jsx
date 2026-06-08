import SectionTitle from '../components/ui/SectionTitle'

const results = [
  {
    title: 'Potencia sobredimensionada',
    text: 'Suministros que mantienen potencias contratadas muy por encima de la demanda real observada.'
  },
  {
    title: 'Contratos sin revisar',
    text: 'Potencias que llevan años sin reevaluarse pese a cambios en la actividad o en las instalaciones.'
  },
  {
    title: 'Costes fijos evitables',
    text: 'Importes recurrentes que podrían optimizarse sin afectar al funcionamiento normal del suministro.'
  }
]

export default function PowerOptimizationResults() {

  return (

    <section
        className="py-24 lg:py-32
        bg-surface-primary
      "
    >

      <div className="container-content">

        <SectionTitle
          eyebrow="RESULTADOS"
          title="Las situaciones más habituales que encontramos"
          text="Cada suministro es diferente, pero existen patrones que aparecen una y otra vez cuando revisamos potencias contratadas."
        />

        <div
          className="
            grid
            md:grid-cols-3
            gap-6
            mt-14
          "
        >

          {results.map((result) => (

            <div
              key={result.title}
              className="
                card-top-accent
                border
                border-border-soft
                rounded-[28px]
                p-8
                bg-white
              "
            >

              <h3
                className="
                  heading-h3
                  text-corporate
                  mb-4
                "
              >
                {result.title}
              </h3>

              <p
                className="
                  text-text-secondary
                  leading-relaxed
                "
              >
                {result.text}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  )

}
