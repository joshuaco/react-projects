import { ReactNode, createContext, useReducer } from 'react';
import {
  CartActions,
  CartState,
  cartReducer,
  initialState
} from '../reducers/cart-reducer';

type CartContextProps = {
  state: CartState;
  dispatch: React.Dispatch<CartActions>;
};

type CartProviderProps = {
  children: ReactNode;
};

export const CartContext = createContext<CartContextProps>(null!);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
