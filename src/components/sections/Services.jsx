import {
  Zap,
  Flame,
  Sun,
  Car,
  Battery,
  BarChart3,
  Building2
} from 'lucide-react'

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
    title: 'Empresas y comunidades',
    icon: Building2,
    text: 'Soluciones energéticas adaptadas a entornos residenciales y empresariales.'
  },
  {
    title: 'Auditoría y optimización',
    icon: BarChart3,
    text: 'Analizamos contratos, consumos y condiciones para detectar mejoras reales.'
  }
]

export default function Services() {

  return (

    <section
      id="servicios"
      className="max-w-7xl mx-auto px-6 py-24"
    >

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
            className="group bg-[#f8f8f6] border border-[#d7d0c4] hover:border-corporateGreen rounded-[30px] p-10 min-h-[280px] transition-all duration-300"
          >

            <div className="w-14 h-14 rounded-2xl bg-[#eef2f5] border border-[#d7d0c4] mb-6 shadow-sm flex items-center justify-center">

              <item.icon
                className="w-6 h-6 text-corporate"
                strokeWidth={2}
              />

            </div>

            <h3 className="text-2xl font-black text-corporate leading-tight mb-5">
              {item.title}
            </h3>

            <p className="text-slate-600 leading-relaxed">
              {item.text}
            </p>

          </div>

        ))}

      </div>

    </section>

  )
}