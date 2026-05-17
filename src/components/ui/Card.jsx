export default function Card({
  children,
  className = ''
}) {

  return (

    <div
      className={`
        bg-[#fcfbf8]
        border
        border-[#d7d0c4]
        rounded-[32px]
        p-10
        transition-all
        duration-300
        ${className}
      `}
    >

      {children}

    </div>

  )

}