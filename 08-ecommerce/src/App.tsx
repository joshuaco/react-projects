import { products } from './mocks/products.json';
import Products from './components/Products';

function App() {
  return (
    <div className="app">
      <header>
        <h1>eCommerce Store 🛒</h1>
      </header>

      <Products products={products} />
    </div>
  );
}

export default App;
