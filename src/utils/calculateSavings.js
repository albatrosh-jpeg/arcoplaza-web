export default function calculateSavings({
  gasto,
  tipo,
  potencia
}) {

if (!gasto) return null

  const anual = Number(gasto) * 12

  let minFactor = 0.08
  let maxFactor = 0.18

  if (tipo === 'empresa') {
    minFactor = 0.12
    maxFactor = 0.28
  }

  if (tipo === 'comunidad') {
    minFactor = 0.15
    maxFactor = 0.32
  }

  if (Number(potencia) > 10) {
    maxFactor += 0.05
  }

  const min = Math.round(anual * minFactor)
  const max = Math.round(anual * maxFactor)

  return { min, max }
}