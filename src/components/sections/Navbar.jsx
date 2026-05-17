
import navLinks from '../../data/navLinks'
import Button from '../ui/Button'
export default function Navbar() {

  return (

    <header className="sticky top-0 z-50 backdrop-blur bg-[#faf7f2]/95 border-b-4 border-corporate shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">

        <div className="flex items-center">

          <img
            src="/logo-arcoplaza.png"
            alt="arcoplaza asesores"
            className="h-14 w-auto object-contain"
          />

        </div>

<nav className="hidden lg:flex items-center gap-10 text-[17px] font-semibold text-corporate ml-auto mr-8">

  {navLinks.map((link) => (

    <a
      key={link.href}
      href={link.href}
      className="hover:text-green-600 transition-colors"
    >
      {link.label}
    </a>

  ))}

</nav>
<Button
  as="a"
  href="#formulario"
  className="text-sm px-5 py-3"
>
  Solicitar análisis
</Button>

      </div>

    </header>

  )
}