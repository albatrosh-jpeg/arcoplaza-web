
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
    <div className="min-h-screen bg-[#e8e4dc] text-slate-900 font-sans">
      {/* NAVBAR */}
    <header className="sticky top-0 z-50 backdrop-blur bg-[#e8e4dc]/95 border-b border-slate-300 shadow-sm">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

    <div className="flex items-center">
      <img
        src="/logo-arcoplaza.png"
        alt="Arcoplaza Asesores"
        className="h-14 w-auto object-contain"
      />
    </div>

    <nav className="hidden lg:flex items-center gap-10 text-[17px] font-semibold text-slate-700">
      <a href="#inicio" className="hover:text-green-600 transition-colors">Inicio</a>
      <a href="#quienes" className="hover:text-green-600 transition-colors">Quiénes somos</a>
      <a href="#servicios" className="hover:text-green-600 transition-colors">Servicios</a>
      <a href="#ahorro" className="hover:text-green-600 transition-colors">Ahorro energético</a>
      <a href="#opiniones" className="hover:text-green-600 transition-colors">Opiniones</a>
      <a href="#contacto" className="hover:text-green-600 transition-colors">Contacto</a>
    </nav>

    <a
      href="https://wa.me/34669633694"
      className="bg-green-600 hover:bg-green-700 transition-colors text-white px-5 py-3 rounded-2xl text-sm font-semibold"
    >
      WhatsApp directo
    </a>

  </div>
</header>
{/* HERO */}
<section
  id="inicio"
  className="relative overflow-hidden border-b border-slate-200"
