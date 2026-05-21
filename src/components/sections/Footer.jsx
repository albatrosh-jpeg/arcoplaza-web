import { Link } from 'react-router-dom'

export default function Footer() {

  const linkClass = `
    font-swiss

    text-white/70

    transition-all
    duration-300

    hover:text-white
    hover:translate-x-[2px]
  `

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
          lg:py-10
          sm:py-16
        "
      >

        <div
          className="
            grid

            gap-14

            lg:grid-cols-[1.2fr_0.8fr_0.8fr]
          "
        >

          <div className="max-w-md">

            <img
              src="/footer-arcoplaza.png"
              alt="Arcoplaza Asesores"
              className="
                h-20
                w-auto

                mb-7

                opacity-95
              "
            />

            <p
              className="
                text-white/70
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
              "
            >

              <a
                href="#why-arcoplaza"
                className={linkClass}
              >
                Optimización energética
              </a>

              <a
                href="#calculadora"
                className={linkClass}
              >
                Revisión de suministros
              </a>

              <a
                href="#proceso"
                className={linkClass}
              >
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
              "
            >

              <a
                href="mailto:contacto@arcoplazaasesores.com"
                className={linkClass}
              >
                contacto@arcoplazaasesores.com
              </a>

              <div className="font-swiss text-white/70">
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
            text-white/50
          "
        >

          <div>
            © 2026 Arcoplaza Asesores
          </div>

          <div className="flex gap-6 text-sm">

            <Link
              to="/aviso-legal"
              className={linkClass}
            >
              Aviso legal
            </Link>

            <Link
              to="/politica-privacidad"
              className={linkClass}
            >
              Privacidad
            </Link>

            <Link
              to="/politica-cookies"
              className={linkClass}
            >
              Cookies
            </Link>

          </div>

          <div>
            Supervisión energética clara y rigurosa.
            <br />
            El trabajo bien hecho, habla por sí solo.
          </div>

        </div>

      </div>

    </footer>

  )

}