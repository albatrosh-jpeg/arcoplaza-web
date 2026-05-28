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

<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">

  <rect
    width="100%"
    height="100%"
    fill="#F8F6F1"
  />

  <text
    x="80"
    y="100"
    fill="#64748B"
    font-size="24"
    font-family="Arial"
    letter-spacing="4"
  >
    MERCADO ELÉCTRICO IBÉRICO
  </text>

  <text
    x="80"
    y="200"
    fill="#163A70"
    font-size="78"
    font-family="Arial"
  >
    Referencia semanal OMIP
  </text>

  <text
    x="80"
    y="320"
    fill="#64748B"
    font-size="36"
    font-family="Arial"
  >
    SPEL Base Week
  </text>

  <text
    x="80"
    y="380"
    fill="#94A3B8"
    font-size="28"
    font-family="Arial"
  >
    ${today}
  </text>

  <circle
    cx="920"
    cy="315"
    r="140"
    fill="white"
    stroke="#7DB7E8"
    stroke-width="12"
  />

  <text
    x="920"
    y="305"
    text-anchor="middle"
    fill="#163A70"
    font-size="82"
    font-family="Arial"
  >
    ${price}
  </text>

  <text
    x="920"
    y="360"
    text-anchor="middle"
    fill="#64748B"
    font-size="32"
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