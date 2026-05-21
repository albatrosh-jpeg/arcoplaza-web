export default function StatCard({
  label,
  value,
  description,
  className = ''
}) {

  return (

    <div
      className={`
        space-y-2
        ${className}
      `}
    >

      {label && (

        <div className="text-sm text-slate-500">
          {label}
        </div>

      )}

      <div
  className="
    text-[34px]
    sm:text-[42px]

    font-bold
    tracking-tight
    leading-none
  "
>
        {value}
      </div>

      {description && (

        <div className="text-sm text-slate-500">
          {description}
        </div>

      )}

    </div>

  )

}