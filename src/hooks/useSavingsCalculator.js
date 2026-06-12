import { useState } from 'react'
import calculateSavings from '../utils/calculateSavings'
import useMarketData from './useMarketData'

export default function useSavingsCalculator() {

  const [tipo, setTipo] = useState('vivienda')
  const [gasto, setGasto] = useState('')
  const [potencia, setPotencia] = useState('')
  const {
    data: marketData,
    error: marketError,
    loading: marketLoading
  } = useMarketData()

  const resultado = calculateSavings({
    gasto,
    tipo,
    potencia,
    marketData,
    marketError,
    marketLoading
  })

  return {
    tipo,
    setTipo,
    gasto,
    setGasto,
    potencia,
    setPotencia,
    resultado,
    marketData,
    marketError,
    marketLoading
  }

}
