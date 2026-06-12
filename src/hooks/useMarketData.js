import { useEffect, useState } from 'react'

let cachedMarketData = null
let cachedMarketError = null
let marketRequest = null

async function requestMarketData() {
  if (cachedMarketData || cachedMarketError) {
    return {
      data: cachedMarketData,
      error: cachedMarketError
    }
  }

  if (!marketRequest) {
    marketRequest = fetch('/api/getMarketData')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Market API responded ${response.status}`)
        }

        return response.json()
      })
      .then(data => {
        cachedMarketData = data
        return data
      })
      .catch(error => {
        cachedMarketError = error
        throw error
      })
  }

  try {
    return {
      data: await marketRequest,
      error: null
    }
  }
  catch (error) {
    return {
      data: null,
      error
    }
  }
}

export default function useMarketData() {
  const [data, setData] = useState(cachedMarketData)
  const [error, setError] = useState(cachedMarketError)
  const [loading, setLoading] = useState(!cachedMarketData && !cachedMarketError)

  useEffect(() => {
    let mounted = true

    requestMarketData().then(result => {
      if (!mounted) return

      setData(result.data)
      setError(result.error)
      setLoading(false)
    })

    return () => {
      mounted = false
    }
  }, [])

  return {
    data,
    error,
    loading
  }
}
