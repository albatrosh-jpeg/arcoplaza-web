export default function Button({
  children,
  className = '',
  variant = 'primary',
  as = 'button',
  ...props
}) {

  const variants = {

    primary: `
      bg-corporate
      hover:bg-corporate-soft

      text-white

      border
      border-corporate
    `,

    secondary: `
      bg-surface-secondary

      border
      border-border-soft

      hover:border-corporateGreen/40

      text-corporate
    `

  }

  const Component = as

  return (

    <Component
      className={`
        inline-flex
        items-center
        justify-center

        px-4
        py-[11px]

        lg:px-7
        lg:py-4

        rounded-[18px]

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