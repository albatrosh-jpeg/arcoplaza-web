import savingsCards from '../../data/savingsCards'
import Card from '../ui/Card'
import SectionTitle from '../ui/SectionTitle'
import AnimatedReveal from '../ui/AnimatedReveal'

export default function Savings() {
  return (

    <section
      id="ahorro"
      className="bg-corporateGreen text-white"
    >

      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

<div>
  <AnimatedReveal>
  <SectionTitle
    eyebrow="Ahorro energético"
    title="Reducir costes empieza por entender tu consumo."
    text="Revisamos potencias, tarifas, hábitos de consumo y condiciones contractuales para encontrar oportunidades reales de ahorro."
    textColor="text-green-50"
  />
  </AnimatedReveal>
</div>
        <div className="grid sm:grid-cols-2 gap-6">

          {savingsCards.map((item) => (

            <Card
              key={item.title}
              className="bg-[#fcfbf8]/10 backdrop-blur border-white/10 p-8"
            >

              <div className="w-14 h-14 rounded-xl bg-[#fcfbf8]/10 flex items-center justify-center mb-5">

                <item.icon
                  className="w-6 h-6 text-white"
                  strokeWidth={2.2}
                />

              </div>

              <div className="text-2xl font-bold mb-3">
                {item.title}
              </div>

              <p className="text-green-50 leading-relaxed">
                {item.text}
              </p>

            </Card>

          ))}

        </div>

      </div>

    </section>

  )

}