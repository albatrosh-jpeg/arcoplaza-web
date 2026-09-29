export const OCR_REQUIRED = 'OCR_REQUIRED'

export class OcrRequiredError extends Error {
  constructor() {
    super('This PDF requires OCR, but no OCR provider is configured.')
    this.name = 'OcrRequiredError'
    this.code = OCR_REQUIRED
  }
}

export async function ocrInvoice(_buffer, options = {}) {
  const provider = options.provider ?? process.env.INVOICE_OCR_PROVIDER

  if (!provider) {
    throw new OcrRequiredError()
  }

  // Provider implementations will process the buffer in memory and return text.
  throw new OcrRequiredError()
}
