export default function FeatureGrid({
  children,
  className = ''
}) {

  return (

    <div
      className={`
        grid
        md:grid-cols-2
        lg:grid-cols-4
        gap-6
        ${className}
      `}
    >

      {children}

    </div>

  )

}