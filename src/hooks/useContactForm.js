import { useState } from 'react'
import submitForm from '../utils/submitForm'

export default function useContactForm() {

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [fileName, setFileName] = useState('')
  const [analysis, setAnalysis] = useState(null)

  const handleSubmit = (e) => {

submitForm({
  e,
  setLoading,
  setSuccess,
  setError,
  setFileName,
  setAnalysis
})
  }

return {
  loading,
  success,
  error,
  fileName,
  analysis,
  setFileName,
  setAnalysis,
  handleSubmit
}
}