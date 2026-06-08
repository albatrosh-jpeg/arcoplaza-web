import { Helmet } from 'react-helmet-async'

import Navbar from '../components/sections/Navbar'
import Footer from '../components/sections/Footer'
import Cases from '../components/sections/Cases'

import AnalysisHero from './AnalysisHero'
import AnalysisProblem from './AnalysisProblem'
import AnalysisProcess from './AnalysisProcess'
import AnalysisCTA from './AnalysisCTA'

export default function AnalysisPage() {

  return (

    <>
      <Helmet>

        <title>
          Análisis de factura eléctrica | Arcoplaza Asesores
        </title>

        <meta
          name="description"
          content="Analizamos contratos, tarifas y facturas para detectar sobrecostes, cláusulas desfavorables y oportunidades reales de optimización energética."
        />

      </Helmet>

      <Navbar />

      <main>

        <AnalysisHero />

        <AnalysisProblem />

        <AnalysisProcess />

        <Cases />

        <AnalysisCTA />

      </main>

      <Footer />

    </>

  )

}