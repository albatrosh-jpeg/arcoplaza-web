import { useState, useEffect } from 'react'
import { firstVisitEmail } from '../emails/firstVisitEmail.js'
import {
  BarChart3,
  FileText,
  Zap
} from 'lucide-react'

const savingItems = [
  {
    icon: FileText,
    title: 'Contratos renovados automáticamente',
    text: 'Muchas empresas mantienen precios firmados cuando el mercado energético estaba más alto.'
  },
  {
    icon: BarChart3,
    title: 'Condiciones poco competitivas',
    text: 'Tarifas y márgenes que incrementan el coste final sin resultar evidentes.'
  },
  {
    icon: Zap,
    title: 'Potencias mal ajustadas',
    text: 'Sobrecostes recurrentes por configuraciones alejadas del consumo real.'
  }
]

function PreviewSavingCard({
  icon: Icon,
  title,
  text
}) {
  return (
    <div className="flex gap-4 rounded-[14px] border border-[#ECE7DD] bg-[#FCFBF8] p-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EAF6E7] text-[#5BA449]">
        <Icon size={21} strokeWidth={1.9} />
      </div>

      <div>
        <h3 className="text-[14px] font-bold leading-snug text-[#18375D]">
          {title}
        </h3>
        <p className="mt-1.5 text-[13px] leading-[1.55] text-[#556274]">
          {text}
        </p>
      </div>
    </div>
  )
}

