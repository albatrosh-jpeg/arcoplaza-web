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

        <div className="text-[#1faa59] font-semibold uppercase tracking-wider text-sm mb-4">
          {eyebrow}
        </div>

      )}

      <h2 className="text-4xl lg:text-5xl font-black text-corporate leading-tight mb-6">
        {title}
      </h2>

      {text && (

        <p className={`${textColor} text-lg leading-relaxed`}>
          {text}
        </p>

      )}

    </div>

  )

}