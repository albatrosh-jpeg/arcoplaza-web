import Button from '../ui/Button'
import HeroBackground from '../ui/HeroBackground'
import {
  ArrowRight,
  CheckCircle,
  Mail,
  MessageCircle,
  Phone,
  User
} from 'lucide-react'

import Input from '../ui/Input'
import Textarea from '../ui/Textarea'
import FileUpload from '../ui/FileUpload'
import useContactForm from '../../hooks/useContactForm'

export default function Hero() {
const {
  loading,
  success,
  error,
  fileName,
  analysis,
  setFileName,
  handleSubmit
} = useContactForm()

  return (

    <section
      id="hero"
      className="
        relative

        min-h-[620px]
        lg:min-h-[680px]

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
          backgroundImage: "url('/hero-blueprint.webp')"
        }}
      />

      <div
        className="
          relative
          z-10

          max-w-[1280px]
          mx-auto

          px-5
          lg:px-8

          pt-4
          pb-16

          lg:pt-20
          lg:pb-20

          grid
          md:grid-cols-[1.05fr_0.95fr]
          gap-10
          items-center
        "
      >

          {/* IZQUIERDA */}

          <div className="max-w-[640px] lg:-mt-60">
          <div
            className="
              eyebrow
              inline-flex
              items-center

              rounded-full

              bg-corporateGreen-soft

              px-3
              py-1.5

              text-corporateGreen

              mb-5
            "
          >
            Nosotros vemos lo que otros pasan por alto
          </div>

          <h1
            className="
              heading-h1
              text-corporate
              mb-6
            "
          >

            Detectamos
            <br />

            <span className="text-corporateGreen">
              sobrecostes ocultos
            </span>

            <br />

            en tus suministros eléctricos y de gas.

          </h1>

          <p
            className="
              text-[15px]
              lg:text-[18px]

              leading-[1.6]

              text-text-secondary

              max-w-[540px]

              mb-6
            "
          >

            Ayudamos a empresas y comunidades a optimizar contratos eléctricos y de gas mediante análisis técnico, revisión tarifaria y supervisión energética continua.

          </p>

          <p
            className="
              text-sm
              text-text-muted

              mb-8
            "
          >
            Electricidad · Gas · Comunidades · Empresas
          </p>

          <div className="flex gap-3">

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
      <div className="hidden md:flex justify-end">
      <form
        onSubmit={handleSubmit}
        className="
          card-top-accent
          w-full
          max-w-[390px]

          rounded-[28px]

          border
          border-border-soft
          bg-white/95
          backdrop-blur-md

          p-6

          shadow-[0_25px_60px_rgba(15,23,42,0.18)]
        "
      >

        <div className="mb-5">

          <div
            className="
              text-[11px]
              font-semibold
              tracking-[0.18em]
              uppercase

              text-corporateGreen

              mb-3
            "
          >
            Solicita revisión
          </div>

          <h3
            className="
              text-[26px]
              font-editorial
              font-semibold
              leading-[1.08]
              text-corporate
              mb-3
            "
          >
            No se trata de consumir menos. Se trata de pagar lo justo.
          </h3>

          <p
            className="
              text-[15px]
              leading-relaxed

              text-text-secondary
            "
          >
            Una revisión técnica independiente puede cambiar completamente el coste real del suministro. Sal de duas ya!
          </p>

        </div>

  <div className="space-y-4">

    <HeroIconField icon={User}>
      <Input
        type="text"
        name="nombre"
        placeholder="Nombre"
        required
        className="bg-white pl-12"
      />
    </HeroIconField>

    <HeroIconField icon={Mail}>
      <Input
        type="email"
        name="email"
      placeholder="Correo electrónico"
        required
        className="bg-white pl-12"
      />
    </HeroIconField>

    <HeroIconField icon={Phone}>
      <Input
  type="tel"
  name="telefono"
  placeholder="Teléfono"
        className="bg-white pl-12"
      />
    </HeroIconField>

    <HeroIconField icon={MessageCircle} align="top">
      <Textarea
        name="mensaje"
        placeholder="Si lo necesitas describe brevemente tu caso"
        rows={4}
        className="bg-white pl-12"
      />
    </HeroIconField>

    <FileUpload
      name="factura"
      fileName={fileName}
      setFileName={setFileName}
      compact
    />

    <button
      type="submit"
      disabled={loading}
      className="
        flex
        w-full
        items-center
        justify-center
        gap-3
        rounded-[18px]
        bg-[linear-gradient(135deg,#43B886_0%,#0657B7_100%)]
        px-5
        py-4
        font-semibold
        text-white
        shadow-[0_16px_34px_rgba(6,87,183,0.22)]
        transition-transform
        hover:-translate-y-[1px]
        disabled:cursor-not-allowed
        disabled:opacity-70
      "
    >
      {loading
        ? 'Enviando...'
        : 'Solicitar análisis'}
      <ArrowRight size={18} />
    </button>

    {success && (
      <p className="text-sm text-green-700">
        Solicitud enviada correctamente.
      </p>
    )}

{
  analysis?.[0] && (

    <div
      className="
        mt-6
        rounded-2xl
        border
        border-[#d7d0c4]
        bg-[#f8f6f1]
        p-5
        text-sm
        text-[#163a70]
      "
    >

      <p className="font-semibold mb-3">
        ✓ Factura analizada
      </p>

      <div className="space-y-2">

<p>
        • Comercializadora detectada:
        {' '}
        <span className="font-medium">
          {analysis[0].company || 'No detectada'}
        </span>
      </p>

      <p>
        • Tarifa identificada:
        {' '}
        <span className="font-medium">
          {analysis[0].tariff || 'No detectada'}
        </span>
      </p>

        {
          analysis[0].warnings?.map(
            (warning, index) => (

              <p key={index}>
                • {warning}
              </p>

            )
          )
        }
      <p className="mt-4 text-[#5b6b88] leading-relaxed">

  Nuestro equipo revisará ahora la estructura
  tarifaria, la potencia contratada y posibles
  penalizaciones asociadas al suministro.

</p>
      </div>

    </div>

  )
}

    {error && (
      <p className="text-sm text-red-600">
        Ha ocurrido un error. Inténtalo de nuevo.
      </p>
    )}

  </div>

</form>

      </div>
      </div>

    </section>

  )

}

function HeroIconField({
  children,
  icon: Icon,
  align = 'center'
}) {

  const alignClass =
    align === 'top'
      ? 'top-4'
      : 'top-1/2 -translate-y-1/2'

  return (

    <div className="relative">
      {children}

      <Icon
        size={19}
        className={`
          pointer-events-none
          absolute
          left-4
          ${alignClass}
          text-corporateGreen
        `}
      />
    </div>

  )

}
