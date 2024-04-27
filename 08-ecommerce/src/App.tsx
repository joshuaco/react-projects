import Products from './components/Products';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <div className="app">
      <Header />
      <CartProvider>
        <Cart />
        <Products />
      </CartProvider>
      <Footer />
    </div>
  );
}

export default App;
