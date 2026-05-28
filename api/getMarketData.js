export default async function handler(
  req,
  res
) {

  try {

    const numericPrice = 48.00

    const price =
      numericPrice
        .toFixed(2)
        .replace('.', ',')

    return res.status(200).json({

      price,

      max:
        (numericPrice + 7)
          .toFixed(2)
          .replace('.', ','),

      min:
        (numericPrice - 6)
          .toFixed(2)
          .replace('.', ','),

      energy:
        (numericPrice * 12.4)
          .toFixed(0),

      history: [

        {
          week: 'S17',
          price: 68
        },

        {
          week: 'S18',
          price: 62
        },

        {
          week: 'S19',
          price: 58
        },

        {
          week: 'S20',
          price: 56
        },

        {
          week: 'S21',
          price: 52
        },

        {
          week: 'S22',
          price: 49
        },

        {
          week: 'S23',
          price: numericPrice
        }

      ]

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