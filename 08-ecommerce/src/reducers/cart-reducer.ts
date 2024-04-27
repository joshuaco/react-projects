import { CartProduct, Product } from '../types';

export type CartActions =
  | { type: 'ADD_TO_CART'; payload: Product }
  | { type: 'REMOVE_FROM_CART'; payload: CartProduct['id'] }
  | { type: 'CLEAN_CART' };

export type CartState = {
  products: CartProduct[];
};

const initialCart = () => {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
};

export const initialState: CartState = {
  products: initialCart()
};

export const cartReducer = (
  state: CartState = initialState,
  action: CartActions
) => {
  if (action.type === 'ADD_TO_CART') {
    const product = action.payload;
    const productInCart = state.products.filter(
      (currentProduct) => currentProduct.id === product.id
    )[0];

    if (productInCart) {
      const updatedProducts = state.products.map((p) => {
        if (p.id === product.id) {
          return { ...product, quantity: p.quantity + 1 };
        }
        return p;
      });
      return { ...state, products: updatedProducts };
    }
    return {
      ...state,
      products: [...state.products, { ...product, quantity: 1 }]
    };
  }

  if (action.type === 'REMOVE_FROM_CART') {
    return {
      ...state,
      products: state.products.filter((p) => p.id !== action.payload)
    };
  }

  if (action.type === 'CLEAN_CART') {
    return {
      ...state,
      products: []
    };
  }
  return state;
};
