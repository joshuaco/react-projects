export type FilterActions =
  | { type: 'SET_MIN_PRICE'; payload: number }
  | { type: 'SET_CATEGORY'; payload: string };

export type FilterState = {
  minPrice: number;
  category: string;
};

export const initialState: FilterState = {
  minPrice: 0,
  category: 'all'
};

export const filterReducer = (
  state: FilterState = initialState,
  action: FilterActions
) => {
  if (action.type === 'SET_MIN_PRICE') {
    return { ...state, minPrice: action.payload };
  }

  if (action.type === 'SET_CATEGORY') {
    return { ...state, category: action.payload };
  }

  return state;
};
