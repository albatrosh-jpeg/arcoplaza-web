import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

import navLinks from '../../data/navLinks'
import Button from '../ui/Button'

export default function Navbar() {

  const [open, setOpen] = useState(false)

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

          bg-surface-secondary/88
          backdrop-blur-xl

          supports-[backdrop-filter]:bg-surface-secondary/72
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto

            px-4
            lg:px-6

            h-[72px]
            lg:h-[78px]

            flex
            items-center
          "
        >

          <a
            href="#inicio"
            className="flex items-center shrink-0 z-50"
          >

            <img
              src="/logo-arcoplaza.png"
              alt="Arcoplaza Asesores"
              className="
                h-[58px]
                lg:h-[64px]

                w-auto
                object-contain
              "
            />

          </a>

          <nav
            className="
              hidden
              xl:flex

              items-center

              gap-8

              ml-auto
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

          <div className="hidden 2xl:block ml-8">

            <Button
              as="a"
              href="#formulario"
              className="
                px-4
                py-[11px]

                text-[14px]
              "
            >

              Solicitar análisis

            </Button>

          </div>

          <button
            onClick={() => setOpen(true)}
            className="
              xl:hidden

              ml-auto

              flex
              items-center
              justify-center

              w-11
              h-11

              rounded-full

              border
              border-border-soft

              bg-white/70

              text-corporate
            "
            aria-label="Abrir menú"
          >

            <Menu size={20} />

          </button>

        </div>

      </div>

      <AnimatePresence>

        {open && (

          <>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}

              transition={{ duration: 0.2 }}

              className="
                fixed
                inset-0

                bg-[#18375D]/20
                backdrop-blur-sm

                z-40
              "
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}

              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1]
              }}

              className="
                fixed
                top-0
                right-0
                bottom-0

                w-[320px]
                max-w-[88vw]

                bg-surface-elevated

                border-l
                border-border-soft

                z-50

                p-6

                flex
                flex-col
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
                  className="h-11 w-auto"
                />

                <button
                  onClick={() => setOpen(false)}
                  className="
                    flex
                    items-center
                    justify-center

                    w-10
                    h-10

                    rounded-full

                    border
                    border-border-soft

                    text-corporate
                  "
                >

                  <X size={18} />

                </button>

              </div>

              <nav
                className="
                  flex
                  flex-col

                  gap-6
                "
              >

                {navLinks.map((link) => (

                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="
                      text-[18px]
                      font-medium

                      text-corporate
                    "
                  >

                    {link.label}

                  </a>

                ))}

              </nav>

              <div className="mt-auto pt-10">

                <Button
                  as="a"
                  href="#formulario"
                  onClick={() => setOpen(false)}
                  className="w-full"
                >

                  Solicitar análisis

                </Button>

              </div>

            </motion.div>

          </>

        )}

      </AnimatePresence>

    </header>

  )

}