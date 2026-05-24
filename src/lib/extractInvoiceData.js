import pdf from 'pdf-parse'

export default async function extractInvoiceData(buffer) {

  try {

    const data = await pdf(buffer)

    const text = data.text

    const result = {

      company: null,
      tariff: null,
      power: null,
      total: null,
      warnings: []

    }

    // COMERCIALIZADORA

    if (/iberdrola/i.test(text)) {
      result.company = 'Iberdrola'
    }

    if (/endesa/i.test(text)) {
      result.company = 'Endesa'
    }

    if (/naturgy/i.test(text)) {
      result.company = 'Naturgy'
    }

    // TARIFA

    const tariffMatch =
      text.match(/(2\.0TD|3\.0TD|6\.1TD)/i)

    if (tariffMatch) {
      result.tariff = tariffMatch[1]
    }

    // POTENCIA

    const powerMatch =
      text.match(
        /Potencia contratada.*?(\d+[.,]?\d*)/i
      )

    if (powerMatch) {
      result.power = powerMatch[1]
    }

    // TOTAL FACTURA

    const totalMatch =
      text.match(
        /Total(?:\s+factura)?\s*[:€]?\s*(\d+[.,]\d+)/i
      )

    if (totalMatch) {
      result.total = totalMatch[1]
    }

    // WARNINGS

    const numericPower =
      parseFloat(
        result.power?.replace(',', '.')
      )

    if (numericPower > 15) {

      result.warnings.push(
        'Posible potencia sobredimensionada'
      )

    }

    return result

  } catch (error) {

    console.error(error)

    return null

  }

}