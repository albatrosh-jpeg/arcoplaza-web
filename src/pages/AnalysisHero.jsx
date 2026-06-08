import HeroBackground from '../components/ui/HeroBackground'
import Button from '../components/ui/Button'

export default function AnalysisHero({
  eyebrow = 'ANÁLISIS ENERGÉTICO',
  title = 'Descubre si estás pagando más de lo necesario por tu suministro eléctrico',
  text = 'Analizamos contratos, tarifas y facturas para detectar sobrecostes, cláusulas desfavorables y oportunidades reales de optimización.',
  image = '/quienessomos.gif',
  imageAlt = 'Análisis de facturas energéticas'
}) {

  return (

    <section
      className="
        relative
        min-h-[760px]
        lg:min-h-[860px]
        flex
        items-center
        overflow-hidden
        border-b
        border-border-soft
        bg-surface-primary
      "
    >

      <div
        className="
          relative
          z-10
          max-w-[1280px]
          mx-auto
          px-5
          lg:px-8
          pt-20
          pb-20
          grid
          lg:grid-cols-[1.1fr_0.9fr]
          gap-16
          items-center
        "
      >

        <div>

          <div
            className="
              eyebrow
              inline-flex
              rounded-full
              bg-corporateGreen-soft
              px-3
              py-1.5
              text-corporateGreen
              mb-5
            "
          >
            {eyebrow}
          </div>

          <h1
            className="
              font-editorial
              text-[42px]
              lg:text-[68px]
              leading-[0.92]
              tracking-tight
              text-corporate
              mb-8
            "
          >
            {title}
          </h1>

          <p
            className="
              text-lg
              leading-relaxed
              text-text-secondary
              max-w-[640px]
              mb-10
            "
          >
            {text}
          </p>

          <div className="flex flex-wrap gap-4">

            <Button
              as="a"
              href="/#contacto"
            >
              Solicitar análisis
            </Button>

            <Button
              as="a"
              href="#como-funciona"
              variant="secondary"
            >
              Cómo funciona
            </Button>

          </div>

        </div>

        <div>

          <img
            src={image}
            alt={imageAlt}
            className="
              w-full
              max-w-[520px]
              mx-auto
            "
          />

        </div>

      </div>

    </section>

  )

}