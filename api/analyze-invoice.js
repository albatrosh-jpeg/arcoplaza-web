import formidable from 'formidable'
import fs from 'fs/promises'
import extractInvoiceData from '../src/lib/extractInvoiceData.js'
import { buildInvoiceDiagnosis } from '../src/lib/invoice/buildInvoiceDiagnosis.js'

export const config = {
  api: {
    bodyParser: false
  }
}

const MAX_FILE_SIZE = 8 * 1024 * 1024

function parseForm(req) {
  const form = formidable({
    multiples: false,
    maxFiles: 1,
    maxFileSize: MAX_FILE_SIZE,
    allowEmptyFiles: false
  })

  return new Promise((resolve, reject) => {
    form.parse(req, (error, fields, files) => {
      if (error) {
        reject(error)
        return
      }

      resolve({ fields, files })
    })
  })
}

function getUploadedFile(files) {
  const candidate =
    files.invoice ||
    files.factura ||
    files.file

  return Array.isArray(candidate)
    ? candidate[0]
    : candidate
}

function isPdf(file) {
  const mimetype = String(file?.mimetype || '').toLowerCase()
  const name = String(file?.originalFilename || '').toLowerCase()

  return mimetype === 'application/pdf' || name.endsWith('.pdf')
}

async function cleanup(file) {
  if (!file?.filepath) return

  try {
    await fs.unlink(file.filepath)
  }
  catch {
    // Temporary files may already be removed by the platform.
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Metodo no permitido'
    })
  }

  let uploadedFile = null

  try {
    const { files } = await parseForm(req)
    uploadedFile = getUploadedFile(files)

    if (!uploadedFile?.filepath) {
      return res.status(400).json({
        error: 'No se ha recibido ninguna factura.'
      })
    }

    if (!isPdf(uploadedFile)) {
      return res.status(400).json({
        error: 'Solo se admiten facturas en formato PDF.'
      })
    }

    if (uploadedFile.size > MAX_FILE_SIZE) {
      return res.status(413).json({
        error: 'El PDF supera el tamano maximo permitido de 8MB.'
      })
    }

    const fileBuffer = await fs.readFile(uploadedFile.filepath)
    const invoiceData = await extractInvoiceData(fileBuffer)

    if (!invoiceData) {
      return res.status(422).json({
        error: 'No hemos podido leer datos suficientes de esta factura.'
      })
    }

    const diagnosis = buildInvoiceDiagnosis(invoiceData)

    return res.status(200).json({
      success: true,
      diagnosis
    })
  }
  catch (error) {
    const statusCode =
      error?.code === 'LIMIT_FILE_SIZE' ||
      error?.httpCode === 413
        ? 413
        : 500

    return res.status(statusCode).json({
      error: statusCode === 413
        ? 'El PDF supera el tamano maximo permitido de 8MB.'
        : 'No hemos podido analizar la factura. Intentalo con otro PDF.'
    })
  }
  finally {
    await cleanup(uploadedFile)
  }
}
