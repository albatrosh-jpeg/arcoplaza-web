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

    const svg = `

<svg
  width="162"
  height="162"
  viewBox="0 0 162 162"
  xmlns="http://www.w3.org/2000/svg"
>

  <circle
    cx="81"
    cy="81"
    r="68"
    fill="white"
    stroke="#7DB7E8"
    stroke-width="6"
  />

  <text
    x="81"
    y="76"
    text-anchor="middle"
    dominant-baseline="middle"
    fill="#163A70"
    font-size="34"
    font-weight="300"
    font-family="Arial"
  >
    ${price}
  </text>

  <text
    x="81"
    y="108"
    text-anchor="middle"
    fill="#64748B"
    font-size="14"
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

    console.error(error)

    res.status(500).send(
      'Error generating image'
    )

  }

}