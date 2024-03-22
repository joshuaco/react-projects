import { useMemo } from "react";

function Cart({ cart, setCart }) {
  const MAX_ITEMS = 5;
  const MIN_ITEMS = 1;

  // Derivate State
  const hasSomething = useMemo(() => cart.length > 0, [cart]);

  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.quantity * item.price, 0),
    [cart]
  );

  const handleDelete = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const handleIncrease = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity < MAX_ITEMS) {
        return { ...item, quantity: item.quantity + 1 }; // quantity++ doesn't work
      }
      return item;
    });

    setCart(updatedCart);
  };

  const handleDecrease = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity > MIN_ITEMS) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });

    setCart(updatedCart);
  };

  const cleanCart = () => {
    setCart([]);
  };

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
                          onClick={() => handleDecrease(guitar.id)}
                        >
                          -
                        </button>
                        {guitar.quantity}
                        <button
                          type="button"
                          className="btn btn-dark"
                          onClick={() => handleIncrease(guitar.id)}
                        >
                          +
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          type="button"
                          onClick={() => handleDelete(guitar.id)}
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
                onClick={cleanCart}
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
