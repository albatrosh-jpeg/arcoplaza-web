import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  Tooltip
} from 'recharts'


export default function OmipChart({ history }) {

  return (

    <div
      className="
        bg-[#FCFBF8]
        border
        border-[#ECE7DD]
        rounded-[28px]
        p-8
        mt-10
      "
    >

      <div
        className="
          text-[12px]
          tracking-[0.22em]
          uppercase
          text-[#7C8795]
          font-semibold
          mb-6
        "
      >
        Evolución semanal OMIP
      </div>

      <div
  className="
    w-full
    h-[280px]
    mt-4
    min-w-0
  "
>

        <ResponsiveContainer
          width="99%"
          height={280}
        >
          <LineChart data={history}>

            <XAxis
              dataKey="week"
              tickLine={false}
              axisLine={false}
              tick={{
                fill: '#7C8795',
                fontSize: 12
              }}
            />

            <Tooltip
              contentStyle={{
                background: '#FFFFFF',
                border: '1px solid #ECE7DD',
                borderRadius: '14px',
                fontSize: '13px',
                color: '#18375D'
              }}
            />

            <Line
              type="monotone"
              dataKey="price"
              stroke="#7DB7E8"
              strokeWidth={3.5}
              dot={{
                r: 4,
                fill: '#7DB7E8'
              }}
              activeDot={{
                r: 6
              }}
            />
            
          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>

  )

}