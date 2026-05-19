export default function Section({
  children,
  className = '',
  containerClassName = '',
  id,
  spacing = 'default'
}) {

const spacingMap = {

  none: '',

  sm: 'py-6 sm:py-10',

  default: 'py-8 sm:py-14 lg:py-20',

  lg: 'py-12 sm:py-20 lg:py-28'

}

  return (

    <section
      id={id}
      className={className}
    >

      <div
        className={`
          max-w-7xl
          mx-auto
          px-6

          ${spacingMap[spacing]}

          ${containerClassName}
        `}
      >

        {children}

      </div>

    </section>

  )

}