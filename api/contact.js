import { Resend } from 'resend'
import ArcoplazaLanding from '../src/App'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {

  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed'
    })
  }

  try {

    console.log('BODY:', req.body)

    const { nombre, telefono, email, comentario } = req.body

    const data = await resend.emails.send({
      from: 'Arcoplaza onboarding@resend.dev',
      to: 'aaff@centralenergyasesores.com',
      subject: 'Nueva solicitud web',
      html: `
        <h2>Nueva solicitud</h2>

        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Comentario:</strong> ${comentario}</p>
      `
    })

    console.log('RESEND RESPONSE:', data)

    return res.status(200).json({
      success: true
    })

  } catch (error) {

    console.error('ERROR REAL:', error)

    return res.status(500).json({
      error: 'Error enviando formulario'
    })
  }
}