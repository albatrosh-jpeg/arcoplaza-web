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
  className={`
    font-semibold
    tracking-tight
    leading-none

    ${
      value.length > 18
        ? 'text-[22px] sm:text-[26px]'
        : value.length > 12
          ? 'text-[26px] sm:text-[30px]'
          : 'text-[20px] sm:text-[24px]'
    }
  `}
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