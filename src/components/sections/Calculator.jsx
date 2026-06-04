import { motion } from 'framer-motion'
import { Upload } from 'lucide-react'

import useContactForm from '../../hooks/useContactForm'

import Button from '../ui/Button'
import Input from '../ui/Input'
import Textarea from '../ui/Textarea'
import FormField from '../ui/FormField'
import Select from '../ui/Select'
import FileUpload from '../ui/FileUpload'

export default function Calculator({
  tipo,
  setTipo,
  gasto,
  setGasto,
  potencia,
  setPotencia,
  resultado
}) {

  const {
    handleSubmit,
    loading,
    success,
    error,
    fileName,
    analysis,
    setFileName
  } = useContactForm()

  return (

    <section
  className="
    bg-surface-primary

    border-t
    border-border-soft

    border-b
    border-border
  "
>

      <div className="container-hero pt-10 pb-2 lg:pt-14 lg:pb-4">

        <div className="max-w-4xl mb-16">

          <div className="text-[#1faa59] font-swiss uppercase tracking-wider text-sm mb-4">
            Optimización energética
          </div>

          <h2 className="text-4xl lg:text-5xl font-editorial font-normal text-corporate leading-tight mb-6">
              No vendemos energía. Revisamos si la estás pagando correctamente.
.
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed">
            Calcula una estimación aproximada de ahorro en electricidad y gas a partir de tu consumo, potencia contratada y tipo de suministro.
          </p>

        </div>
        <div
          className="
            grid
            xl:grid-cols-2

            gap-6
            items-stretch
            w-full
          "
        >

  {/* CALCULADORA */}

  <div
    className="
      bg-[#fcfbf8]
      border border-[#d7d0c4]
      rounded-[24px]

      p-6
      sm:p-8
    "
  >

    <div className="space-y-6">

      <FormField label="Tipo de suministro">

        <Select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className="
            w-full
            bg-[#f8f8f6]
            border border-[#d7d0c4]
            rounded-xl
            px-4
            py-4
            outline-none
          "
        >
          <option value="vivienda">Vivienda</option>
          <option value="empresa">Empresa</option>
          <option value="comunidad">Comunidad</option>
        </Select>

      </FormField>

      <FormField label="Gasto mensual aproximado (€)">

        <Input
          type="number"
          value={gasto}
          onChange={(e) => setGasto(e.target.value)}
          placeholder="Ejemplo: 180"
        />

      </FormField>

      <FormField label="Potencia contratada (kW)">

        <Input
          type="number"
          value={potencia}
          onChange={(e) => setPotencia(e.target.value)}
          placeholder="Ejemplo: 5.75"
        />

      </FormField>

    </div>

  </div>

  {/* RESULTADO */}

  <div
    className="
      relative
      overflow-hidden

      bg-[#102542]
      text-white

      rounded-[24px]

      p-6
      sm:p-8

      flex
      flex-col
      justify-between
    "
  >

    <div
      className="
        absolute
        inset-0
        opacity-[0.05]
        bg-[radial-gradient(circle_at_top,white,transparent_55%)]
      "
    />

    <div className="relative z-10">

      {!resultado ? (

        <>

          <div
            className="
              text-green-300
              uppercase
              tracking-wider
              text-sm
              font-swiss
              mb-4
            "
          >
            Simulación orientativa
          </div>

          <h3
            className="
              text-[26px]
              sm:text-[32px]

              leading-[1.12]

              font-editorial font-normal

              mb-5
            "
          >
            Analizamos personalmente los contratos de luz y gas para detectar oportunidades reales de ahorro.
          </h3>

          <p
            className="
              font-swiss
              text-base
              sm:text-lg
              leading-relaxed
            "
          >
            Introduce los datos de tu suministro y te mostraremos una estimación aproximada de ahorro anual.
          </p>

        </>

      ) : (

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
            y: 20
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0
          }}
          transition={{
            duration: 0.35,
            ease: 'easeOut'
          }}
        >

          <div className="space-y-6">

            <div>

              <div
                className="
                  text-sm
                  uppercase
                  tracking-[0.18em]
                  text-green-300
                  mb-3
                "
              >
                Potencial de optimización detectado
              </div>

              <div
                className="
                  text-5xl
                  lg:text-6xl

                  font-swiss
                  leading-none
                  tracking-tight

                  text-white
                  mb-3
                "
              >
                {resultado.minPercent}% – {resultado.maxPercent}%
              </div>

              <div className="font-swiss text-lg">
                Equivalente aproximado:
              </div>

            </div>

            <div
              className="
                text-3xl
                lg:text-4xl

                font-swiss
                leading-tight

                text-green-300
              "
            >
              {resultado.min.toLocaleString()}€ – {resultado.max.toLocaleString()}€/año
            </div>

            <div
              className="
                border-t
                border-white/10

                pt-5

                text-sm
                leading-relaxed
                text-slate-400
              "
            >
              Estimación orientativa basada en suministros similares y parámetros energéticos generales.
            </div>

          </div>

        </motion.div>

      )}

    </div>

  </div>

        </div>

                    {/* FORMULARIO */}

            <form
              id="formulario"
              onSubmit={handleSubmit}
              className="
                mt-8
                lg:mt-10

                bg-surface-elevated

                border
                border-border-soft

                rounded-[24px]

                p-6
                lg:p-6 sm:p-10

                overflow-hidden

                shadow-[0_12px_40px_rgba(16,37,66,0.04)]
              "
                          >

              <div className="mb-8">

                <div className="text-sm uppercase tracking-[0.18em] text-slate-500 mb-3">
                  Solicita revisión
                </div>

                <h3 className="text-3xl font-editorial font-normal-md text-corporate leading-tight mb-4">
                  Adjunta facturas de electricidad y gas
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  y revisaremos tarifas, potencia contratada y posibles optimizaciones.
                </p>

              </div>

              <div className="grid gap-5">

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
                  placeholder="Cuéntanos brevemente tu caso"
                  rows={5}
                />

                <FileUpload
                  fileName={fileName}
                  setFileName={setFileName}
                />

                <Button
                  type="submit"
                  className="w-full justify-center"
                >
                  {loading
                    ? 'Enviando...'
                    : 'Solicitar análisis gratuito'}
                </Button>

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
        ✓ Diagnóstico preliminar generado
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

      </div>

      <p className="mt-4 text-[#5b6b88] leading-relaxed">

        Nuestro equipo revisará ahora la estructura
        tarifaria, la potencia contratada y posibles
        penalizaciones asociadas al suministro.

      </p>

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

    </section>

  )

}