import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const config = {
  api: {
    bodyParser: false
  }
}

export default async function handler(req, res) {

  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed'
    })
  }

  try {

    const chunks = []

    for await (const chunk of req) {
      chunks.push(chunk)
    }

    const buffer = Buffer.concat(chunks)

    const boundary = req.headers['content-type'].split('boundary=')[1]

    const parts = buffer
      .toString()
      .split(`--${boundary}`)

    let nombre = ''
    let telefono = ''
    let email = ''
    let comentario = ''

    parts.forEach((part) => {

      if (part.includes('name="nombre"')) {
        nombre = part.split('\r\n\r\n')[1]?.trim()
      }

      if (part.includes('name="telefono"')) {
        telefono = part.split('\r\n\r\n')[1]?.trim()
      }

      if (part.includes('name="email"')) {
        email = part.split('\r\n\r\n')[1]?.trim()
      }

      if (part.includes('name="comentario"')) {
        comentario = part.split('\r\n\r\n')[1]?.trim()
      }

    })

    await resend.emails.send({
      from: 'web@arcoplazaasesores.com',
      to: 'aaff@centralenergyasesores.com',
      subject: 'Nueva solicitud web Arcoplaza',
      html: `
        <h2>Nueva solicitud desde la web</h2>

        <p><strong>Nombre:</strong> ${nombre}</p>

        <p><strong>Teléfono:</strong> ${telefono}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Comentario:</strong> ${comentario}</p>
      `
    })

    return res.status(200).json({
      success: true
    })

  } catch (error) {

    console.error(error)

    return res.status(500).json({
      error: 'Error enviando formulario'
    })
  }
}