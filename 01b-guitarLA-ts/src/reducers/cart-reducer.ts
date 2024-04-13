import { db } from '../data/db';
import { CartItem, Guitar } from '../types';

const MAX_ITEMS = 5;
const MIN_ITEMS = 1;

export type CartActions =
  | { type: 'add-to-cart'; payload: { item: Guitar } }
  | { type: 'delete-item'; payload: { id: Guitar['id'] } }
  | { type: 'increase-quantity'; payload: { id: Guitar['id'] } }
  | { type: 'decrease-quantity'; payload: { id: Guitar['id'] } }
  | { type: 'clean-cart' };

export type CartState = {
  data: Guitar[];
  cart: CartItem[];
};

const initialCart = (): CartItem[] => {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
};

export const initialState: CartState = {
  data: db,
  cart: initialCart()
};

export function cartReducer(
  state: CartState = initialState,
  action: CartActions
) {
  if (action.type === 'add-to-cart') {
    const itemFound = state.cart.find(
      (item) => item.id === action.payload.item.id
    );

    let updatedCart: CartItem[] = [];

    if (!itemFound) {
      const newItem: CartItem = { ...action.payload.item, quantity: 1 };
      updatedCart = [...state.cart, newItem];
    } else {
      updatedCart = state.cart.map((item) => {
        if (item.id === action.payload.item.id) {
          // avoid return undefined.
          if (item.quantity >= MAX_ITEMS) return item;
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    }
    return {
      ...state,
      cart: updatedCart
    };
  }

  if (action.type === 'delete-item') {
    const updatedCart = state.cart.filter(
      (item) => item.id !== action.payload.id
    );
    return {
      ...state,
      cart: updatedCart
    };
  }

  if (action.type === 'increase-quantity') {
    const updatedCart = state.cart.map((item) => {
      if (item.id === action.payload.id && item.quantity < MAX_ITEMS) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    return {
      ...state,
      cart: updatedCart
    };
  }

  if (action.type === 'decrease-quantity') {
    const updatedCart = state.cart.map((item) => {
      if (item.id === action.payload.id && item.quantity > MIN_ITEMS) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    return {
      ...state,
      cart: updatedCart
    };
  }

  if (action.type === 'clean-cart') {
    return {
      ...state,
      cart: []
    };
  }

  return state;
}
