export default function Card({
  children,
  className = ''
}) {

  return (

    <div
      className={`
        relative

        bg-surface-elevated

        border
        border-border-soft

        rounded-[24px]

        transition-all
        duration-300

        hover:-translate-y-[2px]

        hover:shadow-[0_18px_50px_rgba(16,37,66,0.05)]

        ${className}
      `}
    >

      {children}

    </div>

  )

}