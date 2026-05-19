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

      const nombre = Array.isArray(fields.nombre)
        ? fields.nombre[0]
        : fields.nombre

      const telefono = Array.isArray(fields.telefono)
        ? fields.telefono[0]
        : fields.telefono

      const email = Array.isArray(fields.email)
        ? fields.email[0]
        : fields.email

      const comentario = Array.isArray(fields.comentario)
        ? fields.comentario[0]
        : fields.comentario

      const uploadedFiles = Array.isArray(files.factura)
        ? files.factura
        : files.factura
          ? [files.factura]
          : []

      let attachments = []

      for (const file of uploadedFiles) {

        const fileBuffer = fs.readFileSync(file.filepath)

        attachments.push({
          filename: file.originalFilename,
          content: fileBuffer
        })

      }

      await resend.emails.send({

        from: 'web@arcoplazaasesores.com',

        to: 'contacto@arcoplazaasesores.com',

        subject: `Nueva solicitud · ${nombre}`,

        html: `
          <h2>Nueva solicitud</h2>

          <p><strong>Nombre:</strong> ${nombre}</p>

          <p><strong>Teléfono:</strong> ${telefono}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Comentario:</strong> ${comentario}</p>

          <p><strong>Archivos adjuntos:</strong> ${attachments.length}</p>
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