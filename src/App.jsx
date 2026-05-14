
import {
  Sun,
  Car,
  Battery,
  Zap,
  Flame,
  BarChart3,
  Building2
} from 'lucide-react'
export default function ArcoplazaLanding() {
   const services = [
  {
    title: 'Autoconsumo solar',
    icon: Sun,
    text: 'Estudios personalizados para instalaciones fotovoltaicas y ahorro energético.'
  },
  {
    title: 'Cargadores VE',
    icon: Car,
    text: 'Instalación y asesoramiento de puntos de carga para vehículos eléctricos.'
  },
  {
    title: 'Baterías energéticas',
    icon: Battery,
    text: 'Soluciones de almacenamiento para optimizar producción y consumo.'
  },
  {
    title: 'Luz',
    icon: Zap,
    text: 'Revisión de tarifas eléctricas, potencias contratadas y optimización de costes.'
  },
  {
    title: 'Gas',
    icon: Flame,
    text: 'Análisis de consumo y mejora de contratos para viviendas y negocios.'
  },
  {
    title: 'Optimización de contratos',
    icon: BarChart3,
    text: 'Detectamos sobrecostes y ajustamos tu suministro a tu consumo real.'
  },
  {
    title: 'Empresas y Comunidades de Propietarios',
    icon: Building2,
    text: 'Soluciones energéticas adaptadas a empresas, locales y comunidades de vecinos.'
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
    logo: '/logos/candela.webp'
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
    <div className="min-h-screen bg-[#e8e4dc] text-corporate font-sans">
      {/* NAVBAR */}
    <header className="sticky top-0 z-50 backdrop-blur bg-[#e8e4dc]/95 border-b border-slate-300 shadow-sm">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">

    <div className="flex items-center">
      <img
        src="/logo-arcoplaza.png"
        alt="Arcoplaza Asesores"
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

  <a href="#contacto" className="hover:text-green-600 transition-colors">
    Contacto
  </a>
</nav>
    <a
      href="https://wa.me/34669633694"
      className="bg-corporateGreen hover:bg-corporateGreen-dark transition-colors text-white px-5 py-3 rounded-xl text-sm font-semibold"
    >
      Consulta gratuita
    </a>

  </div>
</header>
<section className="bg-[#f3f0ea] border-b border-[#d7d0c4]">

  <div className="max-w-7xl mx-auto px-6 py-5">

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">

      {[
        'Sube tu factura',
        'Análisis gratuito',
        'Propuesta clara',
        'Gestión completa'
      ].map((step, index) => (

        <div
          key={step}
          className="bg-[#f8f8f6] border border-[#e7e4dd] rounded-2xl px-5 py-4"
        >

          <div className="text-corporateGreen text-2xl font-black mb-1">
            0{index + 1}
          </div>

          <div className="text-sm font-semibold text-corporate leading-snug">
            {step}
          </div>

        </div>

      ))}

    </div>

  </div>

</section>
{/* HERO */}
<section
  id="inicio"
  className="relative overflow-hidden border-b border-slate-200"
>
  <div className="absolute inset-0 bg-[#f5f3ee]" />

  <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <div className="inline-flex items-center gap-2 bg-corporateGreen-light text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Asesoría energética profesional
            </div>

<h1 className="text-4xl lg:text-5xl font-black text-corporate leading-[0.95] mb-6">
  Analizamos tu factura <br />
  y detectamos dónde <br />
  estás pagando de más.
</h1>
              
            <p className="text-xl text-slate-500 leading-relaxed max-w-xl mb-10">
              En Arcoplaza Asesores optimizamos contratos de luz y gas para hogares,
              negocios y comunidades. Transparencia, análisis real y atención cercana.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/34669633694"
                className="bg-corporateGreen hover:bg-corporateGreen-dark transition-colors text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-green-200"
              >
                Hablar por WhatsApp
              </a>

              <a
                href="#servicios"
                className="border border-slate-300 hover:border-slate-500 transition-colors px-6 py-3 rounded-xl font-semibold"
              >
                Ver servicios
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <div className="text-3xl font-black text-corporate">+500</div>
                <div className="text-slate-500 text-sm">Clientes asesorados</div>
              </div>

              <div>
                <div className="text-3xl font-black text-corporate">24h</div>
                <div className="text-slate-500 text-sm">Respuesta habitual</div>
              </div>

              <div>
                <div className="text-3xl font-black text-corporate">100%</div>
                <div className="text-slate-500 text-sm">Atención personalizada</div>
              </div>
            </div>
             </div>

          <div className="bg-[#fafaf8] rounded-3xl border border-[#e7e4dd] p-8 lg:p-10 shadow-lg">

  <div className="mb-8">
    <div className="text-3xl font-black text-corporate mb-3">
      ¿Revisamos tu factura?
    </div>

    <p className="text-slate-500 leading-relaxed">
      Te indicamos si estás pagando de más y qué opciones tienes para optimizar tu suministro.
    </p>
  </div>

  <form
  action="/api/contact"
  method="POST"
  encType="multipart/form-data"
  className="space-y-5"
>

    <div>
      <label className="block text-sm font-medium mb-2 text-slate-700">
        Nombre
      </label>

      <input
  name="telefono"
  type="text"
        placeholder="Escribe tu nombre"
        className="w-full bg-[#f8f8f6] border border-[#d7d0c4] rounded-xl px-4 py-4 outline-none focus:border-green-500 transition-colors"
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
        className="w-full bg-[#f8f8f6] border border-[#d7d0c4] rounded-xl px-4 py-4 outline-none focus:border-green-500 transition-colors"
      />
    </div>

    <div>
      <label className="block text-sm font-medium mb-2 text-slate-700">
        Email
      </label>

      <input
  name="email"
  type="email"
        placeholder="correo@ejemplo.com"
        className="w-full bg-[#f8f8f6] border border-[#d7d0c4] rounded-xl px-4 py-4 outline-none focus:border-green-500 transition-colors"
      />
    </div>
<div>
  <label className="block text-sm font-medium mb-2 text-slate-700">
    Factura de luz o gas
  </label>

  <div className="relative">
    <input
      type="file"
      accept=".pdf,.jpg,.jpeg,.png"
      className="
        w-full
        bg-[#f8f8f6]
        border
        border-[#d7d0c4]
        rounded-xl
        px-4
        py-4
        text-slate-500
        file:mr-4
        file:px-4
        file:py-2
        file:border-0
        file:rounded-lg
        file:bg-corporateGreen
        file:text-white
        file:font-medium
        hover:file:bg-green-700
      "
    />
  </div>

  <p className="text-xs text-slate-400 mt-2">
    PDF, JPG o PNG
  </p>
</div>
    <div>
      <label className="block text-sm font-medium mb-2 text-slate-700">
        Comentario
      </label>

      <textarea
  name="comentario"
        rows="4"
        placeholder="Cuéntanos brevemente tu caso"
        className="w-full bg-[#f8f8f6] border border-[#d7d0c4] rounded-xl px-4 py-4 outline-none focus:border-green-500 transition-colors resize-none"
      />
    </div>

    <button
      type="submit"
      className="w-full bg-corporateGreen hover:bg-corporateGreen-dark transition-colors text-white py-4 rounded-xl font-semibold"
    >
      Solicitar revisión gratuita
    </button>
  </form>

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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item) => (
            <div
              key={item.title}
              className="group bg-[#f8f6f1] border border-[#d7d0c4] hover:border-green-400 transition-all rounded-3xl p-8 shadow-sm hover:shadow-md   duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#dcefd4] to-white border border-[#bfd8b4] mb-6 shadow-sm transition-transform duration-300 flex items-center justify-center">
              <item.icon className="w-7 h-7 text-green-700" strokeWidth={2.2} />
             </div>

              <h3 className="text-xl font-bold text-corporate mb-4">{item.title}</h3>
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
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-5">   <Zap className="w-7 h-7 text-white" strokeWidth={2.2} /> </div>
              <div className="text-2xl font-bold mb-3">Electricidad</div>
              <p className="text-green-50 leading-relaxed">
                Ajuste de potencia y tarifas adaptadas al uso real.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-3xl p-8 border border-white/10">
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-5">   <Flame className="w-7 h-7 text-white" strokeWidth={2.2} /> </div>
              <div className="text-2xl font-bold mb-3">Gas</div>
              <p className="text-green-50 leading-relaxed">
                Revisión de costes y optimización de suministro.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* OPINIONES */}
      <section id="opiniones" className="max-w-7xl mx-auto px-6 py-24 bg-[#e8e4dc]">
        <div className="max-w-2xl mb-14">
          <div className="text-[#1faa59] font-semibold uppercase tracking-wider text-sm mb-4">
            Opiniones reales
          </div>

          <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-6">
            Clientes que ya optimizaron sus suministros.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-[#f8f6f1] border border-[#d7d0c4] rounded-3xl p-8 shadow-sm hover:shadow-md hover:border-green-300 transition-all duration-300 group"
            >
              <div className="text-5xl text-[#1faa59] mb-4">“</div>
              <p className="text-slate-600 leading-relaxed mb-6">
                {review.text}
              </p>
              <div className="font-bold text-corporate">
                {review.name}
              </div>
            </div>
          ))}
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
              Hablemos de tu factura.
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
              Revisamos tu situación sin compromiso y te explicamos de forma clara dónde puedes optimizar costes.
            </p>
          </div>

          <div className="bg-white text-corporate rounded-3xl p-10 shadow-lg">
            <div className="space-y-8">
              <div>
                <div className="text-sm text-slate-500 mb-1">Álvaro del Arco</div>
                <div className="text-3xl font-black">669 633 694</div>
              </div>

              <div>
                <div className="text-sm text-slate-500 mb-1">Enrique Plaza</div>
                <div className="text-3xl font-black">692 641 439</div>
              </div>

              <div className="pt-4">
                <a
                  href="mailto:info@arcoplazaasesores.es"
                  className="inline-flex bg-corporateGreen hover:bg-corporateGreen-dark transition-colors text-white px-6 py-3 rounded-xl font-semibold"
                >
                  Solicitar asesoramiento
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPAÑÍAS */}
      <section className="bg-[#ece7de] border-t border-[#d7d0c4]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <div className="text-[#1faa59] font-semibold uppercase tracking-wider text-sm mb-4">
              Compañías con las que trabajamos
            </div>

            <h2 className="text-3xl lg:text-4xl font-black text-corporate leading-tight">
              Empresas colaboradoras que hacen posible soluciones adaptadas para cada cliente.
            </h2>

            <p className="text-slate-600 max-w-3xl mx-auto mt-6 text-lg leading-relaxed">
              Trabajamos junto a múltiples comercializadoras y partners energéticos para ofrecer propuestas personalizadas en luz, gas, autoconsumo, instalaciones fotovoltaicas, baterías y cargadores para vehículo eléctrico.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {companies.map((company) => (
              <a
                key={company.name}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#f8f6f1] border border-[#d7d0c4] rounded-xl px-6 py-5 flex items-center justify-center text-center hover:shadow-md transition-all duration-300 duration-300"              >
                <img
  src={company.logo}
  alt={company.name}
  className="
    h-10
    w-auto
    object-contain
    grayscale
    opacity-70
    group-hover:grayscale-0
    group-hover:opacity-100
    transition-all
    duration-300
  "
/>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#d7d0c4] bg-[#f8f8f6]">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-4 text-sm text-slate-500">
          <div>© 2026 Arcoplaza Asesores</div>
          <div>El trabajo bien hecho habla por sí solo.</div>
        </div>
      </footer>
    </div>
  )
}
