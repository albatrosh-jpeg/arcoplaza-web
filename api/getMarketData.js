export default async function handler(
  req,
  res
) {

  try {

    const response = await fetch(
      'https://www.omip.pt/es'
    )

    const html = await response.text()

/api/getMarketData

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