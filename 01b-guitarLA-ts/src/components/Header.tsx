import Cart from "./Cart";

import type { CartItem, Guitar } from "../types";

type HeaderProps = {
  cart: CartItem[];
  deleteItem: (id: Guitar["id"]) => void;
  increaseQuantity: (id: Guitar["id"]) => void;
  decreaseQuantity: (id: Guitar["id"]) => void;
  cleanCart: () => void;
};

function Header({
  cart,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  cleanCart,
}: HeaderProps) {
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
          <Cart
            cart={cart}
            deleteItem={deleteItem}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            cleanCart={cleanCart}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
