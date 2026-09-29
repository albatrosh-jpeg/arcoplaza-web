import assert from 'node:assert/strict'
import test from 'node:test'

import { extractInvoiceDataFromText } from '../src/lib/extractInvoiceData.js'
import { buildInvoiceDiagnosis } from '../src/lib/invoice/buildInvoiceDiagnosis.js'

test('detects the contextual retailer before unrelated company mentions', () => {
  const invoice = extractInvoiceDataFromText(`
    Informacion comparativa de Endesa.
    La energia comercializada por Energia Demo.
  `)

  assert.equal(invoice.company, 'Energia Demo')
})

test('detects the 2.0TD tariff', () => {
  const invoice = extractInvoiceDataFromText('Tarifa de acceso: 2.0TD')

  assert.equal(invoice.tariff, '2.0TD')
})

test('detects P1 and P2 contracted power with named periods', () => {
  const invoice = extractInvoiceDataFromText(`
    P1 Punta 6,900 KW
    P2 Valle 6,900 KW
  `)

  assert.deepEqual(invoice.periodPowers, {
    P1: '6,900',
    P2: '6,900'
  })
})

test('detects period consumption without mistaking prices for kWh', () => {
  const invoice = extractInvoiceDataFromText(`
    P1 Punta 30 kWh x 0,210485 euros/kWh
    P2 Llano 32 kWh x 0,121719 euros/kWh
    P3 Valle 59 kWh x 0,089781 euros/kWh
  `)

  assert.deepEqual(invoice.periodConsumption, {
    P1: '30',
    P2: '32',
    P3: '59'
  })
})

test('detects the invoice total from a natural-language phrase', () => {
  const invoice = extractInvoiceDataFromText(
    'El importe de su factura de 37,75 euros corresponde al periodo indicado.'
  )

  assert.equal(invoice.total, '37,75')
})

test('detects dates near a split billing-period label', () => {
  const invoice = extractInvoiceDataFromText(`
    Periodo fac turacion:
    Resumen del suministro y lecturas facturadas
    01/01/2026 31/01/2026
  `)

  assert.deepEqual(invoice.billingPeriod, {
    from: '01/01/2026',
    to: '31/01/2026'
  })
})

test('does not turn an absence of power excess into a positive warning', () => {
  const diagnosis = buildInvoiceDiagnosis({
    periodPowers: { P1: '4,600', P2: '4,600' },
    warnings: []
  })

  assert.ok(diagnosis.observations.some((observation) =>
    observation.includes('No se han identificado indicios de excesos')
  ))
  assert.ok(!diagnosis.observations.some((observation) =>
    observation.includes('aparecen indicios relacionados con excesos')
  ))
})

test('keeps confidence low and fields empty when text has insufficient data', () => {
  const invoice = extractInvoiceDataFromText(
    'Documento informativo sin datos de una factura electrica.'
  )
  const diagnosis = buildInvoiceDiagnosis(invoice)

  assert.equal(invoice.company, null)
  assert.equal(invoice.periodPowers, null)
  assert.equal(invoice.periodConsumption, null)
  assert.equal(invoice.total, null)
  assert.equal(invoice.billingPeriod, null)
  assert.equal(diagnosis.confidence.level, 'Baja')
  assert.equal(diagnosis.confidence.score, 0)
})
