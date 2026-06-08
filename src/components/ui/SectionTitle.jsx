export default function SectionTitle({
  eyebrow,
  title,
  text,
  align = 'left'
}) {

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }

  return (

    <div className={alignClasses[align] || alignClasses.left}>

      {eyebrow && (

        <div
          className="
            eyebrow
            text-corporateGreen
            mb-4
          "
        >
          {eyebrow}
        </div>

      )}

      <h2
        className="
          heading-h2
          max-w-[820px]
        "
      >
        {title}
      </h2>

      {text && (

        <p
          className="
            mt-6
            text-lg
            leading-relaxed
            text-text-secondary
            max-w-[680px]
          "
        >
          {text}
        </p>

      )}

    </div>

  )

}
