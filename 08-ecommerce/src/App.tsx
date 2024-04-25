import { useState } from 'react';
import { products as initialProducts } from './mocks/products.json';
import Products from './components/Products';

function App() {
  const [products] = useState(initialProducts);

  return (
    <div className="app">
      <header>
        <h1>React Shop 🛒</h1>
      </header>

      <Products products={products} />
    </div>
  );
}

export default App;
