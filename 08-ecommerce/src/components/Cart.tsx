import { useEffect, useId } from 'react';
import { useCart } from '../hooks/useCart';
import { CartIcon, ClearCartIcon } from './Icons';
import CartProduct from './CartProduct';
import './Cart.css';

function Cart() {
  const cartChecboxID = useId();
  const { state, dispatch } = useCart();

  useEffect(() => {
    if (state.products.length > 0) {
      localStorage.setItem('cart', JSON.stringify(state.products));
    } else {
      localStorage.removeItem('cart');
    }
  }, [state.products]);

  return (
    <>
      <label className="cart-button" htmlFor={cartChecboxID}>
        <CartIcon />
      </label>
      <input type="checkbox" id={cartChecboxID} hidden />

      <aside className="cart">
        <ul>
          {state.products.map((product) => (
            <CartProduct key={product.id} product={product} />
          ))}
        </ul>

        <button onClick={() => dispatch({ type: 'CLEAN_CART' })}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}

export default Cart;
