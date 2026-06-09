import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

function TooltipContent({ active, payload, label }) {
  if (!active || !payload?.length) {
    return null
  }

  return (
    <div className="rounded-[16px] border border-[#D8E3D8] bg-white px-4 py-3 shadow-xl">
      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#438B63]">
        {label}
      </div>
      <div className="mt-1 text-lg font-semibold text-[#08284A]">
        {Number(payload[0].value).toFixed(2).replace('.', ',')} €/MWh
      </div>
    </div>
  )
}

export default function MarketOmipChart({ history = [] }) {
  return (
    <div className="card-top-accent rounded-[24px] border border-[#ECE7DD] bg-white p-6 shadow-[0_18px_50px_rgba(8,40,74,0.08)] lg:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#2D7E51]">
        Evolución semanal OMIP
      </p>

      <h3 className="mt-3 text-2xl font-semibold leading-tight text-[#08284A]">
        Tendencia de futuros eléctricos
      </h3>

      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#607089]">
        Referencia SPEL Base Week expresada en €/MWh para observar la evolución
        semanal del mercado a plazo.
      </p>

      <div className="mt-7 h-[280px] w-full min-w-0">
        {
          history.length ? (
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <LineChart
                data={history}
                margin={{
                  top: 14,
                  right: 18,
                  left: 0,
                  bottom: 4
                }}
              >
                <CartesianGrid
                  stroke="#DDE5DF"
                  strokeDasharray="4 4"
                  vertical={false}
                />

                <XAxis
                  dataKey="week"
                  tickLine={false}
                  axisLine={false}
                  tick={{
                    fill: '#607089',
                    fontSize: 12
                  }}
                />

                <YAxis
                  width={42}
                  tickLine={false}
                  axisLine={false}
                  tick={{
                    fill: '#607089',
                    fontSize: 12
                  }}
                />

                <Tooltip content={<TooltipContent />} />

                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#4BAA72"
                  strokeWidth={3.5}
                  dot={{
                    r: 4,
                    fill: '#4BAA72',
                    stroke: '#FFFFFF',
                    strokeWidth: 2
                  }}
                  activeDot={{
                    r: 6,
                    fill: '#4BAA72',
                    stroke: '#FFFFFF',
                    strokeWidth: 3
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex h-full items-center justify-center rounded-[18px] bg-[#F7FAF7] text-sm text-[#607089]">
              Sin datos OMIP disponibles.
            </div>
          )
        }
      </div>
    </div>
  )
}
