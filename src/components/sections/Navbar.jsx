import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Button from '../ui/Button'
import { Link, useLocation } from 'react-router-dom'

  const navItems = [
    {
      label: 'Soluciones',
      href: '/analisis-factura-electrica'
    },
    {
      label: 'Proceso',
      href: '#proceso'
    },
    {
      label: 'Partners',
      href: '#partners'
    },
    {
      label: 'Observatorio',
      href: '/blog'
    },
    {
      label: 'Contacto',
      href: '/#formulario'
    }
  ]

export default function Navbar() {

  const [open, setOpen] = useState(false)
  const location = useLocation()

  const isBlog =
    location.pathname.startsWith('/blog')

  const isLanding =
    location.pathname === '/analisis-factura-electrica' ||
    location.pathname.startsWith('/soluciones/')

  const simplifiedNavbar =
    isBlog || isLanding

  return (

<header
  className="
    fixed
    top-0
    left-0
    right-0

    w-full

    z-[100]

    bg-white

    border-b
    border-border-soft
  "
>
      <div
        className="
          container-content

          h-[74px]

          flex
          items-center
          justify-between

          gap-4
        "
      >

        <Link
          to="/"
          className="shrink-0"
        >

          <img
            src="/logo-arcoplaza.png"
            alt="Arcoplaza Asesores"
            className="
              h-14
              lg:h-16

              w-auto
            "
          />

        </Link>
        
      {!simplifiedNavbar && (

        <nav
          className="
            hidden
            lg:flex

            items-center

            gap-8

            ml-auto
          "
        >

        {navItems.map((item) => (

          item.href.startsWith('/')

            ? (

              <Link
                key={item.label}
                to={item.href}
              >
                {item.label}
              </Link>

            )

            : (

              <a
                key={item.label}
                href={item.href}
              >
                {item.label}
              </a>

            )

        ))}

        </nav>
        )}

        <div
          className="
            ml-auto

            flex
            items-center
            justify-end

            gap-3

            shrink-0
          "
        >

          <Button
            as="a"
            href="/#formulario"
            className="
              hidden
              sm:flex

              px-4
              lg:px-5

              h-10
              lg:h-11

              text-[14px]
              whitespace-nowrap
            "
          >

            Solicitar análisis

          </Button>

          <button
            onClick={() => setOpen(true)}
            className="
              lg:hidden

              flex
              items-center
              justify-center

              w-11
              h-11

              rounded-full

              border
              border-border-soft

              bg-white

              text-corporate
            "
            aria-label="Abrir menú"
          >

            <Menu size={20} />

          </button>

        </div>

      </div>

      {open && (

        <div
          className="
            fixed
            inset-0
            z-[120]

            bg-black/90
          "
        >

          <div
            className="
              fixed
              top-[74px]
              left-0
              right-0
              bottom-0

              w-full
              h-full

              bg-white

              p-6
            " 
           >

            <div
              className="
                flex
                items-center
                justify-between

                mb-10
              "
            >

              <img
                src="/logo-arcoplaza.png"
                alt="Arcoplaza Asesores"
                className="h-12 w-auto"
              />

              <button
                onClick={() => setOpen(false)}
                className="
                  flex
                  items-center
                  justify-center

                  w-11
                  h-11

                  rounded-full

                  border
                  border-border-soft

                  text-corporate
                "
                aria-label="Cerrar menú"
              >

                <X size={20} />

              </button>

            </div>

            <nav
              className="
                flex
                flex-col

                gap-6
              "
            >

              {navItems.map((item) => (

                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="
                    text-[18px]

                    text-corporate

                    transition-colors
                    duration-300

                    hover:text-corporateGreen
                  "
                >
                  {item.label}
                </a>

              ))}

            </nav>

          </div>

        </div>

      )}

    </header>

  )

}