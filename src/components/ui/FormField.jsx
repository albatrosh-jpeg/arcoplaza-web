export default function FormField({
  label,
  children
}) {

  return (

    <div>

      {label && (

        <label className="block text-sm font-medium mb-2 text-slate-700">
          {label}
        </label>

      )}

      {children}

    </div>

  )

}