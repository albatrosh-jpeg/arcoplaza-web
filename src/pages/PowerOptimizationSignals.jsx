import SectionTitle from '../components/ui/SectionTitle'

const signals = [
  'No recuerdas cuándo se revisó la potencia por última vez.',
  'La potencia contratada lleva años sin modificarse.',
  'Existen maxímetros muy por debajo de la potencia contratada.',
  'Los costes fijos representan una parte importante de la factura.',
  'Se han producido cambios en la actividad o en los equipos instalados.'
]

export default function PowerOptimizationSignals() {

  return (

    <section className="py-20 lg:py-26">

      <div className="container-content">

        <SectionTitle
          eyebrow="SEÑALES"
          title="¿Cuándo merece la pena revisarlo?"
          text="Estas situaciones suelen indicar que existe margen para revisar la potencia contratada."
        />

        <div
          className="
            max-w-4xl
            mt-14
            space-y-4
          "
        >

          {signals.map((signal) => (

            <div
              key={signal}
              className="
                flex
                gap-4
                items-start

                border
                border-border-soft

                rounded-[20px]

                p-6
              "
            >

              <div
                className="
                  text-corporateGreen
                  font-medium
                "
              >
                ✓
              </div>

              <div className="text-text-secondary">
                {signal}
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  )

}