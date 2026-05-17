import SectionTitle from '../ui/SectionTitle'
import Section from '../ui/Section'
export default function About() {

  return (

<Section
  id="quienes"
  className="bg-[#f8f8f6] border-y border-[#d7d0c4]"
  containerClassName="grid lg:grid-cols-2 gap-16 items-center"
>
        <div>

          <SectionTitle
            eyebrow="Quiénes somos"
            title="Asesoría energética con enfoque humano y técnico."
            text="En Arcoplaza Asesores ayudamos a particulares, negocios y comunidades a optimizar sus suministros energéticos de manera transparente y eficiente."
          />

          <p className="text-slate-600 text-lg leading-relaxed">
            Analizamos cada caso de forma personalizada para detectar mejoras reales, evitar sobrecostes y ofrecer soluciones adaptadas al consumo de cada cliente.
          </p>

        </div>

        <div className="bg-[#f8f6f1] rounded-3xl border border-[#d7d0c4] p-10 shadow-lg">

          <div className="space-y-8">

            <div>

              <div className="text-5xl font-black text-[#1faa59] mb-2">
                +500
              </div>

              <div className="text-slate-600">
                Clientes asesorados
              </div>

            </div>

            <div>

              <div className="text-5xl font-black text-corporate mb-2">
                Optimización
              </div>

              <div className="text-slate-600">
                Basada en análisis técnico individualizado
              </div>

            </div>

            <div>

              <div className="text-5xl font-black text-corporate mb-2">
                Atención directa
              </div>

              <div className="text-slate-600">
                Sin procesos impersonales ni call centers
              </div>

            </div>

          </div>

        </div>

    </Section>

  )

}