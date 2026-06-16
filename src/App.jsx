import { lazy, Suspense } from 'react'

import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import MarketTeaser from './components/sections/MarketTeaser'
import Calculator from './components/sections/Calculator'
import Process from './components/sections/Process'
import WhyArcoplaza from './components/sections/WhyArcoplaza'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'
import Seo from './components/seo/Seo'

import companies from './data/companies'

import useSavingsCalculator from './hooks/useSavingsCalculator'

const Cases = lazy(() => import('./components/sections/Cases'))
const Partners = lazy(() => import('./components/sections/Partners'))

export default function ArcoplazaLanding() {

const {
  tipo,
  setTipo,
  gasto,
  setGasto,
  potencia,
  setPotencia,
  resultado,
  marketData,
  marketLoading
} = useSavingsCalculator()

return (

    <div className="min-h-screen bg-surface-secondary text-corporate font-sans pt-[74px]">

      <Seo
        title="Arcoplaza Asesores · Optimización energética para empresas y comunidades"
        description="Supervisión energética clara y rigurosa. Analizamos suministros eléctricos y de gas para optimizar contratos en empresas y comunidades."
        path="/"
      />

      <Navbar />

      <main>

      <Hero />

      <MarketTeaser />

      <WhyArcoplaza />


      <Calculator
        tipo={tipo}
        setTipo={setTipo}
        gasto={gasto}
        setGasto={setGasto}
        potencia={potencia}
        setPotencia={setPotencia}
        resultado={resultado}
        marketData={marketData}
        marketLoading={marketLoading}
      />

      <Process />

      <Suspense fallback={null}>
        <Cases />
      </Suspense>

      <Suspense fallback={null}>
        <Partners companies={companies} />
      </Suspense>
      
      <Contact />

      </main>

      <Footer />

    </div>

  )

}
