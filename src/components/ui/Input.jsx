export default function Input({
  className = '',
  ...props
}) {

  return (

    <input
      className={`
        w-full
        bg-[#f8f8f6]
        border
        border-[#d7d0c4]
        rounded-xl
        px-4
        py-4
        outline-none
        focus:border-corporateGreen
        transition-colors
        ${className}
      `}
      {...props}
    />

  )

}