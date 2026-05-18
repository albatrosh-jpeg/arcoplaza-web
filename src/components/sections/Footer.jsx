export default function Footer() {

  return (

    <footer
      className="
        bg-corporate

        border-t
        border-[#28496F]
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto

          px-4
          lg:px-6

          py-14
          lg:py-16
        "
      >

        <div
          className="
            grid

            gap-12

            lg:grid-cols-[1.2fr_0.8fr_0.8fr]
          "
        >

          <div className="max-w-md">

            <div
              className="
                text-white

                text-[22px]
                font-semibold

                tracking-tight

                mb-5
              "
            >
              Arcoplaza Asesores
            </div>

            <p
              className="
                text-slate-300

                leading-relaxed
              "
            >
              Supervisión energética para empresas y comunidades.
              Analizamos contratos eléctricos y de gas para detectar
              sobrecostes y optimizar suministros energéticos.
            </p>

          </div>

          <div>

            <div
              className="
                text-white
                font-medium

                mb-5
              "
            >
              Servicios
            </div>

            <div
              className="
                flex
                flex-col

                gap-3

                text-slate-300
              "
            >

              <a href="#why-arcoplaza">
                Optimización energética
              </a>

              <a href="#calculadora">
                Revisión de suministros
              </a>

              <a href="#proceso">
                Supervisión energética
              </a>

            </div>

          </div>

          <div>

            <div
              className="
                text-white
                font-medium

                mb-5
              "
            >
              Contacto
            </div>

            <div
              className="
                flex
                flex-col

                gap-3

                text-slate-300
              "
            >

              <a href="mailto:aaff@centralenergyasesores.com">
                aaff@centralenergyasesores.com
              </a>

              <div>
                Madrid, España
              </div>

            </div>

          </div>

        </div>

        <div
          className="
            mt-14
            pt-6

            border-t
            border-[#28496F]

            flex
            flex-col
            gap-3

            lg:flex-row
            lg:items-center
            lg:justify-between

            text-[14px]
            text-slate-400
          "
        >

          <div>
            © 2026 Arcoplaza Asesores
          </div>

          <div>
            Supervisión energética clara y rigurosa.
          </div>

        </div>

      </div>

    </footer>

  )

}