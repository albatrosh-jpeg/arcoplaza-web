const spacingMap = {
  normal: 'py-14 lg:py-20',
  tight: 'py-10 lg:py-14',
  hero: '',
}

export default function Section({
  children,
  id,
  className = '',
  containerClassName = '',
  spacing = 'normal'
}) {

  return (

    <section
      id={id}
      className={className}
    >

      <div
        className={`
          max-w-[1280px]
          mx-auto

          px-5
          lg:px-8

          ${spacingMap[spacing]}

          ${containerClassName}
        `}
      >

        {children}

      </div>

    </section>

  )

}