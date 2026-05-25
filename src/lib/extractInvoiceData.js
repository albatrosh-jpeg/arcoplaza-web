import pdfParse from 'pdf-parse/lib/pdf-parse.js'

export default async function extractInvoiceData(buffer) {

  try {

    const data = await pdfParse(buffer)

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
    /Potencia punta:\s*(\d+[.,]?\d*)\s*kW/i
  )

const valleyMatch =
  text.match(
    /Potencia valle:\s*(\d+[.,]?\d*)\s*kW/i
  )

if (powerMatch || valleyMatch) {

  result.power = {

    punta: powerMatch
      ? powerMatch[1]
      : null,

    valle: valleyMatch
      ? valleyMatch[1]
      : null

  }

}

const maxDemandMatch =
  text.match(
    /Potencias máximas demandadas.*?(\d+[.,]?\d*)\s*kW.*?(\d+[.,]?\d*)\s*kW/is
  )

if (maxDemandMatch) {

  result.maxDemand = {

    punta: maxDemandMatch[1],
    valle: maxDemandMatch[2]

  }

}

const contracted =
  parseFloat(
    result.power?.punta?.replace(',', '.')
  )

const demanded =
  parseFloat(
    result.maxDemand?.punta?.replace(',', '.')
  )

if (
  contracted &&
  demanded &&
  contracted > demanded * 2
) {

  result.warnings.push(
    'Posible exceso de potencia contratada'
  )

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
    result.power?.punta?.replace(',', '.')
  )

if (numericPower > 15) {

  result.warnings.push(
    'Potencia contratada elevada'
  )

}
    return result

  } catch (error) {

    console.error(error)

    return null

  }

}