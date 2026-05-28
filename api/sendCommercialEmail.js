import { Resend } from 'resend'
import { firstVisitEmail } from '../src/emails/firstVisitEmail.js'

const resend = new Resend(
  process.env.RESEND_API_KEY
)

export default async function handler(req, res) {

  if (req.method !== 'POST') {

    return res.status(405).json({
      error: 'Method not allowed'
    })

  }

  try {

    const {
      clientName,
      clientEmail,
      marketPrice,
      marketComment,
      customMessage
    } = req.body

    await resend.emails.send({

      from: 'contacto@arcoplazaasesores.com',

      to: clientEmail,

      subject:
        'Gracias por recibirnos · Arcoplaza Asesores',

      html: firstVisitEmail({

        clientName,

        marketPrice,

        marketComment,

        customMessage

      })

    })

    await fetch(
      'https://script.google.com/macros/s/AKfycbw5T3csh4LfW82K0UJNDl6FEa1nR8Kb6z--lVyguYPVj6nxEKB1_FQpcaNHh-fOwGhlIA/exec',
      {

        method: 'POST',

        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({

          clientName,

          clientEmail,

          template: 'Commercial Email',

          message: customMessage,

          status: 'Enviado',

          commercial: 'Arcoplaza Asesores'

        })

      }
    )

    return res.status(200).json({
      success: true
    })

  }

  catch (error) {

    console.error(error)

    return res.status(500).json({
      error: 'Error enviando email'
    })

  }

}