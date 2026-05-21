import { lazy, Suspense } from 'react'

import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import Calculator from './components/sections/Calculator'
import Process from './components/sections/Process'
import WhyArcoplaza from './components/sections/WhyArcoplaza'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

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
  resultado
} = useSavingsCalculator()

return (

    <div className="min-h-screen bg-surface-secondary text-corporate font-sans pt-[74px]">

      <Navbar />

      <Hero />

      <WhyArcoplaza />


      <Calculator
        tipo={tipo}
        setTipo={setTipo}
        gasto={gasto}
        setGasto={setGasto}
        potencia={potencia}
        setPotencia={setPotencia}
        resultado={resultado}
      />

      <Process />

      <Suspense fallback={null}>
        <Cases />
      </Suspense>

      <Suspense fallback={null}>
        <Partners companies={companies} />
      </Suspense>
      
      {/* <Services /> */}

      <Contact />

      <Footer />

    </div>

  )

}