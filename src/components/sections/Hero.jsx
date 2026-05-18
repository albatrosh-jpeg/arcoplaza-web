import HeroStatsCard from '../ui/HeroStatsCard'

import Button from '../ui/Button'
import Badge from '../ui/Badge'
import HeroBackground from '../ui/HeroBackground'

export default function Hero() {

  return (

    <section
      id="inicio"
      className="
        relative
        h-[76vh]
        min-h-[620px]
        lg:min-h-[680px]
        max-h-[820px]
        flex
        items-center
        overflow-hidden
        border-b
        border-border-soft
        bg-surface-primary
              "
    >

      <HeroBackground />

      <div
        className="absolute inset-0 opacity-[0.07] bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-blueprint.png')"
        }}
      />

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          pt-16
          pb-24
          lg:pt-20
          lg:pb-28
          grid
          lg:grid-cols-[0.8fr_1.2fr]
          gap-8
          items-center
        "
      >

        {/* IZQUIERDA */}

        <div className="max-w-[560px]">

        <div
          className="
            eyebrow
            inline-flex
            items-center

            rounded-full

            bg-corporateGreen-soft

            px-4
            py-2

            text-corporateGreen
            mb-6
          "
        >
          Análisis técnico de suministros
        </div>
          <h1
            className="
              text-[52px]
              lg:text-[64px]
              font-editorial
              text-corporate
              leading-[0.92]
              tracking-tight
              mb-8
            "
          >
          Detectamos
          <br />
          <span className="text-corporateGreen">
            sobrecostes ocultos
          </span>
          <br />
          en energía.
          </h1>

          <p
            className="
              text-[18px]
              text-text-secondary
              leading-[1.5]
              max-w-[560px]
              mb-8
            "
          >
            Analizamos suministros eléctricos y de gas para detectar sobrecostes,
            optimizar contratos y plantear mejoras reales.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">

            <Button
              as="a"
              href="#formulario"
              className="text-center"
            >
              Solicitar auditoría
            </Button>

            <Button
              as="a"
              href="#proceso"
              variant="secondary"
              className="text-center"
            >
              Cómo trabajamos
            </Button>

          </div>

        </div>

        {/* DERECHA */}


      </div>
      <div
        className="
          absolute
          left-0
          right-0
          bottom-[-24px]
          z-30
          hidden
          xl:block
          px-6
          py-4
        "
      >

        <div className="max-w-7xl mx-auto flex justify-end">

          <HeroStatsCard />

        </div>

      </div>
    </section>

  )

}