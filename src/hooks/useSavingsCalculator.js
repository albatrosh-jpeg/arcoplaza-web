import { useState } from 'react'
import calculateSavings from '../utils/calculateSavings'

export default function useSavingsCalculator() {

  const [tipo, setTipo] = useState('vivienda')
  const [gasto, setGasto] = useState('')
  const [potencia, setPotencia] = useState('')

  const resultado = calculateSavings({
    gasto,
    tipo,
    potencia
  })

  return {
    tipo,
    setTipo,
    gasto,
    setGasto,
    potencia,
    setPotencia,
    resultado
  }

}