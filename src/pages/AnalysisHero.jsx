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
        bg-[#F8F6F1]
      "
    >

      <div
        className="
          absolute
          right-[-180px]
          top-[120px]
          w-[520px]
          h-[520px]
          rounded-full
          bg-corporateGreen/10
          blur-[90px]
        "
      />

      <div
        className="
          relative
          z-10
          max-w-[1280px]
          mx-auto
          px-5
          lg:px-8
          pt-28
          pb-24
          grid
          lg:grid-cols-[0.9fr_1.1fr]
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
              bg-white
              border
              border-border-soft
              px-4
              py-2
              text-corporateGreen
              mb-6
              shadow-sm
            "
          >
            {eyebrow}
          </div>

          <h1
            className="
              heading-h1
              text-corporate
              mb-8
              max-w-[760px]
            "
          >
            {title}
          </h1>

          <p
            className="
              text-lg
              lg:text-xl
              leading-relaxed
              text-text-secondary
              max-w-[620px]
              mb-10
            "
          >
            {text}
          </p>

          <div className="flex flex-wrap gap-4 mb-8">

            <Button
              as="a"
              href="/#formulario"
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

          <div
            className="
              flex
              flex-wrap
              gap-3
              text-sm
              text-text-secondary
            "
          >
            <span>Empresas</span>
            <span>·</span>
            <span>Comunidades</span>
            <span>·</span>
            <span>Suministros profesionales</span>
          </div>

        </div>

        <div
          className="
            relative
            flex
            justify-center
            lg:justify-end
          "
        >

          <div
            className="
              absolute
              inset-8
              rounded-[40px]
              bg-white/70
            "
          />

          <img
            src={image}
            alt={imageAlt}
            className="
              relative
              z-10
              w-full
              max-w-[700px]
              mx-auto
            "
          />

        </div>

      </div>

    </section>

  )

}
