import { useEffect, useReducer } from 'react';
import { cartReducer, initialState } from './reducers/cart-reducer';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    if (state.cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(state.cart));
      return;
    }
    localStorage.removeItem('cart');
  }, [state.cart]);

  return (
    <>
      <Header cart={state.cart} dispatch={dispatch} />
      <Content data={state.data} dispatch={dispatch} />
      <Footer />
    </>
  );
}

export default App;
