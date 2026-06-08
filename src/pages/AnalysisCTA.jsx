import Button from '../components/ui/Button'

export default function AnalysisCTA() {

  return (

    <section className="py-20 lg:py-32">

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
            REVISIÓN ENERGÉTICA
          </div>

          <h2
            className="
              heading-h2
              text-corporate
              mb-6
            "
          >
            ¿Quieres saber si existe margen de mejora?
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
            Envíanos una factura y realizaremos una revisión inicial para
            detectar posibles oportunidades de optimización en tu suministro.
          </p>

          <Button
            as="a"
            href="/#formulario"
          >
            Solicitar análisis
          </Button>

        </div>

      </div>

    </section>

  )

}
