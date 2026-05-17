export default async function submitForm({
  e,
  setLoading,
  setSuccess,
  setError,
  setFileName
}) {

  e.preventDefault()

  setLoading(true)
  setSuccess(false)
  setError(false)

  const formData = new FormData()

  formData.append('nombre', e.target.nombre.value)
  formData.append('telefono', e.target.telefono.value)
  formData.append('email', e.target.email.value)
  formData.append('comentario', e.target.comentario.value)

  if (e.target.factura.files[0]) {
    formData.append('factura', e.target.factura.files[0])
  }

  try {

    const response = await fetch('/api/contact', {
      method: 'POST',
      body: formData
    })

    if (response.ok) {

      setSuccess(true)
      setFileName('')
      e.target.reset()

    } else {

      setError(true)

    }

  } catch (err) {

    console.error(err)
    setError(true)

  }

  setLoading(false)
}