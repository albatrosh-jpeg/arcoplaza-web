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
      'Optimización general',

    value:
`Gracias por dedicarnos parte de vuestro tiempo durante la visita.

En Arcoplaza Asesores realizamos revisiones técnicas independientes orientadas a detectar ineficiencias económicas, optimizar contratos eléctricos y analizar oportunidades de mejora en suministros profesionales.`
  },

  {
    label:
      'Excesos y potencia',

    value:
`Durante la visita detectamos posibles oportunidades de optimización relacionadas con excesos de potencia y estructura de contratación eléctrica.

Nuestro análisis permitirá evaluar ajustes técnicos que podrían reducir costes recurrentes y mejorar la eficiencia contractual del suministro.`
  },

  {
    label:
      'Mercado energético',

    value:
`El contexto actual del mercado energético continúa mostrando volatilidad relevante en precios y futuros eléctricos.

Desde Arcoplaza analizamos oportunidades de optimización contractual y exposición energética adaptadas al perfil real de consumo de cada empresa.`
  },

  {
    label:
      'Revisión completa',

    value:
`Gracias por recibirnos durante la visita realizada recientemente.

En Arcoplaza Asesores desarrollamos revisiones energéticas integrales orientadas a detectar sobrecostes invisibles, optimizar contratos eléctricos y mejorar la estructura energética global del suministro profesional.`
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

            customMessage

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