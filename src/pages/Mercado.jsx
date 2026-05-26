import { useEffect, useState } from 'react'

export default function Mercado() {

  const [data, setData] = useState(null)

  useEffect(() => {

    fetch('/api/getMarketData')
      .then(res => res.json())
      .then(setData)

  }, [])

  return (

    <div className="
      min-h-screen
      bg-[#F8F6F1]
      px-6
      py-20
    ">

      <div className="
        max-w-3xl
        mx-auto
      ">

        <div className="
          bg-white
          border
          border-[#ECE7DD]
          rounded-[28px]
          p-12
          shadow-sm
        ">

          <div className="
            text-xs
            tracking-[0.25em]
            uppercase
            text-slate-500
            mb-3
          ">
            Mercado diario España
          </div>

          <div className="
            text-sm
            text-slate-400
            mb-10
          ">
            {
              new Date().toLocaleDateString(
                'es-ES',
                {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                }
              )
            }
          </div>

          <div className="
            w-[180px]
            h-[180px]
            rounded-full
            border-[8px]
            border-[#7DB7E8]
            mx-auto
            flex
            items-center
            justify-center
            shadow-inner
            mb-12
          ">

            <div className="text-center">

              <div className="
                text-6xl
                font-light
                text-[#163A70]
                leading-none
              ">
                {
                  data?.price || '--'
                }
              </div>

              <div className="
                text-slate-500
                mt-2
              ">
                €/MWh
              </div>

            </div>

          </div>

          <div className="
            grid
            grid-cols-3
            gap-6
            text-center
          ">

            <div>

              <div className="
                text-xs
                uppercase
                tracking-wider
                text-slate-400
                mb-2
              ">
                ▲ Máximo
              </div>

              <div className="
                text-2xl
                font-semibold
                text-[#163A70]
              ">
                {
                  data?.max || '--'
                }
              </div>

            </div>

            <div>

              <div className="
                text-xs
                uppercase
                tracking-wider
                text-slate-400
                mb-2
              ">
                ▼ Mínimo
              </div>

              <div className="
                text-2xl
                font-semibold
                text-[#163A70]
              ">
                {
                  data?.min || '--'
                }
              </div>

            </div>

            <div>

              <div className="
                text-xs
                uppercase
                tracking-wider
                text-slate-400
                mb-2
              ">
                Energía
              </div>

              <div className="
                text-2xl
                font-semibold
                text-[#163A70]
              ">
                {
                  data?.energy || '--'
                }
              </div>

              <div className="
                text-xs
                text-slate-400
              ">
                GWh
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  )

}