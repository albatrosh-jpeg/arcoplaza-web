import Container from '../ui/Container'

export default function Hero() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="text-blue-600 font-semibold mb-4">
            Optimización energética
          </p>

          <h1 className="text-5xl font-bold leading-tight text-gray-900 mb-6">
            Analizamos tu factura y detectamos dónde estás pagando de más.
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Estudios energéticos personalizados para hogares y empresas.
            Optimización real, sin complicaciones.
          </p>

          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition">
              Enviar factura
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition">
              Ver servicios
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}