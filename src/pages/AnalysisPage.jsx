import Navbar from '../components/sections/Navbar'
import Footer from '../components/sections/Footer'
import Cases from '../components/sections/Cases'
import Seo from '../components/seo/Seo'

import AnalysisHero from './AnalysisHero'
import AnalysisScope from './AnalysisScope'
import AnalysisProblem from './AnalysisProblem'
import AnalysisProcess from './AnalysisProcess'
import AnalysisBeforeAfter from './AnalysisBeforeAfter'
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

        <AnalysisScope />

        <AnalysisProblem />

        <LandingVisualCards />

        <AnalysisProcess />

        <AnalysisBeforeAfter />

        <Cases />

        <AnalysisCTA />

      </main>

      <Footer />

    </>

  )

}
