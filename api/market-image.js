import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge'
}

async function getMarketPrice() {

  const response = await fetch(
    'https://www.arcoplazaasesores.com/api/getMarketData'
  )

  const data = await response.json()

  return data.price || '--'

}

export default async function handler() {

  const price = await getMarketPrice()

  const today =
    new Date().toLocaleDateString(
      'es-ES',
      {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }
    )

  return new ImageResponse(

    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          background: '#F8F6F1',
          color: '#163A70',
          fontFamily: 'sans-serif',
          padding: '70px',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >

        <div
          style={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >

          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: '#64748B',
              marginBottom: 18
            }}
          >
            Mercado eléctrico ibérico
          </div>

          <div
            style={{
              fontSize: 84,
              lineHeight: 1,
              maxWidth: '850px',
              fontWeight: 300
            }}
          >
            Referencia semanal OMIP
          </div>

        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >

          <div
            style={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >

            <div
              style={{
                fontSize: 28,
                color: '#64748B',
                marginBottom: 16
              }}
            >
              SPEL Base Week
            </div>

            <div
              style={{
                fontSize: 26,
                color: '#94A3B8'
              }}
            >
              {today}
            </div>

          </div>

          <div
            style={{
              width: 280,
              height: 280,
              borderRadius: 999,
              border: '12px solid #7DB7E8',
              background: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow:
                'inset 0 0 0 16px #EDF5FC'
            }}
          >

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >

              <div
                style={{
                  fontSize: 88,
                  lineHeight: 1,
                  fontWeight: 300
                }}
              >
                {price}
              </div>

              <div
                style={{
                  marginTop: 12,
                  fontSize: 28,
                  color: '#64748B'
                }}
              >
                €/MWh
              </div>

            </div>

          </div>

        </div>

      </div>
    ),

    {
      width: 1200,
      height: 630
    }

  )

}