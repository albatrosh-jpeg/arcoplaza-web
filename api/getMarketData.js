export default async function handler(
  req,
  res
) {

  function getISOWeek(date) {

    const target = new Date(date)

    const dayNr =
      (date.getDay() + 6) % 7

    target.setDate(
      target.getDate() - dayNr + 3
    )

    const firstThursday =
      target.valueOf()

    target.setMonth(0, 1)

    if (target.getDay() !== 4) {

      target.setMonth(
        0,
        1 + (
          (4 - target.getDay()) + 7
        ) % 7
      )

    }

    return (
      1 + Math.ceil(
        (
          firstThursday -
          target
        ) / 604800000
      )
    )

  }

  try {

    const response = await fetch(
      'https://www.omip.pt/es'
    )

    const html = await response.text()

    const today = new Date()

    const week =
      getISOWeek(today)

    const weekCode =
      `Wk${String(week).padStart(2, '0')}-${String(today.getFullYear()).slice(-2)}`

const match = html.match(
  /Wk23-26[\s\S]{0,800}?€([\d.]+)/i
)
    if (!match) {

      return res.status(500).json({

        error:
          'No se pudo obtener OMIP'

      })

    }

    return res.status(200).json({

      price:
        match[1].replace('.', ','),

      max: null,
      min: null,
      energy: null

    })

  }

  catch (error) {

    console.error(error)

    return res.status(500).json({

      error:
        'Error obteniendo OMIP'

    })

  }

}