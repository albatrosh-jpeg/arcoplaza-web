export default function Card({
  children,
  className = '',
  hover = false
}) {

  return (

    <div
      className={`
        rounded-[24px]

        border
        border-[#e7e1d7]

        bg-white

        shadow-[0_4px_20px_rgba(15,23,42,0.04)]

        transition-all
        duration-300

        ${
          hover
            ? 'hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]'
            : ''
        }

        ${className}
      `}
    >

      {children}

    </div>

  )

}