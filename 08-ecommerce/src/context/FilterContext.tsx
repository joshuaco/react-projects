import { Dispatch, ReactNode, createContext, useReducer } from 'react';
import { products } from '../mocks/products.json';
import {
  FilterActions,
  FilterState,
  filterReducer,
  initialState
} from '../reducers/filter-reducer';
import { Product } from '../types';

type FilterContextProps = {
  state: FilterState;
  dispatch: Dispatch<FilterActions>;
  filteredProducts: Product[];
};

type FilterProviderProps = {
  children: ReactNode;
};

// 1. Crear el contexto
export const FilterContext = createContext<FilterContextProps>(null!);

// 2. Crear el Proveedor del contexto
export const FilterProvider = ({ children }: FilterProviderProps) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  const filteredProducts = products.filter((product) => {
    return (
      product.price >= state.minPrice &&
      (product.category === state.category || state.category === 'all')
    );
  });

  return (
    <FilterContext.Provider value={{ state, dispatch, filteredProducts }}>
      {children}
    </FilterContext.Provider>
  );
};
