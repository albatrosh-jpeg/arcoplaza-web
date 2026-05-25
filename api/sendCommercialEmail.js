import { Resend } from 'resend'
import { firstVisitEmail } from '../src/emails/firstVisitEmail.js'

const resend = new Resend(
  're_BT1n2qww_KSHsQsmFPt8u8hXipb3LV248'
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
      omiePrice,
      omieComment
    } = req.body

    await resend.emails.send({

      from: 'contacto@arcoplazaasesores.com',

      to: clientEmail,

      subject:
        'Gracias por recibirnos · Arcoplaza Asesores',

      html: firstVisitEmail({

        clientName,

        omiePrice,

        omieComment

      })

    })

    return res.status(200).json({
      success: true
    })

  } catch (error) {

    console.error(error)

    return res.status(500).json({
      error: 'Error enviando email'
    })

  }

}