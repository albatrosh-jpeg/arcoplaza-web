export default async function handler(
  req,
  res
) {

  try {

    const response = await fetch(
      'https://www.arcoplazaasesores.com/api/getMarketData'
    )

    const data = await response.json()

    const price =
      data.price || '--'

    const today =
      new Date().toLocaleDateString(
        'es-ES',
        {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        }
      )

    const svg = `

<svg width="1200" height="360" xmlns="http://www.w3.org/2000/svg">

  <rect
    width="100%"
    height="100%"
    fill="#F8F6F1"
  />

  <circle
    cx="900"
    cy="180"
    r="95"
    fill="white"
    stroke="#7DB7E8"
    stroke-width="12"
  />

  <text
    x="920"
    y="180"
    text-anchor="middle"
    fill="#163A70"
    font-size="54"
    font-weight="300"
    font-family="Arial"
  >
    ${price}
  </text>

  <text
    x="920"
    y="235"
    text-anchor="middle"
    fill="#64748B"
    font-size="24"
    font-family="Arial"
  >
    €/MWh
  </text>

</svg>
`

    res.setHeader(
      'Content-Type',
      'image/svg+xml'
    )

    res.status(200).send(svg)

  }

  catch (error) {

    res.status(500).send(
      'Error generating image'
    )

  }

}