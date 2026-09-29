const MIN_NORMALIZED_CHARACTERS = 80
const MIN_ALPHANUMERIC_CHARACTERS = 50
const MIN_WORDS = 10

export function getInvoiceTextMetrics(text) {
  const normalized = String(text || '')
    .replace(/\s+/g, ' ')
    .trim()

  const alphanumericCharacters = (
    normalized.match(/[\p{L}\p{N}]/gu) || []
  ).length
  const words = normalized.match(/[\p{L}\p{N}]{2,}/gu) || []

  return {
    normalizedCharacters: normalized.length,
    alphanumericCharacters,
    words: words.length
  }
}

export function isUsableInvoiceText(text) {
  const metrics = getInvoiceTextMetrics(text)

  return (
    metrics.normalizedCharacters >= MIN_NORMALIZED_CHARACTERS &&
    metrics.alphanumericCharacters >= MIN_ALPHANUMERIC_CHARACTERS &&
    metrics.words >= MIN_WORDS
  )
}
