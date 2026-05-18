export default function Section({
  children,
  className = '',
  containerClassName = '',
  id,
  spacing = 'default'
}) {

  const spacingMap = {

    none: '',

    sm: 'py-16',

    default: 'py-24',

    lg: 'py-32'

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