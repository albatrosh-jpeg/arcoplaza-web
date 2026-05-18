export default function Card({
  children,
  className = ''
}) {

  return (

    <div
      className={`
        relative

        bg-white

        border
        border-[#ece7dd]

        rounded-[28px]

        transition-all
        duration-300

        hover:-translate-y-[2px]
        hover:shadow-[0_18px_50px_rgba(16,37,66,0.06)]

        ${className}
      `}
    >

      {children}

    </div>

  )

}