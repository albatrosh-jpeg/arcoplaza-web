export default function Badge({
  children,
  className = ''
}) {

  return (

    <div
      className={`
        inline-flex
        items-center
        gap-2
        bg-[#fcfbf8]/70
        backdrop-blur
        border
        border-[#d7d0c4]
        px-4
        py-2
        rounded-full
        text-sm
        font-medium
        text-corporate
        ${className}
      `}
    >

      {children}

    </div>

  )

}