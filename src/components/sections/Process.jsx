export default function Process() {

  const steps = [
    {
      number: '01',
      title: 'Envío de factura',
      text: 'Revisamos consumos, tarifas y condiciones contractuales.'
    },
    {
      number: '02',
      title: 'Revisión técnica',
      text: 'Detectamos sobrecostes y oportunidades reales de ahorro.'
    },
    {
      number: '03',
      title: 'Propuesta clara',
      text: 'Te explicamos las mejoras de forma sencilla y transparente.'
    },
    {
      number: '04',
      title: 'Empieza el ahorro',
      text: 'Gestionamos los cambios y realizamos seguimiento continuo.'
    }
  ]

  return (
    <section
      id="proceso"
      className="bg-[#f3f0ea] border-b border-[#d7d0c4]"
    >

      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-left mb-16">

          <div className="text-[#1faa59] font-semibold uppercase tracking-wider text-sm mb-4">
            Cómo trabajamos
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-corporate leading-tight mb-6">
            Proceso claro y acompañado.
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed">
            Analizamos tu suministro, detectamos oportunidades de optimización
            <br />
            y gestionamos todo el proceso de forma transparente y personalizada.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

          {steps.map((item) => (

            <div
              key={item.number}
              className="bg-[#f8f6f1] border border-[#d7d0c4] rounded-[32px] p-8 min-h-[300px] flex flex-col hover:border-corporateGreen transition-all duration-300"
            >

              <div className="w-16 h-16 rounded-full bg-[#eef2f5] border border-[#d7d0c4] flex items-center justify-center text-2xl font-black text-corporateGreen mb-10">
                {item.number}
              </div>

              <h3 className="text-2xl font-black text-corporate leading-tight mb-6">
                {item.title}
              </h3>

              <p className="text-slate-600 leading-relaxed text-lg">
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}