>
  <div className="absolute top-[-200px] right-[-120px] w-[500px] h-[500px] bg-green-400/20 blur-3xl rounded-full" />

  <div className="absolute inset-0 bg-gradient-to-br from-[#e8e4dc] via-[#f3f0ea] to-[#dde6d8]" />

  <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Asesoría energética profesional
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight mb-6">
              Paga lo justo.
              <span className="block text-[#1faa59]">Sin letra pequeña.</span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-xl mb-10">
              En Arcoplaza Asesores optimizamos contratos de luz y gas para hogares,
              negocios y comunidades. Transparencia, análisis real y atención cercana.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/34669633694"
                className="bg-green-600 hover:bg-green-700 transition-colors text-white px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-green-200"
              >
                Hablar por WhatsApp
              </a>

              <a
                href="#servicios"
                className="border border-slate-300 hover:border-slate-500 transition-colors px-8 py-4 rounded-2xl font-semibold"
              >
                Ver servicios
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <div className="text-3xl font-black text-slate-900">+500</div>
                <div className="text-slate-500 text-sm">Clientes asesorados</div>
              </div>

              <div>
                <div className="text-3xl font-black text-slate-900">24h</div>
                <div className="text-slate-500 text-sm">Respuesta habitual</div>
              </div>

              <div>
                <div className="text-3xl font-black text-slate-900">100%</div>
                <div className="text-slate-500 text-sm">Atención personalizada</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-[#f8f6f1] rounded-[2rem] shadow-2xl border border-[#d8d2c8] p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-4 h-4 rounded-full bg-green-500" />
                <div className="w-4 h-4 rounded-full bg-slate-300" />
                <div className="w-4 h-4 rounded-full bg-slate-300" />
              </div>

              <div className="space-y-6">
                <div className="bg-[#ece7de] rounded-2xl p-6 border border-[#d7d0c4]">
                  <div className="text-sm text-slate-500 mb-2">Optimización energética</div>
                  <div className="text-2xl font-bold">Ahorro inteligente</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#ddebd7] rounded-2xl p-5 border border-[#bfd8b4]">
                    <div className="text-sm text-green-700 mb-2">Luz</div>
                    <div className="text-xl font-bold">Tarifas</div>
                  </div>

                  <div className="bg-[#ece7de] rounded-2xl p-5 border border-[#d7d0c4]">
                    <div className="text-sm text-slate-500 mb-2">Gas</div>
                    <div className="text-xl font-bold">Revisión</div>
                  </div>
                </div>

                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white p-7 border border-slate-700 shadow-2xl">

  <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/10 blur-3xl rounded-full" />

  <div className="relative z-10">

    <div className="bg-white rounded-2xl inline-flex items-center px-5 py-4 mb-6 shadow-xl">
      <img
        src="/logo-arcoplaza.png"
        alt="Arcoplaza"
        className="h-8 w-auto object-contain"
      />
    </div>

    <div className="space-y-4">

      <div>
        <div className="text-sm uppercase tracking-[0.2em] text-green-300 mb-2">
          Consultoría energética
        </div>

        <div className="text-3xl font-black leading-tight">
          El trabajo bien hecho habla por sí solo.
        </div>
      </div>

      <div className="flex items-center gap-6 pt-3">

        <div>
          <div className="text-2xl font-black text-green-400">+500</div>
          <div className="text-xs text-slate-300">
            Clientes asesorados
          </div>
        </div>

        <div>
          <div className="text-2xl font-black text-green-400">24h</div>
          <div className="text-xs text-slate-300">
            Respuesta habitual
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section id="quienes" className="bg-[#f3f0ea] border-y border-[#d7d0c4]">
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

          <div className="bg-[#f8f6f1] rounded-[2rem] border border-[#d7d0c4] p-10 shadow-xl">
            <div className="space-y-8">
              <div>
                <div className="text-5xl font-black text-[#1faa59] mb-2">+500</div>
                <div className="text-slate-600">Clientes asesorados</div>
              </div>

              <div>
                <div className="text-5xl font-black text-slate-900 mb-2">Ahorro</div>
                <div className="text-slate-600">Optimización basada en consumo real</div>
              </div>

              <div>
                <div className="text-5xl font-black text-slate-900 mb-2">Cercanía</div>
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
            Analizamos tu situación actual y buscamos la solución más rentable según tu consumo real.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item) => (
            <div
              key={item.title}
              className="group bg-[#f8f6f1] border border-[#d7d0c4] hover:border-green-400 transition-all rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#dcefd4] to-white border border-[#bfd8b4] mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
              <item.icon className="w-7 h-7 text-green-700" strokeWidth={2.2} />
             </div>

              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AHORRO ENERGÉTICO */}
      <section id="ahorro" className="bg-green-600 text-white">
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
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-5">   <Zap className="w-7 h-7 text-white" strokeWidth={2.2} /> </div>
              <div className="text-2xl font-bold mb-3">Electricidad</div>
              <p className="text-green-50 leading-relaxed">
                Ajuste de potencia y tarifas adaptadas al uso real.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-3xl p-8 border border-white/10">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-5">   <Flame className="w-7 h-7 text-white" strokeWidth={2.2} /> </div>
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
              className="bg-[#f8f6f1] border border-[#d7d0c4] rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-green-300 transition-all duration-300 group"
            >
              <div className="text-5xl text-[#1faa59] mb-4">“</div>
              <p className="text-slate-600 leading-relaxed mb-6">
                {review.text}
              </p>
              <div className="font-bold text-slate-900">
                {review.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="bg-slate-950 text-white">
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

          <div className="bg-white text-slate-900 rounded-[2rem] p-10 shadow-2xl">
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
                  className="inline-flex bg-green-600 hover:bg-green-700 transition-colors text-white px-8 py-4 rounded-2xl font-semibold"
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

            <h2 className="text-3xl lg:text-4xl font-black leading-tight">
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
                className="group bg-[#f8f6f1] border border-[#d7d0c4] rounded-2xl px-6 py-5 flex items-center justify-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"              >
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
      <footer className="border-t border-[#d7d0c4] bg-[#f3f0ea]">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-4 text-sm text-slate-500">
          <div>© 2026 Arcoplaza Asesores</div>
          <div>El trabajo bien hecho habla por sí solo.</div>
        </div>
      </footer>
    </div>
  )
}
