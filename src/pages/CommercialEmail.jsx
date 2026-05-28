import { useState, useEffect } from 'react'
import { firstVisitEmail } from '../emails/firstVisitEmail.js'
import { Helmet } from 'react-helmet'

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

const previewHtml = firstVisitEmail({

  clientName,

  marketPrice,

  marketComment,

  customMessage

})

  async function handleSubmit(e) {

    e.preventDefault()

    setLoading(true)

    setSuccess(false)

  const finalMessage =
    customMessage
      .replace('{{lugar}}', 'vuestras oficinas')
      .replace('{{referido}}', 'un contacto común')

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

            message: finalMessage
            
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
      px-6
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
          text-3xl
          font-semibold
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

    <Helmet>

      <meta
        name="robots"
        content="noindex,nofollow"
      />

    </Helmet>

    <div className="
      min-h-screen
      bg-white
      px-6
      py-16
    ">

      <div className="
        max-w-7xl
        mx-auto
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-10
        px-6
        py-12
      ">

        <div className="lg:col-span-2">

          <h1 className="
            text-4xl
            font-semibold
            mb-10
          ">
            Email Comercial
          </h1>

        </div>

        <form
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

          <input
            type="text"
            placeholder="Precio SPEL Base Week"
            value={marketPrice}
            onChange={(e) =>
              setMarketPrice(e.target.value)
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
              bg-black
              text-white
              rounded-xl
              px-6
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
          "
        >

          <div className="
            px-6
            py-4
            border-b
            border-gray-200
            font-medium
          ">
            Preview email
          </div>

          <iframe
            title="email-preview"
            srcDoc={previewHtml}
            className="
              w-full
              h-[900px]
              bg-white
            "
          />

        </div>

      </div>

    </div>

  </>

)
}