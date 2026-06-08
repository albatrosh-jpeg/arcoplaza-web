import SectionTitle from '../components/ui/SectionTitle'

const items = [
  {
    title: 'Contratos que dejaron de ser competitivos',
    text: 'Las condiciones que parecían razonables hace meses pueden no encajar con la situación actual del mercado.'
  },
  {
    title: 'Potencias sobredimensionadas',
    text: 'Una potencia superior a la necesaria puede generar costes fijos innecesarios todos los meses.'
  },
  {
    title: 'Márgenes y condiciones poco visibles',
    text: 'Algunos sobrecostes no aparecen de forma evidente en la factura, pero influyen directamente en el importe final.'
  }
]

export default function AnalysisProblem() {

  return (

    <section className="py-20 lg:py-32">

      <div className="container-content">

        <SectionTitle
          eyebrow="EL COSTE OCULTO"
          title="La mayoría de los sobrecostes no están en el consumo"
          text="Muchas empresas y comunidades revisan su consumo energético, pero rara vez revisan las condiciones de sus contratos."
        />

        <div
          className="
            grid
            md:grid-cols-3
            gap-6
            mt-14
          "
        >

          {items.map((item) => (

            <div
              key={item.title}
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
                {item.title}
              </h3>

              <p
                className="
                  text-text-secondary
                  leading-relaxed
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
