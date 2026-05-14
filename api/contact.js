import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {

    await resend.emails.send({
      from: 'Arcoplaza <aaff@centralenergyasesores.com>',
      to: 'aaff@centralenergyasesores.com',
      subject: 'Nueva solicitud desde Arcoplaza',
      html: `
        <h2>Nueva solicitud</h2>

        <p><strong>Nombre:</strong> ${req.body.nombre}</p>
        <p><strong>Teléfono:</strong> ${req.body.telefono}</p>
        <p><strong>Email:</strong> ${req.body.email}</p>
        <p><strong>Comentario:</strong> ${req.body.comentario}</p>
      `
    })

    return res.status(200).json({ success: true })

  } catch (error) {

    return res.status(500).json({ error: error.message })

  }
}