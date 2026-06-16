import Navbar from '../components/sections/Navbar'
import Footer from '../components/sections/Footer'
import Cases from '../components/sections/Cases'
import Seo from '../components/seo/Seo'

import AnalysisHero from './AnalysisHero'
import PowerOptimizationProcess from './PowerOptimizationProcess'
import PowerOptimizationCTA from './PowerOptimizationCTA'

import SectionTitle from '../components/ui/SectionTitle'
import PowerOptimizationBenefits from './PowerOptimizationBenefits'

import PowerOptimizationSignals from './PowerOptimizationSignals'
import PowerOptimizationResults from './PowerOptimizationResults'

const reviewItems = [
  {
    title: 'Potencia máxima demandada',
    text: 'Comparamos la potencia contratada con la potencia realmente utilizada por el suministro.'
  },
  {
    title: 'Histórico de maxímetros',
    text: 'Analizamos los registros de demanda para detectar excesos o márgenes innecesarios.'
  },
  {
    title: 'Margen de seguridad operativo',
    text: 'Valoramos si existe margen de reducción sin comprometer el funcionamiento de la instalación.'
  },
  {
    title: 'Viabilidad de optimización',
    text: 'Determinamos si la potencia actual puede ajustarse y qué impacto tendría sobre los costes fijos.'
  }
]

export default function PowerOptimizationPage() {

  return (

    <>
      <Seo
        title="Optimización de potencia contratada | Arcoplaza Asesores"
        description="Analizamos la potencia contratada de empresas y comunidades para revisar costes fijos y optimizar el suministro eléctrico."
        path="/soluciones/optimizacion-potencia-contratada"
      />

      <Navbar />

      <main>

        <AnalysisHero
          eyebrow="OPTIMIZACIÓN DE POTENCIA"
          title="¿Estás pagando por una potencia que realmente no necesitas?"
          text="Analizamos la potencia contratada de tu suministro para detectar posibles excesos, reducir costes fijos y mantener la seguridad operativa."
          image="/servicios.gif"
          imageAlt="Optimización de potencia contratada"
        />

        <section className="py-20 lg:py-32">

          <div className="container-content">

            <SectionTitle
              eyebrow="COSTE FIJO"
              title="Un exceso de potencia genera sobrecostes todos los meses"
              text="La potencia contratada es uno de los costes más estables de una factura eléctrica. Cuando está sobredimensionada, el sobrecoste se repite mes tras mes independientemente del consumo."
            />

          </div>

        </section>

        <section
            className="py-24 lg:py-32
            bg-surface-primary
          "
        >

          <div className="container-content">

            <SectionTitle
              eyebrow="QUÉ ANALIZAMOS"
              title="Revisamos si tu potencia contratada sigue teniendo sentido"
              text="El objetivo no es reducir por reducir. El objetivo es ajustar la potencia a la realidad del suministro sin generar riesgos operativos."
            />

            <div
              className="
                grid
                md:grid-cols-2
                gap-6
                mt-14
              "
            >

              {reviewItems.map((item) => (

                <div
                  key={item.title}
                  className="
                    card-top-accent
                    border
                    border-border-soft
                    rounded-[28px]
                    p-8
                    bg-white
                  "
                >

                  <h3
                    className="
                      heading-h3
                      text-corporate
                      mb-4
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      text-text-secondary
                      leading-relaxed
                    "
                  >
                    {item.text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>


        <PowerOptimizationBenefits />

        <PowerOptimizationSignals />

        <PowerOptimizationProcess />

        <Cases />

        <PowerOptimizationResults />

        <PowerOptimizationCTA />

      </main>

      <Footer />

    </>

  )

}
