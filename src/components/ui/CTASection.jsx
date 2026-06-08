import Button from './Button'

export default function CTASection({
  title,
  text,
  buttonText,
  buttonHref = '#formulario',
  buttonClassName = '',
  className = ''
}) {

  return (

    <div
      className={`
        rounded-[24px] sm:rounded-[32px]
        p-6 sm:p-10
        lg:p-14
        ${className}
      `}
    >

      <div className="max-w-3xl">

        <h2 className="heading-h2 mb-6">

          {title}

        </h2>

        <p className="
          text-lg
          leading-relaxed
          mb-10
        ">

          {text}

        </p>

        <Button
          as="a"
          href={buttonHref}
          className={buttonClassName}
        >

          {buttonText}

        </Button>

      </div>

    </div>

  )

}
