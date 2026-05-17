import { Upload } from 'lucide-react'

import useContactForm from '../../hooks/useContactForm'

import Button from '../ui/Button'
import Input from '../ui/Input'
import Textarea from '../ui/Textarea'
import FormField from '../ui/FormField'
import FileUpload from '../ui/FileUpload'
import Badge from '../ui/Badge'

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
      id="inicio"
      className="relative overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top,rgba(31,170,89,0.04),transparent_40%)]"
    >

      <div className="absolute inset-0 bg-[#f5f3ee]/90" />

      <div
        className="absolute inset-0 opacity-[0.07] bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-blueprint.png')"
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-24 items-start">

        {/* IZQUIERDA */}
        <div>

          <div className="inline-flex items-center gap-2 bg-corporateGreen-light text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Análisis técnico de suministros
          </div>

          <h1 className="text-5xl lg:text-6xl font-black text-corporate leading-[0.92] mb-8 tracking-tight">
            Detectamos <span className="text-corporateGreen">sobrecostes ocultos</span><br />
            en tu factura<br />
            de luz y gas.
          </h1>

          <p className="text-xl text-slate-500 leading-relaxed max-w-xl mb-10">
            Analizamos suministros eléctricos y de gas para detectar sobrecostes,
            optimizar contratos y plantear mejoras reales.
          </p>

<div className="flex flex-wrap gap-3 mb-10">

  <Badge>
    ✓ Análisis personalizado
  </Badge>

  <Badge>
    ✓ Respuesta en 24h
  </Badge>

  <Badge>
    ✓ Sin compromiso
  </Badge>

</div>          <div className="flex flex-col sm:flex-row gap-4">

            <Button
              as="a"
              href="#formulario"
              className="shadow-md shadow-black/5 text-center"
            >
              Solicitar análisis gratuito
            </Button>

            <Button
              as="a"
              href="#proceso"
              variant="secondary"
              className="backdrop-blur text-center"
            >
              Cómo trabajamos
            </Button>

          </div>

        </div>

        {/* FORMULARIO */}
        <div
          id="formulario"
          className="scroll-mt-32 bg-[#fcfbf8]/95 backdrop-blur-xl rounded-[32px] border border-[#e7e4dd] p-8 lg:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
        >

          <div className="mb-8">

            <div className="text-4xl font-black tracking-tight text-corporate mb-4">
              ¿Revisamos tu factura?
            </div>

            <p className="text-slate-500 text-lg leading-relaxed">
              Te indicamos si estás pagando de más y qué opciones tienes para optimizar tu suministro.
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

<FormField label="Nombre">

  <Input
    name="nombre"
    type="text"
    placeholder="Escribe tu nombre"
  />

</FormField>
            <FormField label="Teléfono">

              <input
                name="telefono"
                type="text"
                placeholder="Tu teléfono"
                className="w-full bg-[#f8f8f6] border border-[#d7d0c4] rounded-xl px-4 py-4 outline-none focus:border-corporateGreen transition-colors"
              />

            </FormField>

<FormField label="Email*">

  <Input
    required
    name="email"
    type="email"
    placeholder="correo@ejemplo.com"
  />

</FormField>
<FormField label="Cuéntanos tu caso">

  <Textarea
    name="comentario"
    rows="4"
    placeholder="Si tienes algún comentario o duda, éste es el lugar para escribirlo."
  />

</FormField>
<FormField label="Adjunta tu factura (opcional)">

  <FileUpload
    fileName={fileName}
    setFileName={setFileName}
  />

</FormField>
            <Button
              type="submit"
              disabled={loading}
              className={`
                w-full
                flex
                justify-center
                {loading
                  ? 'opacity-80 cursor-not-allowed'
                  : ''
                }
              `}
            >

              {loading
                ? 'Analizando solicitud…'
                : 'Solicitar análisis gratuito'}

            </Button>

            {success && (

              <div className="text-corporate text-sm font-medium">
                Solicitud enviada correctamente.
              </div>

            )}

            {error && (

              <div className="text-red-600 text-sm font-medium">
                Ha ocurrido un error. Inténtalo de nuevo.
              </div>

            )}

          </form>

        </div>

      </div>

    </section>

  )

}