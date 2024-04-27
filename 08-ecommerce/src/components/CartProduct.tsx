import { useCart } from '../hooks/useCart';
import { CartProduct as Product } from '../types';
import { RemoveFromCartIcon } from './Icons';

type CartProductProps = {
  product: Product;
};

function CartProduct({ product }: CartProductProps) {
  const { dispatch } = useCart();

  const totalPrice = product.price * product.quantity;

  return (
    <li>
      <img src={product.thumbnail} alt="iphone" />
      <div>
        <strong>{product.title}</strong> - ${totalPrice.toFixed(2)}
        <div>
          <p>x{product.quantity}</p>
          <button
            onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
          >
            +
          </button>
        </div>
      </div>

      <footer>
        <button
          onClick={() =>
            dispatch({ type: 'REMOVE_FROM_CART', payload: product.id })
          }
        >
          <RemoveFromCartIcon />
        </button>
      </footer>
    </li>
  );
}

export default CartProduct;
