import Navbar from '../components/sections/Navbar'
import Footer from '../components/sections/Footer'
import Cases from '../components/sections/Cases'
import Seo from '../components/seo/Seo'

import AnalysisHero from './AnalysisHero'
import AnalysisProblem from './AnalysisProblem'
import AnalysisProcess from './AnalysisProcess'
import AnalysisCTA from './AnalysisCTA'
import LandingVisualCards from './LandingVisualCards'

export default function AnalysisPage() {

  return (

    <>
      <Seo
        title="Análisis de factura eléctrica | Arcoplaza Asesores"
        description="Analizamos contratos, tarifas y facturas para detectar oportunidades reales de optimización energética en empresas y comunidades."
        path="/analisis-factura-electrica"
      />

      <Navbar />

      <main>

        <AnalysisHero />

        <AnalysisProblem />

        <LandingVisualCards />

        <AnalysisProcess />

        <Cases />

        <AnalysisCTA />

      </main>

      <Footer />

    </>

  )

}
