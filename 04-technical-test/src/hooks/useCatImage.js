import { useEffect, useState } from 'react'

const CAT_IMAGE_URL = 'https://cataas.com/cat/says/'

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    if (!fact) return
    const FIRST_FACT_WORD = fact.split(' ', 2).join(' ')
    const CAT_FACT_IMAGE_URL = `${CAT_IMAGE_URL}${FIRST_FACT_WORD}?size=50&fontColor=white`

    setImageUrl(CAT_FACT_IMAGE_URL)
  }, [fact])

  return { imageUrl }
}
