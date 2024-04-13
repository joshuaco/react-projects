import { CartActions } from '../reducers/cart-reducer';
import type { Guitar } from '../types';

type ItemProps = {
  guitar: Guitar;
  dispatch: React.Dispatch<CartActions>;
};

function Item({ guitar, dispatch }: ItemProps) {
  const { name, description, price, image } = guitar;

  const handleClick = () => {
    dispatch({ type: 'add-to-cart', payload: { item: guitar } });
  };

  return (
    <article className="col-md-6 col-lg-4 my-4 row align-items-center">
      <div className="col-4">
        <img
          className="img-fluid"
          src={`/img/${image}.jpg`}
          alt="imagen guitarra"
        />
      </div>
      <div className="col-8">
        <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
        <p>{description}</p>
        <p className="fw-black text-primary fs-3">${price}</p>
        <button
          type="button"
          className="btn btn-dark w-100"
          onClick={handleClick}
        >
          Agregar al Carrito
        </button>
      </div>
    </article>
  );
}

export default Item;
