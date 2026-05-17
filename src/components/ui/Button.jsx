export default function Button({
  children,
  className = '',
  variant = 'primary',
  as = 'button',
  ...props
}) {

  const variants = {

    primary: `
      bg-corporateGreen
      hover:bg-corporateGreen-dark
      text-white
    `,

    secondary: `
      border
      border-slate-300
      hover:border-slate-500
      bg-[#fcfbf8]/50
      text-corporate
    `

  }
const Component = as
  return (

    <Component
      className={`
        px-7
        py-4
        rounded-xl
        font-semibold
        transition-colors
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >

      {children}

    </Component>

  )

}