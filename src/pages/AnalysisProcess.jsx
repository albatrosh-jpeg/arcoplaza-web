import {
  Brain,
  ClipboardCheck,
  FileText,
  ScanLine
} from 'lucide-react'
import SectionTitle from '../components/ui/SectionTitle'

const steps = [
  {
    label: 'Factura',
    icon: FileText,
    text: 'Subes una factura reciente para iniciar la lectura del suministro.'
  },
  {
    label: 'OCR',
    icon: ScanLine,
    text: 'Extraemos datos relevantes: CUPS, tarifa, potencia, consumo y periodos.'
  },
  {
    label: 'Ingeniero',
    icon: Brain,
    text: 'Un asesor revisa la información y contrasta condiciones técnicas.'
  },
  {
    label: 'Informe',
    icon: ClipboardCheck,
    text: 'Recibes una lectura clara con observaciones y siguientes pasos.'
  }
]

export default function AnalysisProcess() {

  return (

    <section
      id="como-funciona"
      className="bg-surface-primary py-20 lg:py-32"
    >

      <div className="container-content">

        <SectionTitle
          eyebrow="PROCESO"
          title="Cómo funciona"
          text="Un flujo técnico y revisado, pensado para convertir una factura en una lectura comprensible."
        />

        <div
          className="
            relative
            mt-16
            overflow-hidden
            rounded-[32px]
            border
            border-border-soft
            bg-white
            px-6
            py-10
            text-corporate
            shadow-[0_24px_70px_rgba(16,37,66,0.07)]
            lg:px-10
            lg:py-14
          "
        >
          <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(45,126,81,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(45,126,81,0.055)_1px,transparent_1px)] [background-size:38px_38px]" />

          <div className="relative grid gap-8 lg:grid-cols-4 lg:gap-0">
            <div className="absolute left-0 right-0 top-[42px] hidden h-px bg-gradient-to-r from-transparent via-corporateGreen/35 to-transparent lg:block" />

            {steps.map((step, index) => {
              const Icon = step.icon

              return (
                <div
                  key={step.label}
                  className="
                    relative
                    flex
                    gap-5
                    lg:flex-col
                    lg:items-center
                    lg:px-5
                    lg:text-center
                  "
                >
                  {index < steps.length - 1 && (
                    <div className="absolute left-[27px] top-16 h-[calc(100%+1.5rem)] w-px bg-corporateGreen/25 lg:hidden" />
                  )}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-20
                      w-20
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-corporateGreen/20
                      bg-[#F7FBF8]
                      text-corporateGreen
                      shadow-[0_16px_38px_rgba(16,37,66,0.08)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-corporateGreen/45
                      hover:shadow-[0_22px_48px_rgba(45,126,81,0.14)]
                    "
                  >
                    <span className="absolute inset-2 rounded-full border border-dashed border-corporateGreen/20 animate-[spin_18s_linear_infinite]" />
                    <Icon size={30} strokeWidth={1.75} />
                  </div>

                  <div className="min-w-0 pt-1 lg:pt-0">
                    <div className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-corporateGreen">
                      0{index + 1}
                    </div>

                    <h3 className="font-editorial text-2xl font-semibold leading-tight text-corporate">
                      {step.label}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-text-secondary">
                      {step.text}
                    </p>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="absolute right-[-16px] top-[37px] z-20 hidden h-3 w-3 rounded-full border border-white bg-corporateGreen shadow-[0_0_0_8px_rgba(45,126,81,0.08)] lg:block" />
                  )}
                </div>
              )
            })}
          </div>
        </div>

      </div>

    </section>

  )

}
