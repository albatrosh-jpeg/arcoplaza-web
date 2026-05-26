import { Send, Loader2 } from 'lucide-react'
import { useState } from 'react'
import { firstVisitEmail } from '../emails/firstVisitEmail.js'
import { Helmet } from 'react-helmet'
import { useEffect } from 'react'

export default function CommercialEmail() {

const [authorized, setAuthorized] =
  useState(false)

const [password, setPassword] =
  useState('')

  const [clientName, setClientName] =
    useState('')

  const [clientEmail, setClientEmail] =
    useState('')

  const [omiePrice, setOmiePrice] =
    useState('')

    useEffect(() => {

  const loadOmiePrice =
    async () => {

      try {

        const response =
          await fetch(
            '/api/getOmiePrice'
          )

        const data =
          await response.json()

        if (data.price) {

          setOmiePrice(
            data.price
          )

        }

      }

      catch (error) {

        console.error(error)

      }

    }

  loadOmiePrice()

}, [])

  const [omieComment, setOmieComment] =
    useState(
      'Mercado estable con ligeras tensiones en horas punta.'
    )
    const [customMessage, setCustomMessage] =
    useState(
      `Gracias por dedicarnos parte de vuestro tiempo durante la visita.

      En Arcoplaza Asesores realizamos revisiones técnicas independientes orientadas a detectar ineficiencias económicas, optimizar contratos eléctricos y analizar oportunidades de mejora en suministros profesionales.`
        )
  const [loading, setLoading] =
    useState(false)

  const [success, setSuccess] =
    useState(false)

  const previewHtml = firstVisitEmail({

  clientName,
  
  customMessage,

  omiePrice,

  omieComment

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

            omiePrice,

            omieComment

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
import.meta.env
.VITE_COMMERCIAL_PASSWORD
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
            Commercial Email
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
            placeholder="Precio OMIE"
            value={omiePrice}
            onChange={(e) =>
              setOmiePrice(e.target.value)
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
            value={omieComment}
            onChange={(e) =>
              setOmieComment(e.target.value)
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
              h-[700px]
              bg-white
            "
          />

        </div>

      </div>

    </div>

  </>

)
}