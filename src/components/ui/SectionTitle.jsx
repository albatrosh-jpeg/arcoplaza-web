export default function SectionTitle({
  eyebrow,
  title,
  text,
  align = 'left',
  textColor = 'text-slate-600'
}) {

  return (

    <div className={`max-w-3xl mb-16 text-${align}`}>

      {eyebrow && (

        <div className="eyebrow text-corporateGreen mb-4">
          {eyebrow}
        </div>

      )}

      <h2
        className="
          section-title
          text-4xl
          lg:text-5xl
          mb-6
        "
      >
        {title}
      </h2>

      {text && (

        <p className={`body-lg ${textColor}`}>
          {text}
        </p>

      )}

    </div>

  )

}