import Button from '../components/ui/Button'

export default function PowerOptimizationCTA() {

  return (

    <section className="py-20 lg:py-26">

      <div className="container-content">

        <div
          className="
            rounded-[28px]
            bg-[#F7F5F0]
            p-10
            lg:p-16
            max-w-4xl
          "
        >

          <div
            className="
              eyebrow
              text-corporateGreen
              mb-4
            "
          >
            POTENCIA CONTRATADA
          </div>

          <h2
            className="
              font-editorial
              text-[42px]
              leading-[0.95]
              text-corporate
              mb-6
            "
          >
            ¿Tu potencia contratada sigue teniendo sentido?
          </h2>

          <p
            className="
              text-lg
              text-text-secondary
              leading-relaxed
              mb-8
              max-w-2xl
            "
          >
            Una potencia sobredimensionada puede generar costes fijos
            innecesarios durante años. Revisamos el comportamiento real del
            suministro para determinar si existe margen de optimización.
          </p>

          <Button
            as="a"
            href="/#contacto"
          >
            Solicitar revisión
          </Button>

        </div>

      </div>

    </section>

  )

}