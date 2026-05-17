import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Zap,
  Flame,
  Upload
} from 'lucide-react'
import Services from './components/sections/Services'

export default function ArcoplazaLanding() {

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [fileName, setFileName] = useState('')
  const [tipo, setTipo] = useState('vivienda')
const [gasto, setGasto] = useState('')
const [potencia, setPotencia] = useState('')
const [resultado, setResultado] = useState(null)
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7
    }
  }
}

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
}
const calcularAhorro = () => {

  if (!gasto) return

  const anual = Number(gasto) * 12

  let minFactor = 0.08
  let maxFactor = 0.18

  if (tipo === 'empresa') {
    minFactor = 0.12
    maxFactor = 0.28
  }

  if (tipo === 'comunidad') {
    minFactor = 0.15
    maxFactor = 0.32
  }

  if (potencia > 10) {
    maxFactor += 0.05
  }

  const min = Math.round(anual * minFactor)
  const max = Math.round(anual * maxFactor)

  setResultado({ min, max })
}
  const handleSubmit = async (e) => {

    e.preventDefault()

    setLoading(true)
    setSuccess(false)
    setError(false)

    const formData = new FormData()

    formData.append('nombre', e.target.nombre.value)
    formData.append('telefono', e.target.telefono.value)
    formData.append('email', e.target.email.value)
    formData.append('comentario', e.target.comentario.value)

    if (e.target.factura.files[0]) {
      formData.append('factura', e.target.factura.files[0])
    }

    try {

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData
      })

      if (response.ok) {

        setSuccess(true)
        setFileName('')
        e.target.reset()

      } else {

        setError(true)

      }

    } catch (err) {

      console.error(err)
      setError(true)

    }

    setLoading(false)
  }

  const reviews = [
    {
      name: 'Carlos M.',
      text: 'Nos revisaron todos los contratos del negocio y redujimos bastante el gasto mensual.'
    },
    {
      name: 'Laura G.',
      text: 'Trato cercano, explicaciones claras y sin sensación de presión comercial.'
    },
    {
      name: 'Comunidad Residencial Atenea',
      text: 'Muy profesionales en la gestión energética de la comunidad.'
    }
  ]

  const companies = [
  {
    name: 'Acciona',
    url: 'https://www.acciona-energia.com',
    logo: '/logos/acciona.png'
  },
  {
    name: 'AEQ',
    url: 'https://www.aeqenergia.com',
    logo: '/logos/aeq.png'
  },
  {
    name: 'Agraria Energía',
    url: 'https://agrariaenergia.com',
    logo: '/logos/agraria.png'
  },
  {
    name: 'Candela Energía',
    url: 'https://candelaenergia.es',
    logo: '/logos/candela.png'
  },
  {
    name: 'Eleia',
    url: 'https://eleiaenergia.com',
    logo: '/logos/eleia.png'
  },
  {
    name: 'Endesa',
    url: 'https://www.endesa.com',
    logo: '/logos/endesa.png'
  },
  {
    name: 'Energya VM',
    url: 'https://energyavm.es',
    logo: '/logos/energyavm.png'
  },
  {
    name: 'Factor Energía',
    url: 'https://www.factorenergia.com',
    logo: '/logos/factor-energia.png'
  },
  {
    name: 'Galp',
    url: 'https://www.galp.com',
    logo: '/logos/galp.png'
  },
  {
    name: 'Gana Energía',
    url: 'https://www.ganaenergia.com',
    logo: '/logos/gana-energia.png'
  },
  {
    name: 'Iberdrola',
    url: 'https://www.iberdrola.es',
    logo: '/logos/iberdrola.png'
  },
  {
    name: 'Ignis',
    url: 'https://ignis.es',
    logo: '/logos/ignis.png'
  },
  {
    name: 'Imagina Energía',
    url: 'https://imaginaenergia.com',
    logo: '/logos/imagina-energia.png'
  },
  {
    name: 'Max Energía',
    url: 'https://maxenergia.com',
    logo: '/logos/max-energia.png'
  },
  {
    name: 'Naturgy',
    url: 'https://www.naturgy.es',
    logo: '/logos/naturgy.png'
  },
  {
    name: 'Niba',
    url: 'https://niba.es',
    logo: '/logos/niba.webp'
  },
  {
    name: 'Nieves Energía',
    url: 'https://www.nievesenergia.com',
    logo: '/logos/nieves.png'
  },
  {
    name: 'Plenitude',
    url: 'https://plenitude.es',
    logo: '/logos/plenitude.png'
  },
  {
    name: 'Repsol',
    url: 'https://www.repsol.es',
    logo: '/logos/repsol.png'
  },
  {
    name: 'TotalEnergies',
    url: 'https://totalenergies.es',
    logo: '/logos/totalenergies.png'
  }
]

  return (
    <div className="min-h-screen bg-[#fcfbf8] text-corporate font-sans">
      {/* NAVBAR */}
    <header className="sticky top-0 z-50 backdrop-blur bg-[#faf7f2]/95 border-b-4 border-corporate shadow-sm">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">

    <div className="flex items-center">
      <img
        src="/logo-arcoplaza.png"
        alt="arcoplaza asesores"
        className="h-14 w-auto object-contain"
      />
    </div>
<nav className="hidden lg:flex items-center gap-10 text-[17px] font-semibold text-corporate ml-auto mr-8">
  <a href="#quienes" className="hover:text-green-600 transition-colors">
    Quiénes somos
  </a>

  <a href="#servicios" className="hover:text-green-600 transition-colors">
    Servicios
  </a>

  <a href="#formulario" className="hover:text-green-600 transition-colors">
    Contacto
  </a>
</nav>
  <a
  href="#formulario"
  className="bg-corporateGreen hover:bg-corporateGreen-dark transition-colors text-white px-5 py-3 rounded-xl text-sm font-semibold"
>
  Solicitar análisis
</a>

  </div>
</header>

{/* HERO */}
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

    {/* COLUMNA IZQUIERDA */}
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

Siempre con un enfoque técnico, transparente y personalizado.      </p>

      <div className="flex flex-wrap gap-3 mb-10">

        <div className="bg-[#fcfbf8]/70 backdrop-blur border border-[#d7d0c4] px-4 py-2 rounded-full text-sm font-medium text-corporate">
          ✓ Análisis personalizado
        </div>

        <div className="bg-[#fcfbf8]/70 backdrop-blur border border-[#d7d0c4] px-4 py-2 rounded-full text-sm font-medium text-corporate">
          ✓ Respuesta en 24h
        </div>

        <div className="bg-[#fcfbf8]/70 backdrop-blur border border-[#d7d0c4] px-4 py-2 rounded-full text-sm font-medium text-corporate">
          ✓ Sin compromiso
        </div>

      </div>

      <div className="flex flex-col sm:flex-row gap-4">

        <a
          href="#formulario"
          className="bg-corporateGreen hover:bg-corporateGreen-dark transition-colors text-white px-7 py-4 rounded-xl font-semibold shadow-md shadow-black/5 text-center"
        >
          Solicitar análisis gratuito
        </a>

        <a
          href="#proceso"
          className="border border-slate-300 hover:border-slate-500 bg-[#fcfbf8]/50 backdrop-blur transition-colors px-7 py-4 rounded-xl font-semibold text-center"
        >
          Cómo trabajamos
        </a>

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

        <div>
          <label className="block text-sm font-medium mb-2 text-slate-700">
            Nombre
          </label>

          <input
            name="nombre"
            type="text"
            placeholder="Escribe tu nombre"
            className="mt-5 w-full bg-[#f8f8f6] border border-[#d7d0c4] rounded-xl px-4 py-4 outline-none focus:border-corporateGreen transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-slate-700">
            Teléfono
          </label>

          <input
            name="telefono"
            type="text"
            placeholder="Tu teléfono"
            className="w-full bg-[#f8f8f6] border border-[#d7d0c4] rounded-xl px-4 py-4 outline-none focus:border-corporateGreen transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-slate-700">
            Email*
          </label>

          <input
            required
            name="email"
            type="email"
            placeholder="correo@ejemplo.com"
            className="w-full bg-[#f8f8f6] border border-[#d7d0c4] rounded-xl px-4 py-4 outline-none focus:border-corporateGreen transition-colors"
          />
        </div>

        <div>

          <label className="block text-sm font-medium mb-2 text-slate-700">
            Cuéntanos tu caso
          </label>

          <textarea
            name="comentario"
            rows="4"
            placeholder="Si tienes algún comentario o duda, éste es el lugar para escribirlo."
            className="w-full bg-[#f8f8f6] border border-[#d7d0c4] rounded-xl px-4 py-4 outline-none focus:border-corporateGreen transition-colors resize-none"
          />

          <label className="block text-sm font-medium mb-2 mt-5 text-slate-700">
            Adjunta tu factura (opcional)
          </label>

          <label className="block">

            <div className="bg-[#f8f8f6] border border-[#e7e4dd] hover:border-corporateGreen hover:bg-[#fcfbf8] transition-colors rounded-2xl p-6 text-center cursor-pointer">

              <Upload className="w-8 h-8 mx-auto mb-3 text-corporateGreen" />

              <div className="font-semibold text-corporate mb-1">
                Arrastra tu factura o haz clic aquí
              </div>

              <div className="text-sm text-slate-500">
                PDF, JPG o PNG · Máx. 10MB
              </div>

              {fileName && (
                <div className="mt-3 text-sm text-corporate font-semibold">
                  ✓ Factura adjuntada: {fileName}
                </div>
              )}

              <input
                name="factura"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files[0]) {
                    setFileName(e.target.files[0].name)
                  }
                }}
              />

            </div>

          </label>

        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-3 ${
            loading
              ? 'bg-green-700 cursor-not-allowed opacity-90 text-white'
              : 'bg-corporateGreen hover:bg-corporateGreen-dark text-white'
          }`}
        >

          {loading && (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          )}

          {loading
            ? 'Analizando solicitud…'
            : 'Solicitar análisis gratuito'}

        </button>

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

{/* CALCULADORA */}
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

          <div>
            <label className="block text-sm font-medium mb-3 text-slate-700">
              Tipo de suministro
            </label>

            <select
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              className="w-full bg-[#f8f8f6] border border-[#d7d0c4] rounded-xl px-4 py-4 outline-none"
            >
              <option value="vivienda">Vivienda</option>
              <option value="empresa">Empresa</option>
              <option value="comunidad">Comunidad</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-3 text-slate-700">
              Gasto mensual aproximado (€)
            </label>

            <input
              type="number"
              value={gasto}
              onChange={(e) => setGasto(e.target.value)}
              placeholder="Ejemplo: 180"
              className="w-full bg-[#f8f8f6] border border-[#d7d0c4] rounded-xl px-4 py-4 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-3 text-slate-700">
              Potencia contratada (kW)
            </label>

            <input
              type="number"
              value={potencia}
              onChange={(e) => setPotencia(e.target.value)}
              placeholder="Ejemplo: 5.75"
              className="w-full bg-[#f8f8f6] border border-[#d7d0c4] rounded-xl px-4 py-4 outline-none"
            />
          </div>

          <button
            onClick={calcularAhorro}
            className="w-full bg-corporateGreen hover:bg-corporateGreen-dark transition-colors text-white py-4 rounded-xl font-semibold"
          >
            Ver mi ahorro potencial
          </button>

        </div>

      </div>

      {/* RESULTADO */}
      <div className="bg-[#102542] text-white rounded-[32px] p-10 flex flex-col justify-center">

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
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >

    <div className="text-green-300 uppercase tracking-wider text-sm font-semibold mb-4">
      Ahorro potencial estimado
    </div>

    <div className="text-6xl lg:text-7xl font-black leading-none mb-6">
      {resultado.min}€ · {resultado.max}€
    </div>

    <p className="text-slate-300 text-lg leading-relaxed mb-6">
      Suministros similares suelen presentar márgenes de optimización dentro de este rango anual.
    </p>

    <div className="text-sm text-slate-400 mb-10">
      Estimación orientativa basada en suministros similares analizados.
    </div>

    <a
      href="#formulario"
      className="inline-flex w-fit bg-[#fcfbf8] text-corporate px-6 py-4 rounded-xl font-semibold hover:bg-[#f3f0ea] transition-colors"
    >
      Solicitar revisión gratuita
    </a>

  </motion.div>

)}

</div>

    </div>

  </div>

</section>

{/* PROCESO */}
<section 
id="proceso"
className="bg-[#f3f0ea] border-b border-[#d7d0c4]">

  <div className="max-w-7xl mx-auto px-6 py-24">

    <div className="text-left mb-16">

      <div className="text-[#1faa59] font-semibold uppercase tracking-wider text-sm mb-4">
        Cómo trabajamos
      </div>

      <h2 className="text-4xl lg:text-5xl font-black text-corporate leading-tight mb-6">
        Proceso claro y acompañado.
      </h2>

      <p className="text-slate-600 text-lg leading-relaxed">
  Analizamos tu suministro, detectamos oportunidades de optimización
  <br />
  y gestionamos todo el proceso de forma transparente y personalizada.
</p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

      {[
        {
          number: '01',
          title: 'Envío de factura',
          text: 'Revisamos consumos, tarifas y condiciones contractuales.'
        },
        {
          number: '02',
          title: 'Revisión técnica',
          text: 'Detectamos sobrecostes y oportunidades reales de ahorro.'
        },
        {
          number: '03',
          title: 'Propuesta clara',
          text: 'Te explicamos las mejoras de forma sencilla y transparente.'
        },
        {
          number: '04',
          title: 'Empieza el ahorro',
          text: 'Gestionamos los cambios y realizamos seguimiento continuo.'
        }
      ].map((item) => (

        <div
          key={item.number}
          className="bg-[#f8f6f1] border border-[#d7d0c4] rounded-[32px] p-8 min-h-[300px] flex flex-col hover:border-corporateGreen transition-all duration-300"
        >

          <div className="w-16 h-16 rounded-full bg-[#eef2f5] border border-[#d7d0c4] flex items-center justify-center text-2xl font-black text-corporateGreen mb-10">
            {item.number}
          </div>

          <h3 className="text-2xl font-black text-corporate leading-tight mb-6">
            {item.title}
          </h3>

          <p className="text-slate-600 leading-relaxed text-lg">
            {item.text}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>
      {/* QUIÉNES SOMOS */}
      <section id="quienes" className="bg-[#f8f8f6] border-y border-[#d7d0c4]">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-[#1faa59] font-semibold uppercase tracking-wider text-sm mb-4">
              Quiénes somos
            </div>

            <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-6">
              Asesoría energética con enfoque humano y técnico.
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              En Arcoplaza Asesores ayudamos a particulares, negocios y comunidades a optimizar sus suministros energéticos de manera transparente y eficiente.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed">
              Analizamos cada caso de forma personalizada para detectar mejoras reales, evitar sobrecostes y ofrecer soluciones adaptadas al consumo de cada cliente.
            </p>
          </div>

          <div className="bg-[#f8f6f1] rounded-3xl border border-[#d7d0c4] p-10 shadow-lg">
            <div className="space-y-8">
              <div>
                <div className="text-5xl font-black text-[#1faa59] mb-2">+500</div>
                <div className="text-slate-600">Clientes asesorados</div>
              </div>

              <div>
                <div className="text-5xl font-black text-corporate mb-2">Optimización</div>
                <div className="text-slate-600">Basada en análisis técnico individualizado</div>
              </div>

              <div>
                <div className="text-5xl font-black text-corporate mb-2">Atención directa</div>
                <div className="text-slate-600">Sin procesos impersonales ni call centers</div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* POR QUÉ ARCOPLAZA */}
<section className="bg-[#eef2f5] border-y border-[#d7d0c4]">

  <div className="max-w-7xl mx-auto px-6 py-24">

    <div className="text-left mb-16">

      <div className="text-[#1faa59] font-semibold uppercase tracking-wider text-sm mb-4">
        Por qué Arcoplaza
      </div>

      <h2 className="text-4xl lg:text-5xl font-black text-corporate leading-tight mb-6">
        Supervisión energética clara y rigurosa.
      </h2>

      <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
        Analizamos cada suministro de forma individual para detectar
        sobrecostes, mejorar condiciones y plantear optimizaciones reales
        adaptadas a cada cliente.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      {[
        {
          number: '01',
          title: 'Análisis técnico real',
          text: 'No utilizamos comparadores automáticos ni propuestas genéricas.'
        },
        {
          number: '02',
          title: 'Transparencia',
          text: 'Te explicamos exactamente dónde estás pagando de más.'
        },
        {
          number: '03',
          title: 'Gestión integral',
          text: 'Nos encargamos de todo el proceso de optimización.'
        },
        {
          number: '04',
          title: 'Atención directa',
          text: 'Sin call centers ni procesos impersonales.'
        }
      ].map((item) => (

        <div
          key={item.number}
          className="bg-[#fcfbf8] border border-[#d7d0c4] rounded-[32px] p-10 min-h-[320px] flex flex-col hover:border-corporateGreen transition-all duration-300"
        >

          <div className="text-5xl font-black text-[#dfe5ea] mb-10">
            {item.number}
          </div>

          <h3 className="text-2xl font-black text-corporate leading-tight mb-5">
            {item.title}
          </h3>

          <p className="text-slate-600 leading-relaxed text-lg">
            {item.text}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>

<section className="bg-[#f8f8f6] border-y border-[#d7d0c4]">

  <div className="max-w-7xl mx-auto px-6 py-24">

    <div className="max-w-3xl mb-16">

      <div className="text-[#1faa59] font-semibold uppercase tracking-wider text-sm mb-4">
        Casos reales
      </div>

      <h2 className="text-4xl lg:text-5xl font-black text-corporate leading-tight mb-6">
        Optimizaciones reales sobre suministros reales.
      </h2>

    </div>

    <div className="grid lg:grid-cols-3 gap-6">

      {[
        {
          before: '14,9 kW',
          after: '8,05 kW',
          saving: '1.240€',
          type: 'Comunidad'
        },
        {
          before: 'Tarifa antigua',
          after: 'Tarifa optimizada',
          saving: '620€',
          type: 'Vivienda'
        },
        {
          before: 'RL.4 sobredimensionada',
          after: 'Contrato ajustado',
          saving: '3.480€',
          type: 'Empresa'
        }
      ].map((item) => (

        <div className="bg-[#fcfbf8] border border-[#d7d0c4] rounded-[32px] p-10">

          <div className="text-sm uppercase tracking-wider text-slate-500 mb-8">
            {item.type}
          </div>

          <div className="space-y-6">

            <div>
              <div className="text-sm text-slate-500 mb-2">
                Antes
              </div>

              <div className="text-2xl font-black text-slate-400">
                {item.before}
              </div>
            </div>

            <div>
              <div className="text-sm text-slate-500 mb-2">
                Después
              </div>

              <div className="text-2xl font-black text-corporateGreen">
                {item.after}
              </div>
            </div>

            <div className="pt-6 border-t border-[#e5e7eb]">

              <div className="text-sm text-slate-500 mb-2">
                Ahorro anual estimado
              </div>

              <div className="text-4xl font-black text-corporate">
                {item.saving}
              </div>

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>
<Services />
      {/* AHORRO ENERGÉTICO */}
      <section id="ahorro" className="bg-corporateGreen text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="uppercase tracking-wider text-sm font-semibold mb-4 text-green-100">
              Ahorro energético
            </div>

            <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-6">
              Reducir costes empieza por entender tu consumo.
            </h2>

            <p className="text-lg leading-relaxed text-green-50">
              Revisamos potencias, tarifas, hábitos de consumo y condiciones contractuales para encontrar oportunidades reales de ahorro.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-[#fcfbf8]/10 backdrop-blur rounded-3xl p-8 border border-white/10">
              <div className="w-14 h-14 rounded-xl bg-[#fcfbf8]/10 flex items-center justify-center mb-5">   <Zap className="w-6 h-6 text-white" strokeWidth={2.2} /> </div>
              <div className="text-2xl font-bold mb-3">Electricidad</div>
              <p className="text-green-50 leading-relaxed">
                Ajuste de potencia y tarifas adaptadas al uso real.
              </p>
            </div>

            <div className="bg-[#fcfbf8]/10 backdrop-blur rounded-3xl p-8 border border-white/10">
              <div className="w-14 h-14 rounded-xl bg-[#fcfbf8]/10 flex items-center justify-center mb-5">   <Flame className="w-6 h-6 text-white" strokeWidth={2.2} /> </div>
              <div className="text-2xl font-bold mb-3">Gas</div>
              <p className="text-green-50 leading-relaxed">
                Revisión de costes y optimización de suministro.
              </p>
            </div>
          </div>
        </div>
      </section>
      
{/* CONTACTO */}
<section id="contacto" className="bg-[#102542] text-white">
  <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

    <div>
      <div className="text-green-400 uppercase tracking-wider text-sm font-semibold mb-4">
        Contacto directo
      </div>

      <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-6">
        Hablemos.
      </h2>

      <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
        Revisamos la situación de tus suministros sin compromiso y te explicamos de forma clara dónde puedes optimizar costes.
      </p>
    </div>

    <div className="bg-[#fcfbf8] text-corporate rounded-3xl p-10 shadow-lg">

      <div className="text-3xl font-black mb-4">
        Envíanos tu factura
      </div>

      <p className="text-slate-600 leading-relaxed mb-8">
        Analizamos tu suministro y te indicamos posibles mejoras, ajustes y oportunidades de ahorro de forma clara y personalizada.
      </p>

      <a
        href="#formulario"
        className="inline-flex bg-corporateGreen hover:bg-corporateGreen-dark transition-colors text-white px-6 py-4 rounded-xl font-semibold"
      >
        Solicitar revisión gratuita
      </a>

    </div>

  </div>
</section>

      {/* COMPAÑÍAS */}
      <section className="bg-[#fcfbf8] border-t border-[#d7d0c4]">
        <div className="w-full px-0 py-20">
          <div className="max-w-7xl mx-auto mb-12">
            <div className="text-[#1faa59] font-semibold uppercase tracking-wider text-sm mb-4">
              Compañías con las que trabajamos
            </div>

            <h2 className="text-3xl lg:text-4xl font-black text-corporate leading-tight">
              Empresas colaboradoras que hacen posible soluciones adaptadas para cada cliente.
            </h2>

            <p className="text-slate-600 max-w-3xl mt-6 text-lg leading-relaxed">
              Trabajamos junto a múltiples comercializadoras y partners energéticos para ofrecer propuestas personalizadas en luz, gas, autoconsumo, instalaciones fotovoltaicas, baterías y cargadores para vehículo eléctrico.
            </p>
          </div>

          <div className="bg-[#fcfbf8] px-8 md:px-16 py-12">
  <div className="relative overflow-hidden">

  <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#fcfbf8] to-transparent z-10" />

  <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#fcfbf8] to-transparent z-10" />

  <div className="flex logo-slider">

    {[...companies, ...companies].map((company, index) => (

      <div
        key={`${company.name}-${index}`}
        className="flex items-center justify-center min-w-[220px] px-10 py-8"
      >

        <img
          src={company.logo}
          alt={company.name}
          className={`
            ${
              company.name === 'Candela Energía' ||
              company.name === 'Factor Energía' ||
              company.name === 'Energya VM'
                ? 'h-14'
                : company.name === 'Plenitude' ||
                  company.name === 'Repsol'
                ? 'h-16'
                : 'h-10'
            }
            w-auto
            object-contain
            grayscale
            opacity-70
            hover:grayscale-0
            hover:opacity-100
            transition-all
            duration-300
          `}
        />

      </div>

    ))}

  </div>

</div>
</div>
        </div>
     
      </section>
<div className="fixed bottom-3 left-3 right-3 z-50 md:hidden">
  <a
    href="#formulario"
    className="flex items-center justify-center bg-corporateGreen text-white py-3.5 rounded-2xl font-semibold shadow-2xl"
  >
    Solicitar análisis gratuito
  </a>
</div>
      {/* FOOTER */}
      <footer className="border-t border-[#1f4675] bg-corporate">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-4 text-sm text-slate-300">
          <div>© 2026 arcoplaza Asesores</div>
          <div>El trabajo bien hecho habla por sí solo.</div>
        </div>
      </footer>
    </div>
  )
}
