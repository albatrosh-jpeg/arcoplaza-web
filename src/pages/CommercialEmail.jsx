import { useState } from 'react'

export default function CommercialEmail() {

  const [clientName, setClientName] =
    useState('')

  const [clientEmail, setClientEmail] =
    useState('')

  const [omiePrice, setOmiePrice] =
    useState('42,18')

  const [omieComment, setOmieComment] =
    useState(
      'Mercado estable con ligeras tensiones en horas punta.'
    )

  const [loading, setLoading] =
    useState(false)

  const [success, setSuccess] =
    useState(false)

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

  return (

    <div className="
      min-h-screen
      bg-white
      px-6
      py-16
    ">

      <div className="
        max-w-2xl
        mx-auto
      ">

        <h1 className="
          text-4xl
          font-semibold
          mb-10
        ">
          Commercial Email
        </h1>

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

          <button
            type="submit"
            disabled={loading}
            className="
              bg-black
              text-white
              rounded-xl
              px-6
              py-4
              font-medium
            "
          >

            {
              loading
                ? 'Enviando...'
                : 'Enviar email'
            }

          </button>

          {
            success && (

              <div className="
                text-green-600
                font-medium
              ">

                Email enviado correctamente.

              </div>

            )
          }

        </form>

      </div>

    </div>

  )

}