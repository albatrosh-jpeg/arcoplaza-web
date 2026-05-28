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
    y="160"
    fill="#64748B"
    font-size="36"
    font-family="Arial"
  >
    SPEL Base Week
  </text>

  <text
    x="80"
    y="220"
    fill="#94A3B8"
    font-size="28"
    font-family="Arial"
  >
    ${today}
  </text>

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
    y="170"
    text-anchor="middle"
    fill="#163A70"
    font-size="54"
    font-family="Arial"
  >
    ${price}
  </text>

  <text
    x="920"
    y="220"
    text-anchor="middle"
    fill="#64748B"
    font-size="24"
    font-family="Arial"
  >
    €/MWh
  </text>

  <text
  x="80"
  y="320"
  fill="#94A3B8"
  font-size="18"
  font-family="Arial"
  >
    Datos de referencia · OMIP
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