import {
  ArrowRight,
  Download,
  Globe2,
  Mail,
  MessageCircle,
  Phone
} from 'lucide-react'
import Seo from '../components/seo/Seo'

const contactItems = [
  {
    label: 'Teléfono',
    value: '+34 669 633 694',
    href: 'tel:+34669633694',
    icon: Phone
  },
  {
    label: 'WhatsApp',
    value: 'Abrir conversación',
    href: 'https://wa.me/34669633694',
    icon: MessageCircle,
    external: true
  },
  {
    label: 'Email',
    value: 'contacto@arcoplazaasesores.com',
    href: 'mailto:contacto@arcoplazaasesores.com',
    icon: Mail
  },
  {
    label: 'Web',
    value: 'arcoplazaasesores.com',
    href: 'https://www.arcoplazaasesores.com',
    icon: Globe2,
    external: true
  }
]

export default function Contacto() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-surface-primary px-5 py-10 text-corporate sm:px-8 sm:py-14">
      <Seo
        title="Álvaro del Arco | Arcoplaza Asesores"
        description="Datos de contacto de Álvaro del Arco, consultor energético en Arcoplaza Asesores."
        path="/contacto"
        image="/logo-arcoplaza.png"
        imageAlt="Arcoplaza Asesores"
      />

      <article className="card-top-accent w-full max-w-[520px] overflow-hidden rounded-[20px] border border-border-soft bg-white px-6 py-8 shadow-[0_24px_70px_rgba(24,55,93,0.10)] sm:px-10 sm:py-10">
        <header className="border-b border-border-soft pb-8 text-center">
          <a href="/" aria-label="Ir a la p?gina principal de Arcoplaza">
            <img
              src="/logo-arcoplaza.png"
              alt="Arcoplaza Asesores"
              className="mx-auto h-auto w-[190px]"
            />
          </a>

          <h1 className="mt-8 font-editorial text-[34px] font-medium leading-tight text-corporate sm:text-[40px]">
            Álvaro del Arco
          </h1>
          <p className="mt-2 text-[15px] font-medium text-text-secondary">
            Consultor energético
          </p>
        </header>

        <div className="divide-y divide-border-soft py-3">
          {contactItems.map(({ label, value, href, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
              className="group flex min-h-[72px] items-center gap-4 py-4"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-corporateGreen-soft text-corporateGreen transition-colors group-hover:bg-corporateGreen group-hover:text-white">
                <Icon size={20} strokeWidth={1.8} />
              </span>

              <span className="min-w-0 text-left">
                <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-corporateGreen">
                  {label}
                </span>
                <span className="mt-1 block break-words text-[14px] font-medium text-corporate sm:text-[15px]">
                  {value}
                </span>
              </span>
            </a>
          ))}
        </div>

        <div className="mt-3 grid gap-3">
          <a
            href="/alvaro-del-arco.vcf"
            download="Alvaro-del-Arco.vcf"
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-[12px] border border-corporate px-5 py-3 text-sm font-semibold text-corporate transition-colors hover:bg-corporate hover:text-white"
          >
            <Download size={18} strokeWidth={1.8} />
            Guardar contacto
          </a>

          <a
            href="/analisis-factura-electrica"
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-[12px] bg-corporate-gradient px-5 py-3 text-center text-sm font-semibold text-white shadow-[0_14px_32px_rgba(24,55,93,0.16)] transition-opacity hover:opacity-95"
          >
            Solicitar análisis gratuito
            <ArrowRight size={18} strokeWidth={1.8} />
          </a>
        </div>
      </article>
    </main>
  )
}
