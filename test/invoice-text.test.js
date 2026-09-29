import assert from 'node:assert/strict'
import test from 'node:test'

import {
  getInvoiceTextMetrics,
  isUsableInvoiceText
} from '../src/lib/invoice/isUsableInvoiceText.js'
import {
  OCR_REQUIRED,
  ocrInvoice
} from '../src/lib/invoice/ocrInvoice.js'

test('accepts sufficiently long document text without requiring OCR', () => {
  const text = `
    Documento de suministro electrico con informacion detallada del contrato.
    Este contenido incluye suficientes palabras y caracteres para procesarse
    mediante la capa de texto nativa del documento PDF sin recurrir a OCR.
  `

  assert.equal(isUsableInvoiceText(text), true)
})

test('requires OCR for empty text', () => {
  assert.equal(isUsableInvoiceText(''), false)
})

test('requires OCR for eight whitespace or noise characters', () => {
  const text = ' \n \n \n  '
  const metrics = getInvoiceTextMetrics(text)

  assert.equal(isUsableInvoiceText(text), false)
  assert.equal(metrics.alphanumericCharacters, 0)
  assert.equal(metrics.words, 0)
})

test('accepts realistic anonymous invoice text', () => {
  const text = `
    FACTURA DE ELECTRICIDAD
    Comercializadora: Energia Ejemplo
    Tarifa de acceso: 2.0TD
    Potencia contratada P1 4,600 kW P2 4,600 kW
    Consumo P1 82 kWh P2 45 kWh P3 61 kWh
    Periodo de facturacion 01/04/2026 - 30/04/2026
    Total factura 54,32 euros
  `

  assert.equal(isUsableInvoiceText(text), true)
})

test('returns a controlled error while no OCR provider is configured', async () => {
  await assert.rejects(
    () => ocrInvoice(Buffer.from('scan'), { provider: '' }),
    (error) => error.code === OCR_REQUIRED
  )
})
