import { useFilter } from '../hooks/useFilter';
import { useCart } from '../hooks/useCart';
import { AddToCartIcon, RemoveFromCartIcon } from './Icons';
import { Product } from '../types';
import './Products.css';

function Products() {
  const { filteredProducts } = useFilter();
  const { state, dispatch } = useCart();

  const isProductInCart = (product: Product) => {
    return state.products.some((p) => p.id === product.id);
  };

  return (
    <main className="products">
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <h3>{product.title}</h3>
              <span>${product.price}</span>
            </div>
            <div>
              <button
                onClick={() =>
                  isProductInCart(product)
                    ? dispatch({
                        type: 'REMOVE_FROM_CART',
                        payload: product.id
                      })
                    : dispatch({
                        type: 'ADD_TO_CART',
                        payload: product
                      })
                }
              >
                {isProductInCart(product) ? (
                  <RemoveFromCartIcon />
                ) : (
                  <AddToCartIcon />
                )}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Products;
