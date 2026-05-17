import { motion } from 'framer-motion'
import Button from '../ui/Button'
import Input from '../ui/Input'
import FormField from '../ui/FormField'
import Select from '../ui/Select'

export default function Calculator({
  tipo,
  setTipo,
  gasto,
  setGasto,
  potencia,
  setPotencia,
  resultado
}) {

  return (
    <section className="bg-[#f8f6f1] border-b border-[#d7d0c4]">

      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="max-w-3xl mb-16">

          <div className="text-[#1faa59] font-semibold uppercase tracking-wider text-sm mb-4">
            Estimación de ahorro
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-corporate leading-tight mb-6">
            ¿Cuánto podrías ahorrar?
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed">
            Calcula una estimación orientativa basada en tu suministro actual.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* FORM */}
          <div className="bg-[#fcfbf8] border border-[#d7d0c4] rounded-[32px] p-10">

            <div className="space-y-6">

              <FormField label="Tipo de suministro">

                <Select
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}
                  className="w-full bg-[#f8f8f6] border border-[#d7d0c4] rounded-xl px-4 py-4 outline-none"
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
    rounded-[32px]
    p-10
    flex
    flex-col
    justify-center
  "
>
  <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_top,white,transparent_55%)]" />
<div className="relative z-10">
            {!resultado ? (

              <>
                <div className="text-green-300 uppercase tracking-wider text-sm font-semibold mb-4">
                  Simulación orientativa
                </div>

                <h3 className="text-4xl font-black leading-tight mb-6">
                  Detectamos oportunidades reales de optimización.
                </h3>

                <p className="text-slate-300 text-lg leading-relaxed">
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
    duration: 0.6,
    ease: 'easeOut'
  }}
>

                <div className="text-green-300 uppercase tracking-wider text-sm font-semibold mb-4">
                  Ahorro potencial estimado
                </div>

<div className="flex items-end gap-4 mb-6 flex-wrap">

  <div className="text-6xl lg:text-7xl font-black leading-none text-white">
    {resultado.min}€
  </div>

  <div className="text-3xl font-black text-green-300 pb-2">
    a
  </div>

  <div className="text-6xl lg:text-7xl font-black leading-none text-green-300">
    {resultado.max}€
  </div>

</div>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  Suministros similares suelen presentar márgenes de optimización dentro de este rango anual.
                </p>

                <div className="text-sm text-slate-400 mb-10">
                  Estimación orientativa basada en suministros similares analizados.
                </div>

<Button
  as="a"
  href="#formulario"
  variant="secondary"
  className="w-fit"
>
  Solicitar revisión gratuita
</Button>

              </motion.div>

            )}

          </div>

        </div>

      </div>

      </div>

    </section>
  )
}