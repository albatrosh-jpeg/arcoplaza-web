import { useState } from 'react'

import {
  Sun,
  Car,
  Battery,
  Zap,
  Flame,
  BarChart3,
  Building2,
  Upload
} from 'lucide-react'

export default function ArcoplazaLanding() {

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [fileName, setFileName] = useState('')

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

const services = [
  {
    title: 'Optimización eléctrica',
    icon: Zap,
    text: 'Revisión técnica de tarifas, potencias y condiciones de suministro.'
  },
  {
    title: 'Gestión energética de gas',
    icon: Flame,
    text: 'Análisis de consumo y optimización contractual para viviendas y negocios.'
  },
  {
    title: 'Autoconsumo fotovoltaico',
    icon: Sun,
    text: 'Estudios personalizados para instalaciones solares y ahorro energético.'
  },
  {
    title: 'Movilidad eléctrica',
    icon: Car,
    text: 'Soluciones de recarga para particulares, empresas y comunidades.'
  },
  {
    title: 'Almacenamiento energético',
    icon: Battery,
    text: 'Sistemas de baterías para optimizar producción y consumo.'
  },
  {
    title: 'Supervisión de contratos',
    icon: BarChart3,
    text: 'Detectamos sobrecostes y desviaciones en tus suministros.'
  },
  {
    title: 'Empresas y comunidades',
    icon: Building2,
    text: 'Soluciones energéticas adaptadas a entornos residenciales y empresariales.'
  },
  {
  title: 'Auditoría energética',
  icon: BarChart3,
  text: 'Estudio detallado de consumos, hábitos y patrones para detectar mejoras reales.'
}
]

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
    <div className="min-h-screen bg-white text-corporate font-sans">
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
  className="relative overflow-hidden border-b border-slate-200"
>
  <div className="absolute inset-0 bg-[#f5f3ee]" />

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
        optimizar contratos y plantear mejoras reales con un enfoque técnico y transparente.
      </p>

      <div className="flex flex-wrap gap-3 mb-10">

        <div className="bg-white/70 backdrop-blur border border-[#d7d0c4] px-4 py-2 rounded-full text-sm font-medium text-corporate">
          ✓ Análisis personalizado
        </div>

        <div className="bg-white/70 backdrop-blur border border-[#d7d0c4] px-4 py-2 rounded-full text-sm font-medium text-corporate">
          ✓ Respuesta en 24h
        </div>

        <div className="bg-white/70 backdrop-blur border border-[#d7d0c4] px-4 py-2 rounded-full text-sm font-medium text-corporate">
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
          className="border border-slate-300 hover:border-slate-500 bg-white/50 backdrop-blur transition-colors px-7 py-4 rounded-xl font-semibold text-center"
        >
          Cómo trabajamos
        </a>

      </div>

    </div>

    {/* FORMULARIO */}
    <div
      id="formulario"
      className="scroll-mt-32 bg-white/95 backdrop-blur-xl rounded-[32px] border border-[#d9dfe6] p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
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

            <div className="bg-[#f8f8f6] border border-[#e7e4dd] hover:border-corporateGreen hover:bg-white transition-colors rounded-2xl p-6 text-center cursor-pointer">

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

    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

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
          className="bg-[#f8f6f1] border border-[#d7d0c4] rounded-[32px] p-10 min-h-[340px] flex flex-col hover:border-corporateGreen transition-all duration-300"
        >

          <div className="w-16 h-16 rounded-full bg-[#eef2f5] border border-[#d7d0c4] flex items-center justify-center text-2xl font-black text-corporateGreen mb-10">
            {item.number}
          </div>

          <h3 className="text-3xl font-black text-corporate leading-tight mb-6">
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
                <div className="text-5xl font-black text-corporate mb-2">Ahorro</div>
                <div className="text-slate-600">Optimización basada en consumo real</div>
              </div>

              <div>
                <div className="text-5xl font-black text-corporate mb-2">Cercanía</div>
                <div className="text-slate-600">Atención directa y acompañamiento continuo</div>
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

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 gap-6">

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
          className="bg-white border border-[#d7d0c4] rounded-[32px] p-10 min-h-[320px] flex flex-col hover:border-corporateGreen transition-all duration-300"
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
      {/* SERVICIOS */}
      <section id="servicios" className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-2xl mb-14">
          <div className="text-[#1faa59] font-semibold mb-4 uppercase tracking-wider text-sm">
            Servicios
          </div>

          <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
            Asesoría energética clara y eficiente.
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed">
            Optimización energética basada en consumo real.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((item) => (
            <div
              key={item.title}
              className="group bg-[#f8f8f6] border border-[#d7d0c4] hover:border-corporateGreen rounded-[30px] p-10 min-h-[280px] transition-all duration-300"            >
              <div className="w-14 h-14 rounded-2xl bg-[#eef2f5] border border-[#d7d0c4] mb-6 shadow-sm duration-300 flex items-center justify-center">
              <item.icon className="w-6 h-6 text-corporate" strokeWidth={2} />
             </div>

              <h3 className="text-2xl font-black text-corporate leading-tight mb-5">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

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
            <div className="bg-white/10 backdrop-blur rounded-3xl p-8 border border-white/10">
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-5">   <Zap className="w-6 h-6 text-white" strokeWidth={2.2} /> </div>
              <div className="text-2xl font-bold mb-3">Electricidad</div>
              <p className="text-green-50 leading-relaxed">
                Ajuste de potencia y tarifas adaptadas al uso real.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-3xl p-8 border border-white/10">
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-5">   <Flame className="w-6 h-6 text-white" strokeWidth={2.2} /> </div>
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

    <div className="bg-white text-corporate rounded-3xl p-10 shadow-lg">

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
      <section className="bg-white border-t border-[#d7d0c4]">
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

          <div className="bg-white px-8 md:px-16 py-12">
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {companies.map((company) => (
              <div
                key={company.name}
                className="group rounded-2xl px-6 py-7 flex items-center justify-center hover:bg-black/[0.02] transition-all duration-300"              >
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
    group-hover:grayscale-0
    group-hover:opacity-100
    transition-all
    duration-300
  `}
/>
              </div>
            ))}
          </div>
        </div>
      </div>  
      </section>

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
