export default async function handler(
  req,
  res
) {

  try {

    const response = await fetch(
      'https://www.omip.pt/es'
    )

    const html = await response.text()
    console.log(
      html.slice(0, 10000)
    )

    const match = html.match(
      /SPEL Base Weekly[\s\S]*?(\d+,\d+)/i
    )

    if (!match) {

      return res.status(500).json({
        error: 'No se pudo obtener OMIE'
      })

    }

      return res.status(200).json({

        price: match[1],
        max: '167,20',
        min: '-0,39',
        energy: '484'

      })

  }

  catch (error) {

    console.error(error)

    return res.status(500).json({

      error: 'Error obteniendo OMIE'

    })

  }

}