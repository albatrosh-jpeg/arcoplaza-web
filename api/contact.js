import { Resend } from 'resend'
import formidable from 'formidable'
import fs from 'fs'
import extractInvoiceData from '../src/lib/extractInvoiceData.js'

export const config = {
  api: {
    bodyParser: false
  }
}

const resend = new Resend(const resend = new Resend(
  're_BT1n2qww_KSHsQsmFPt8u8hXipb3LV248'
))

export default async function handler(req, res) {

  if (req.method !== 'POST') {

    return res.status(405).json({
      error: 'Method not allowed'
    })

  }

  const form = formidable({
  multiples: true
})

  form.parse(req, async (err, fields, files) => {

    if (err) {

      console.error('FORM PARSE ERROR:', err)

      return res.status(500).json({
        error: 'Error procesando formulario'
      })

    }

    try {

      console.log(
        'RESEND_API_KEY:',
        const resend = new Resend(
  're_BT1n2qww_KSHsQsmFPt8u8hXipb3LV248'
)
          ? 'OK'
          : 'MISSING'
      )

      const nombre = Array.isArray(fields.nombre)
        ? fields.nombre[0]
        : fields.nombre

      const telefono = Array.isArray(fields.telefono)
        ? fields.telefono[0]
        : fields.telefono

      const email = Array.isArray(fields.email)
        ? fields.email[0]
        : fields.email

      const comentario = Array.isArray(
        fields.comentario || fields.mensaje
)
      ? (fields.comentario || fields.mensaje)[0]
      : (fields.comentario || fields.mensaje)

      const uploadedFiles = Array.isArray(files.factura)
        ? files.factura
        : files.factura
          ? [files.factura]
          : []

      const attachments = []

      let invoiceAnalysis = []

      let analysisData = []
      
      for (const file of uploadedFiles) {

        if (!file?.filepath) continue

        const fileBuffer = fs.readFileSync(file.filepath)

        attachments.push({
          filename: file.originalFilename || 'archivo',
          content: fileBuffer
        })

const invoiceData =
  await extractInvoiceData(fileBuffer)

console.log(invoiceData)
analysisData.push(invoiceData)

if (invoiceData) {

  invoiceAnalysis.push(`

    <div style="
      margin-bottom: 18px;
      padding: 14px;
      border: 1px solid #e5e7eb;
      border-radius: 10px;
    ">

      <strong>Factura analizada</strong><br/><br/>

      Comercializadora:
      ${invoiceData.company || 'No detectada'}
      <br/>

      Tarifa:
      ${invoiceData.tariff || 'No detectada'}
      <br/>

      Potencia punta:
      ${invoiceData.power?.punta || 'No detectada'}
      <br/>

      Potencia valle:
      ${invoiceData.power?.valle || 'No detectada'}
      <br/>

      Total:
      ${invoiceData.total || 'No detectado'}
      <br/><br/>

      Warnings:
      ${
        invoiceData.warnings?.length
          ? invoiceData.warnings.join(', ')
          : 'Sin alertas'
      }

    </div>

  `)

}
      }

const response = await resend.emails.send({

  from: 'contacto@arcoplazaasesores.com',

  to: 'contacto@arcoplazaasesores.com',

  replyTo: email,

  subject: `Nueva solicitud · ${nombre || 'Sin nombre'}`,

  html: `
    <h2>Nueva solicitud</h2>

    <p><strong>Nombre:</strong> ${nombre || '-'}</p>

    <p><strong>Teléfono:</strong> ${telefono || '-'}</p>

    <p><strong>Email:</strong> ${email || '-'}</p>

    <p><strong>Comentario:</strong> ${comentario || '-'}</p>

    <p><strong>Archivos adjuntos:</strong> ${attachments.length}</p>
    
    <h3>Análisis preliminar</h3>

${invoiceAnalysis.join('')}
  `,

  attachments

})

console.log('RESEND RESPONSE:', response)

if (response.error) {

  console.error(response.error)

  return res.status(500).json({
    error: response.error.message
  })

}

await resend.emails.send({

  from: 'contacto@arcoplazaasesores.com',

  to: email,

  subject: 'Hemos recibido tu solicitud · Arcoplaza Asesores',

html: `

  <div style="
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #1e293b;
    max-width: 640px;
    margin: 0 auto;
    padding: 32px;
  ">

    <img
      src="https://www.arcoplazaasesores.com/logo-arcoplaza.png"
      alt="Arcoplaza Asesores"
      style="
        width: 180px;
        margin-bottom: 32px;
      "
    />

    <h2 style="
      font-size: 28px;
      margin-bottom: 20px;
      color: #163a70;
    ">
      Hemos recibido tu solicitud.
    </h2>

    <p>
      Hola ${nombre || ''},
    </p>

    <p>
      Hemos recibido correctamente tu solicitud de revisión energética y la documentación adjunta.
    </p>

    <p>
      Nuestro equipo revisará la información y se pondrá en contacto contigo lo antes posible.
    </p>

    <div style="
      margin-top: 40px;
      padding-top: 24px;
      border-top: 1px solid #e2e8f0;
      font-size: 14px;
      color: #64748b;
    ">

      <strong>Arcoplaza Asesores</strong><br/>
      Asesores energéticos independientes<br/>
      www.arcoplazaasesores.com

    </div>

  </div>

`
})

return res.status(200).json({

  success: true,

  analysis: analysisData

})

    } catch (error) {

      console.error('EMAIL ERROR:', error)

      return res.status(500).json({
        error: 'Error enviando email'
      })

    }

  })

}