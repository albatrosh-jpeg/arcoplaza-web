import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

function formatPrice(value, unit) {
  return `${Number(value).toFixed(2).replace('.', ',')} ${unit}`
}

function TooltipContent({ active, payload, label, unit }) {
  if (!active || !payload?.length) {
    return null
  }

  return (
    <div className="rounded-[18px] border border-[#D8E3D8] bg-white px-4 py-3 shadow-xl">
      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#438B63]">
        {label}
      </div>
      <div className="mt-1 text-lg font-semibold text-[#08284A]">
        {formatPrice(payload[0].value, unit)}
      </div>
    </div>
  )
}

export default function DailyPriceChart({
  data = [],
  currentHour,
  unit = 'EUR/MWh'
}) {
  const currentLabel =
    typeof currentHour === 'number'
      ? `${String(currentHour).padStart(2, '0')}:00`
      : null

  return (
    <div className="h-[320px] w-full min-w-0">
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 18,
            left: 0,
            bottom: 8
          }}
        >
          <CartesianGrid
            stroke="#DDE5DF"
            strokeDasharray="4 4"
            vertical={false}
          />

          <XAxis
            dataKey="hour"
            tickLine={false}
            axisLine={false}
            interval={1}
            tick={{
              fill: '#607089',
              fontSize: 11
            }}
          />

          <YAxis
            tickLine={false}
            axisLine={false}
            width={46}
            tickFormatter={(value) => String(unit).includes('kWh') ? Number(value).toFixed(2) : Number(value).toFixed(0)}
            tick={{
              fill: '#607089',
              fontSize: 11
            }}
          />

          <Tooltip content={<TooltipContent unit={unit} />} />

          {
            currentLabel && (
              <ReferenceLine
                x={currentLabel}
                stroke="#4BAA72"
                strokeDasharray="5 5"
                label={{
                  value: 'Ahora',
                  position: 'top',
                  fill: '#2D7E51',
                  fontSize: 12,
                  fontWeight: 700
                }}
              />
            )
          }

          <Line
            type="monotone"
            dataKey="price"
            stroke="#0A66B7"
            strokeWidth={3}
            dot={{
              r: 3,
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
    </div>
  )
}
