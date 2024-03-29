import { useCatImage } from '../hooks/useCatImage'

function Image({ newFact }) {
  const { imageUrl } = useCatImage({ fact: newFact })

  return <div>{imageUrl && <img src={imageUrl} alt="cat" />}</div>
}

export default Image
