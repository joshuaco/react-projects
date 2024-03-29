import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/fact'

export function useCatFact() {
  const [fact, setFact] = useState('')

  const newFact = () => {
    getRandomFact().then((newFact) => setFact(newFact))
  }

  useEffect(newFact, [])

  // Procurar no pasar el setState, siempre que se pueda
  // modificar el estado dentro del mismo hook
  return { fact, newFact }
}
