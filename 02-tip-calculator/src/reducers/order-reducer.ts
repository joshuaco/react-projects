import { MenuItem, OrderItem } from '../types';

export type OrderActions =
  | { type: 'add-item'; payload: { item: MenuItem } }
  | { type: 'remove-item'; payload: { id: MenuItem['id'] } }
  | { type: 'add-tip'; payload: { value: number } }
  | { type: 'place-order' };

export type OrderState = {
  order: OrderItem[];
  tip: number;
};

export const initialState: OrderState = {
  order: [],
  tip: 0
};

export function OrderReducer(
  state: OrderState = initialState,
  action: OrderActions
) {
  if (action.type === 'add-item') {
    const itemExists = state.order.find(
      (item) => item.id === action.payload.item.id
    );

    let updatedOrders: OrderItem[] = [];

    if (itemExists) {
      updatedOrders = state.order.map((item) => {
        if (item.id === action.payload.item.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    } else {
      const newOrder: OrderItem = { ...action.payload.item, quantity: 1 };
      updatedOrders = [...state.order, newOrder];
    }
    return {
      ...state,
      order: updatedOrders
    };
  }

  if (action.type === 'remove-item') {
    const order = state.order.filter((item) => item.id !== action.payload.id);
    return {
      ...state,
      order
    };
  }

  if (action.type === 'add-tip') {
    const tip = action.payload.value;

    return {
      ...state,
      tip
    };
  }

  if (action.type === 'place-order') {
    return {
      ...state,
      order: [],
      tip: 0
    };
  }

  return state;
}
