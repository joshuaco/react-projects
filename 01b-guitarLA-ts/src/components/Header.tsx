import Cart from './Cart';

import type { CartItem } from '../types';
import { CartActions } from '../reducers/cart-reducer';

type HeaderProps = {
  cart: CartItem[];
  dispatch: React.Dispatch<CartActions>;
};

function Header({ cart, dispatch }: HeaderProps) {
  return (
    <header className="py-5 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3">
            <a href="index.html">
              <img
                className="img-fluid"
                src="/img/logo.svg"
                alt="imagen logo"
              />
            </a>
          </div>
          <Cart cart={cart} dispatch={dispatch} />
        </div>
      </div>
    </header>
  );
}

export default Header;
