export default function Section({
  children,
  className = '',
  containerClassName = '',
  id
}) {

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
          py-24
          ${containerClassName}
        `}
      >

        {children}

      </div>

    </section>

  )

}