import { ChangeEvent, useId } from 'react';
import { useFilter } from '../hooks/useFilter';
import { products } from '../mocks/products.json';
import './Filters.css';

function Filters() {
  const filterPriceID = useId();
  const filterCategoryID = useId();

  const { state, dispatch } = useFilter();

  const categories = [...new Set(products.map((product) => product.category))];

  const handleChangeMinPrice = (e: ChangeEvent<HTMLInputElement>) => {
    const price = e.target.valueAsNumber;
    dispatch({ type: 'SET_MIN_PRICE', payload: price });
  };

  const handleChangeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    dispatch({ type: 'SET_CATEGORY', payload: category });
  };

  return (
    <nav className="filters">
      <div>
        <label htmlFor={filterPriceID}>Min Price</label>
        <input
          type="range"
          id={filterPriceID}
          value={state.minPrice}
          min={0}
          max={1000}
          onChange={handleChangeMinPrice}
        />
        <span>${state.minPrice}</span>
      </div>
      <div>
        <label htmlFor={filterCategoryID}>Category</label>
        <select
          id={filterCategoryID}
          value={state.category}
          onChange={handleChangeCategory}
        >
          <option value="all">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
}

export default Filters;
