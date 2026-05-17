export default function Textarea({
  className = '',
  ...props
}) {

  return (

    <textarea
      className={`
        w-full
        bg-[#f8f8f6]
        border
        border-[#d7d0c4]
        rounded-xl
        px-4
        py-4
        outline-none
        resize-none
        focus:border-corporateGreen
        transition-colors
        ${className}
      `}
      {...props}
    />

  )

}