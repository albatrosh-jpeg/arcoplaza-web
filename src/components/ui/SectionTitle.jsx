export default function SectionTitle({
  eyebrow,
  title,
  text,
  align = 'left',
  textColor = 'text-text-secondary'
}) {

  return (

    <div
      className={`
        max-w-3xl

        mb-10
        lg:mb-16

        text-${align}
      `}
    >

      {eyebrow && (

        <div className="eyebrow text-corporateGreen mb-4">
          {eyebrow}
        </div>

      )}

      <h2
        className="
          section-title

          text-[36px]
          leading-[0.98]

          sm:text-[42px]

          lg:text-5xl

          mb-5
          lg:mb-6
        "
      >
        {title}
      </h2>

      {text && (

        <p
          className={`
            body-md
            lg:body-lg

            ${textColor}
          `}
        >
          {text}
        </p>

      )}

    </div>

  )

}