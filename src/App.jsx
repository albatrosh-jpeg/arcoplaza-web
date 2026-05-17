
import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import Calculator from './components/sections/Calculator'
import Process from './components/sections/Process'
import About from './components/sections/About'
import WhyArcoplaza from './components/sections/WhyArcoplaza'
import Cases from './components/sections/Cases'
import Services from './components/sections/Services'
import Savings from './components/sections/Savings'
import Contact from './components/sections/Contact'
import Partners from './components/sections/Partners'
import Footer from './components/sections/Footer'

import MobileCTA from './components/layout/MobileCTA'

import companies from './data/companies'

import useSavingsCalculator from './hooks/useSavingsCalculator'

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

    <div className="min-h-screen bg-[#fcfbf8] text-corporate font-sans">

      <Navbar />

      <Hero />

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

      <About />

      <WhyArcoplaza />

      <Cases />

      <Services />

      <Savings />

      <Contact />

      <Partners companies={companies} />

      <MobileCTA />

      <Footer />

    </div>

  )

}