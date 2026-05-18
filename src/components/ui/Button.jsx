export default function Button({
  children,
  className = '',
  variant = 'primary',
  as = 'button',
  ...props
}) {

  const variants = {

    primary: `
      bg-[#081b44]
      hover:bg-[#102a63]
      text-white
      border
      border-[#081b44]
    `,

    secondary: `
      border
      border-[#d7d0c4]
      hover:border-slate-400
      bg-[#fcfbf8]/70
      text-corporate
      backdrop-blur-sm
    `

  }

  const Component = as

  return (

    <Component
      className={`
        inline-flex
        items-center
        justify-center

        px-7
        py-4

        rounded-xl

        button-text

        transition-all
        duration-300

        hover:-translate-y-[1px]

        ${variants[variant]}
        ${className}
      `}
      {...props}
    >

      {children}

    </Component>

  )

}