function DesktopEmailPreview({
  clientName,
  finalMessage,
  marketPrice,
  marketComment
}) {
  const paragraphs = finalMessage
    .split('\n\n')
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)

  return (
    <div className="hidden bg-[#FCFBF8] lg:block">
      <div className="rounded-[18px] border border-[#ECE7DD] bg-white shadow-[0_24px_70px_rgba(24,55,93,0.08)]">
        <div className="flex items-center justify-start border-b border-[#ECE7DD] px-8 py-5">
          <img
            src="/logo-arcoplaza.png"
            alt="Arcoplaza Asesores"
            className="h-14 w-auto"
          />
        </div>

        <div className="grid lg:grid-cols-[65fr_35fr]">
          <div className="border-r border-[#ECE7DD] px-8 py-8">
            <h2 className="heading-h2 text-[36px] leading-[1.04] text-[#18375D]">
              Gracias por recibirnos
            </h2>

            <div className="mt-7 space-y-4 text-[16px] leading-[1.68] text-[#3E4B5B]">
              <p>
                Hola {clientName || 'Álvaro del Arco'},
              </p>

              {paragraphs.map((paragraph) => (
                <p key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-7 border-t border-[#ECE7DD] pt-6">
              <div className="grid max-w-xl grid-cols-2 gap-10">
                <div>
                  <div className="font-['Segoe_Script','Brush_Script_MT',cursive] text-[24px] leading-none text-[#18375D]">
                    Álvaro del Arco
                  </div>
                  <div className="mt-3 text-sm font-bold text-[#18375D]">
                    Álvaro del Arco
                  </div>
                  <div className="text-sm text-[#556274]">
                    Socio fundador
                  </div>
                </div>

                <div>
                  <div className="font-['Segoe_Script','Brush_Script_MT',cursive] text-[24px] leading-none text-[#18375D]">
                    Enrique Plaza
                  </div>
                  <div className="mt-3 text-sm font-bold text-[#18375D]">
                    Enrique Plaza
                  </div>
                  <div className="text-sm text-[#556274]">
                    Socio fundador
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="px-7 py-8">
            <h2 className="text-[24px] font-bold leading-tight text-[#18375D]">
              Dónde solemos encontrar ahorro
            </h2>

            <div className="mt-5 space-y-3">
              {savingItems.map((item) => (
                <PreviewSavingCard
                  key={item.title}
                  {...item}
                />
              ))}
            </div>

            <div className="mt-4 rounded-[18px] border border-[#DDEBD7] bg-[#F7FBF4] px-7 py-6 text-center">
              <h3 className="text-[21px] font-bold leading-tight text-[#18375D]">
                ¿Revisamos vuestro contrato energético?
              </h3>
              <p className="mx-auto mt-3 max-w-[320px] text-[14px] leading-[1.55] text-[#556274]">
                Podemos revisar condiciones, potencias y precios actuales para detectar posibles sobrecostes.
              </p>
              <div className="mx-auto mt-5 inline-flex rounded-[10px] bg-[#18375D] px-7 py-3 text-sm font-bold text-white shadow-[0_14px_28px_rgba(24,55,93,0.18)]">
                Solicitar revisión energética
              </div>
              <div className="mt-4 text-sm font-semibold text-[#367E45]">
                Ver análisis de mercado →
              </div>
            </div>

            <div className="mt-4 rounded-[18px] border border-[#ECE7DD] bg-[#FCFBF8] p-5">
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#367E45]">
                Mercado eléctrico ibérico
              </div>

              <div className="mt-4 grid grid-cols-[1fr_auto] items-center gap-5">
                <div className="flex items-start gap-3 text-[14px] leading-[1.55] text-[#3E4B5B]">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6BCB5B]" />
                  <span>
                    {marketComment}
                  </span>
                </div>

                <div className="flex h-[112px] w-[112px] shrink-0 flex-col items-center justify-center rounded-full border-[6px] border-[#5BA449] bg-white text-center">
                  <div className="text-[25px] font-bold leading-none text-[#18375D]">
                    {marketPrice || '--'}
                  </div>
                  <div className="mt-1 text-[13px] text-[#556274]">
                    €/MWh
                  </div>
                </div>
              </div>

              <div className="mt-4 text-[12px] leading-relaxed text-[#7C8795]">
                Referencia semanal OMIP
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default function CommercialEmail() {

const [authorized, setAuthorized] =
  useState(false)

const [password, setPassword] =
  useState('')

const [loading, setLoading] =
  useState(false)

const [success, setSuccess] =
  useState(false)

const [clientName, setClientName] =
  useState('')
  
const [clientEmail, setClientEmail] =
  useState('')

const [marketPrice, setMarketPrice] =
  useState('')

const [marketPriceLoading, setMarketPriceLoading] =
  useState(true)

  useEffect(() => {

  const loadMarketPrice =
    async () => {

      try {

        const response =
          await fetch(
            '/api/getMarketData'
          )

        const data =
          await response.json()

        if (data?.price) {

          setMarketPrice(
            data.price
          )

        }

      }

      catch (error) {

        console.error(error)

      }
      finally {

        setMarketPriceLoading(false)

      }

    }

  loadMarketPrice()

}, [])

const [marketComment, setMarketComment] =
  useState(
    'Mercado estable con ligeras tensiones en horas punta.'
  )

const messageOptions = [

  {

    label:
      'MAIL EMPRESA',

    value:
`Encantados de conocerte hoy en {{lugar}}.

Como hemos hablado, Álvaro y yo nos dedicamos al asesoramiento energético para empresas. Actualmente trabajamos con compañías con necesidades tan diferentes como Wetaca, Dulca SL o Perfumerías Avenida, ayudándoles a optimizar costes, revisar contratos y detectar oportunidades de ahorro.

Si te parece interesante, podéis enviarnos una factura reciente y os preparamos un estudio sin compromiso para que veáis de forma clara qué margen de mejora podríamos conseguir en vuestro caso.

Además del posible ahorro, nuestro objetivo es que todo el proceso sea sencillo y transparente. Nuestro objetivo es crear relaciones laborales lo suficientemente buenas para que sean duraderas en el tiempo.

A vuestra disposición para cualquier duda,`

  },

  {

    label:
      'MAIL AAFF',

    value:
`Encantados de conocerte hoy en {{lugar}}.

Como hemos hablado, Álvaro y yo nos dedicamos al asesoramiento energético, trabajando especialmente con administradores de fincas y comunidades de propietarios para optimizar costes y quitaros de encima trámites y gestiones relacionadas con los suministros.

Si te parece interesante, podéis enviarnos una factura reciente y os preparamos un estudio sin compromiso para que veáis de forma clara qué margen de mejora podríamos conseguir en vuestras comunidades.

Nuestro objetivo es que todo el proceso sea sencillo, transparente y así crear relaciones laborales duraderas en el tiempo.

A vuestra disposición para cualquier duda,`

  },

  {

    label:
      'PARTICULAR',

    value:
`Encantados de conocerte hoy en {{lugar}}.

Como hemos hablado, Álvaro y yo nos dedicamos al asesoramiento energético, ayudando tanto a particulares como a empresas como Wetaca, Dulca SL o Perfumerías Avenida a optimizar costes y mejorar sus contratos de luz y gas.

Si te parece interesante, puedes enviarnos una de tus facturas particulares recientes y te preparamos un estudio sin compromiso para que veas de forma clara qué opciones de ahorro o mejora podríamos conseguir en tu caso.

Nuestro objetivo es que todo el proceso sea sencillo, transparente y generar relaciones de confianza duraderas en el tiempo.

A vuestra disposición para cualquier duda,`

  },

  {

    label:
      'EMPRESA REFERIDO',

    value:
`Te escribo porque {{referido}} nos ha pasado este contacto y pensó que podría tener sentido que contactáramos.

Álvaro y yo nos dedicamos al asesoramiento energético para empresas. Actualmente trabajamos con compañías con necesidades tan diferentes como Wetaca, Dulca SL o Perfumerías Avenida, ayudándoles a optimizar costes, revisar contratos y detectar oportunidades de ahorro.

Además del posible ahorro, nuestro objetivo es que todo el proceso sea sencillo, transparente y generar relaciones laborales duraderas en el tiempo.

Si te parece interesante, podemos mantener una conversación o haceros una visita rápida para conocernos.`

  },

  {

    label:
      'MAIL DUDA',

    value:
`Encantados de conocerte hoy en {{lugar}}.

Como hemos hablado, Álvaro y yo nos dedicamos al asesoramiento energético, ayudando tanto a empresas como a particulares a optimizar costes y mejorar sus condiciones de suministro.

Entendemos que antes de valorar algo a nivel profesional puede ser interesante verlo de primera mano, así que si te parece, puedes enviarnos una factura personal y te preparamos un estudio sin compromiso para que veas cómo trabajamos y qué margen de mejora podríamos conseguir.

Nuestro objetivo es que todo el proceso sea sencillo, transparente y generar relaciones de confianza duraderas en el tiempo.

A vuestra disposición para cualquier duda,`

  }

]

const [selectedMessage, setSelectedMessage] =
  useState(0)

const [customMessage, setCustomMessage] =
  useState(
    messageOptions[0].value
  )
const finalMessage =
  customMessage
    .replace(
      '{{lugar}}',
      'vuestras oficinas'
    )
    .replace(
      '{{referido}}',
      'un contacto común'
    )

const previewHtml = firstVisitEmail({

  clientName,

  marketPrice,

  marketComment,

  customMessage: finalMessage

})

  async function handleSubmit(e) {

    e.preventDefault()

    setLoading(true)

    setSuccess(false)

    try {

      const response = await fetch(
        '/api/sendCommercialEmail',
        {
          method: 'POST',

          headers: {
            'Content-Type':
              'application/json'
          },

          body: JSON.stringify({

            clientName,

            clientEmail,

            marketPrice,

            marketComment,

            customMessage: finalMessage
            
          })
        }
      )

      if (response.ok) {

        setSuccess(true)

      }

    } catch (error) {

      console.error(error)

    }

    setLoading(false)

  }

function handleLogin(e) {

  e.preventDefault()

  if (
    password ===
    import.meta.env.VITE_COMMERCIAL_PASSWORD
  ) {

    setAuthorized(true)

  }

}

if (!authorized) {

  return (

    <div className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-white
      px-16
    ">

      <form
        onSubmit={handleLogin}
        className="
          w-full
          max-w-md
          flex
          flex-col
          gap-4
        "
      >

        <h1 className="
          heading-h1
          text-corporate
          mb-4
        ">
          Acceso interno
        </h1>

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="
            border
            border-gray-300
            rounded-xl
            px-4
            py-3
          "
        />
        <button
          type="submit"
          className="
            bg-black
            text-white
            rounded-xl
            py-3
          "
        >
          Entrar
        </button>

      </form>

    </div>

  )

}

return (

  <>

    <div className="
      min-h-screen
      bg-white
      px-16
      py-16
      lg:px-6
      lg:py-4
    ">

      <div className="
        max-w-7xl
        mx-auto
        grid
        grid-cols-1
        lg:grid-cols-[320px_minmax(0,1fr)]
        gap-10
        lg:gap-6
        px-16
        py-12
        lg:px-0
        lg:py-0
      ">
 
        <div className="lg:hidden">

          <h1 className="
            heading-h1
            text-corporate
            mb-10
          ">
            Email Comercial
          </h1>

        </div>

        <form
          id="commercial-email-form"
          onSubmit={handleSubmit}
          className="
            flex
            flex-col
            gap-6
          "
        >

          <input
            type="text"
            placeholder="Nombre cliente"
            value={clientName}
            onChange={(e) =>
              setClientName(e.target.value)
            }
            className="
              border
              border-gray-300
              rounded-xl
              px-4
              py-3
            "
          />

          <input
            type="email"
            placeholder="Email cliente"
            value={clientEmail}
            onChange={(e) =>
              setClientEmail(e.target.value)
            }
            className="
              border
              border-gray-300
              rounded-xl
              px-4
              py-3
            "
          />


          <div className="mb-4">

  <label className="
    block
    text-sm
    text-slate-600
    mb-2
  ">
    Plantilla de mensaje
  </label>

  <select

    value={selectedMessage}

    onChange={(e) => {

      const index = Number(e.target.value)

      setSelectedMessage(index)

      setCustomMessage(
        messageOptions[index].value
      )

    }}

    className="
      w-full
      rounded-xl
      border
      border-[#D8D2C5]
      bg-white
      px-4
      py-3
      text-sm
      text-[#163A70]
      outline-none
    "
  >

    {messageOptions.map(
      (option, index) => (

        <option
          key={option.label}
          value={index}
        >
          {option.label}
        </option>

      )
    )}

  </select>

</div>
          <textarea
            rows="5"
            placeholder="Mensaje personalizado"
            value={customMessage}
            onChange={(e) =>
              setCustomMessage(e.target.value)
            }
            className="
              border
              border-gray-300
              rounded-xl
              px-4
              py-3
            "
          />

          <textarea
            rows="5"
            placeholder="Comentario mercado"
            value={marketComment}
            onChange={(e) =>
              setMarketComment(e.target.value)
            }
            className="
              border
              border-gray-300
              rounded-xl
              px-4
              py-3
            "
          />

          <button
            type="submit"
            disabled={loading}
            className={`
              bg-gradient-to-r
              from-[#42B883]
              via-[#0F8BB8]
              to-[#0B56B3]
              text-white
              rounded-xl
              px-16
              py-4
              font-medium
              transition-all
              hover:opacity-90
              active:scale-[0.98]
              shadow-sm
              hover:shadow-md

              ${
                loading
                  ? 'opacity-60 cursor-not-allowed'
                  : ''
              }
            `}
          >

            {
              loading
                ? 'Procesando envío...'
                : 'Enviar email'
            }

          </button>

          {
            success && (

          <div className="
            text-green-600
            font-medium
            bg-green-50
            border
            border-green-200
            rounded-xl
            px-4
            py-3
          ">

            Email enviado correctamente.

          </div>
            )
          }

        </form>

        <div
          className="
            border
            border-gray-200
            rounded-2xl
            overflow-hidden
            bg-white
            shadow-sm
            lg:border-0
            lg:rounded-none
            lg:bg-transparent
            lg:shadow-none
            lg:overflow-visible
          "
        >

          <div className="
            px-16
            py-4
            border-b
            border-gray-200
            font-medium
            lg:hidden
          ">
            Preview email
          </div>

          <DesktopEmailPreview
            clientName={clientName}
            finalMessage={finalMessage}
            marketPrice={
              marketPrice ||
              (
                marketPriceLoading
                  ? '...'
                  : '--'
              )
            }
            marketComment={marketComment}
          />

          <iframe
            title="email-preview"
            srcDoc={previewHtml}
            className="
              w-full
              h-[900px]
              bg-white
              lg:hidden
            "
          />

        </div>

      </div>

    </div>

  </>

)
}
