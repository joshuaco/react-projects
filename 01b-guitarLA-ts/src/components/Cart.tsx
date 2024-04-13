import { useMemo, Dispatch } from 'react';

import type { CartItem } from '../types';
import { CartActions } from '../reducers/cart-reducer';

type CartProps = {
  cart: CartItem[];
  dispatch: Dispatch<CartActions>;
};

function Cart({ cart, dispatch }: CartProps) {
  // Derivate State
  const hasSomething = useMemo(() => cart.length > 0, [cart]);

  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.quantity * item.price, 0),
    [cart]
  );

  return (
    <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
      <div className="carrito">
        <img
          className="img-fluid"
          src="/img/carrito.png"
          alt="imagen carrito"
        />

        <div id="carrito" className="bg-white p-3">
          {hasSomething ? (
            <>
              <table className="w-100 table">
                <thead>
                  <tr>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((guitar) => (
                    <tr key={guitar.id}>
                      <td>
                        <img
                          className="img-fluid"
                          src={`/img/${guitar.image}.jpg`}
                          alt="imagen guitarra"
                        />
                      </td>
                      <td>{guitar.name}</td>
                      <td className="fw-bold">${guitar.price}</td>
                      <td className="flex align-items-start gap-4">
                        <button
                          type="button"
                          className="btn btn-dark"
                          onClick={() =>
                            dispatch({
                              type: 'decrease-quantity',
                              payload: { id: guitar.id }
                            })
                          }
                        >
                          -
                        </button>
                        {guitar.quantity}
                        <button
                          type="button"
                          className="btn btn-dark"
                          onClick={() =>
                            dispatch({
                              type: 'increase-quantity',
                              payload: { id: guitar.id }
                            })
                          }
                        >
                          +
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          type="button"
                          onClick={() =>
                            dispatch({
                              type: 'delete-item',
                              payload: { id: guitar.id }
                            })
                          }
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <p className="text-end">
                Total pagar: <span className="fw-bold">${cartTotal}</span>
              </p>
              <button
                className="btn btn-dark w-100 mt-3 p-2"
                onClick={() => dispatch({ type: 'clean-cart' })}
              >
                Vaciar Carrito
              </button>
            </>
          ) : (
            <p className="text-center">El carrito esta vacio</p>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Cart;
