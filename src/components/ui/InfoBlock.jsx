export default function InfoBlock({
  title,
  text,
  titleClassName = '',
  textClassName = ''
}) {

  return (

    <div>

      <h3
        className={`
          text-2xl
          font-black
          leading-tight
          mb-5
          ${titleClassName}
        `}
      >

        {title}

      </h3>

      <p
        className={`
          leading-relaxed
          ${textClassName}
        `}
      >

        {text}

      </p>

    </div>

  )

}