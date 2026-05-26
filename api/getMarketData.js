export default async function handler(
  req,
  res
) {

  try {

    const response = await fetch(
      'https://www.omip.pt/es'
    )

    const html = await response.text()

const today = new Date()

const startOfYear =
  new Date(today.getFullYear(), 0, 1)

const days =
  Math.floor(
    (today - startOfYear) /
    (24 * 60 * 60 * 1000)
  )

const week =
  Math.ceil(
    (days + startOfYear.getDay() + 1) / 7
  )

const weekCode =
  `Wk${String(week).padStart(2, '0')}-${String(today.getFullYear()).slice(-2)}`

const regex = new RegExp(
  `${weekCode}[\\s\\S]*?€([\\d.]+)`,
  'i'
)

const match = html.match(regex)

    if (!match) {

      return res.status(500).json({
        error: 'No se pudo obtener OMIP'
      })

    }

    return res.status(200).json({

      price: match[1].replace('.', ','),
      max: null,
      min: null,
      energy: null

    })

  }

  catch (error) {

    console.error(error)

    return res.status(500).json({

      error: 'Error obteniendo OMIP'

    })

  }

}