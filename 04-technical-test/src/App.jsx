import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

import './App.css'

function App() {
  const { fact, newFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = () => {
    newFact()
  }

  return (
    <>
      <main>
        <h1>Cat Facts</h1>

        <button onClick={handleClick}>Get new fact</button>

        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt="cat" />}
      </main>
    </>
  )
}

export default App
