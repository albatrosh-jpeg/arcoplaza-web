import navLinks from '../../data/navLinks'
import Button from '../ui/Button'

export default function Navbar() {

  return (

    <header
      className="
        sticky
        top-0
        z-50
      "
    >

      <div
        className="
          border-b
          border-border-soft

          bg-surface-secondary/92
          backdrop-blur-md
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto

            px-6
            h-[78px]

            flex
            items-center
          "
        >

          <a
            href="#inicio"
            className="flex items-center shrink-0"
          >

            <img
              src="/logo-arcoplaza.png"
              alt="Arcoplaza Asesores"
              className="h-11 w-auto object-contain"
            />

          </a>

          <nav
            className="
              hidden
              lg:flex

              items-center

              gap-10

              ml-auto
              mr-8
            "
          >

            {navLinks.map((link) => (

              <a
                key={link.href}
                href={link.href}
                className="
                  text-[15px]
                  font-medium

                  text-corporate

                  transition-colors
                  duration-300

                  hover:text-corporate-soft
                "
              >
                {link.label}
              </a>

            ))}

          </nav>

          <Button
            as="a"
            href="#formulario"
            className="px-5 py-3"
          >
            Solicitar análisis
          </Button>

        </div>

      </div>

    </header>

  )

}