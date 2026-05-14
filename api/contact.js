import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const config = {
  api: {
    bodyParser: false
  }
}

export default async function handler(req, res) {

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {

    const formData = await req.formData()

    const nombre = formData.get('nombre')
    const telefono = formData.get('telefono')
    const email = formData.get('email')
    const comentario = formData.get('comentario')

    await resend.emails.send({
      from: 'Arcoplaza <onboarding@resend.dev>',
      to: 'alvarcofer@gmail.com',
      subject: 'Nueva solicitud web',
      html: `
        <h2>Nueva solicitud</h2>

        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Comentario:</strong> ${comentario}</p>
      `
    })

    return res.status(200).json({ success: true })

  } catch (error) {

    console.error(error)

    return res.status(500).json({
      error: 'Error enviando formulario'
    })
  }
}