import Button from '../ui/Button'
import HeroBackground from '../ui/HeroBackground'
import { useState } from 'react'

import Input from '../ui/Input'
import Textarea from '../ui/Textarea'
import FileUpload from '../ui/FileUpload'
import useContactForm from '../../hooks/useContactForm'

export default function Hero() {
const {
  handleSubmit,
  loading,
  success,
  error,
  fileName,
  setFileName
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
          backgroundImage: "url('/hero-blueprint.png')"
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

          pt-12
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

        <div className="max-w-[640px]">

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
            Análisis personalizados para empresas y comunidades
          </div>

          <h1
            className="
              text-[42px]
              sm:text-[48px]

              lg:text-[54px]
              xl:text-[64px]

              font-editorial
              font-normal

              text-corporate

              leading-[0.92]
              tracking-tight

              mb-6
            "
          >

            Detectamos
            <br />

            <span className="text-corporateGreen">
              sobrecostes ocultos
            </span>

            <br />

            en suministros energéticos.

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
          w-full
          max-w-[390px]

          rounded-[12px]

          border
          bg-[#f7f5ef]/35
          backdrop-blur-md

          p-6

          shadow-[0_25px_60px_rgba(15,23,42,0.14)]
        "
      >

        <div className="mb-5">

          <div
            className="
              text-[11px]
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
              text-[28px]

              leading-[1.05]
              tracking-tight

              text-corporate

              font-editorial
              font-normal

              mb-3
            "
          >
            Revisamos tu suministro energético.
          </h3>

          <p
            className="
              text-[15px]
              leading-relaxed

              text-slate-600
            "
          >
            Analizamos tarifas, potencia contratada y posibles sobrecostes.
          </p>

        </div>

  <div className="space-y-4">

    <Input
      type="text"
      name="nombre"
      placeholder="Nombre"
      required
    />

    <Input
      type="email"
      name="email"
      placeholder="Correo electrónico"
      required
    />

    <Input
  type="tel"
  name="telefono"
  placeholder="Teléfono"
/>

    <Textarea
      name="mensaje"
      placeholder="Describe brevemente tu caso"
      rows={4}
    />

    <FileUpload
      name="factura"
      fileName={fileName}
      setFileName={setFileName}
    />

    <Button
      type="submit"
      className="w-full justify-center"
    >
      {loading
        ? 'Enviando...'
        : 'Solicitar análisis'}
    </Button>

    {success && (
      <p className="text-sm text-green-700">
        Solicitud enviada correctamente.
      </p>
    )}

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