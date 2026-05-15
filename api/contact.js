import { Resend } from 'resend'
import formidable from 'formidable'
import fs from 'fs'

export const config = {
  api: {
    bodyParser: false
  }
}

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {

  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed'
    })
  }

  const form = formidable({})

  form.parse(req, async (err, fields, files) => {

    if (err) {
      console.error(err)

      return res.status(500).json({
        error: 'Error procesando formulario'
      })
    }

    try {

      const factura = files.factura?.[0]

      let attachments = []

      if (factura) {

        const fileBuffer = fs.readFileSync(factura.filepath)

        attachments.push({
          filename: factura.originalFilename,
          content: fileBuffer
        })
      }

      await resend.emails.send({
        from: 'web@arcoplazaasesores.com',
        to: 'aaff@centralenergyasesores.com',
        subject: 'Nueva solicitud web',
        html: `
          <h2>Nueva solicitud</h2>

          <p><strong>Nombre:</strong> ${fields.nombre}</p>
          <p><strong>Teléfono:</strong> ${fields.telefono}</p>
          <p><strong>Email:</strong> ${fields.email}</p>
          <p><strong>Comentario:</strong> ${fields.comentario}</p>
        `,
        attachments
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
  })
}