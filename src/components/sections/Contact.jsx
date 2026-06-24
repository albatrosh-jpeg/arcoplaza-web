
import CTASection from '../ui/CTASection'
import Section from '../ui/Section'

export default function Contact() {

return (

  <Section>

    <CTASection
      title={<span className="text-white">¿Revisamos tu suministro?</span>}
      text="Analizamos tu factura y detectamos posibles oportunidades de optimización en luz, gas o autoconsumo."
      buttonText="Solicitar análisis gratuito"
      buttonClassName="
        border-corporateGreen
        bg-corporateGreen
        text-white
        shadow-[0_16px_34px_rgba(54,126,69,0.28)]
        hover:border-[#43B886]
        hover:bg-[#43B886]
      "
      className="
        bg-corporate-gradient
        text-white
      "
    />

  </Section>

)}
