import { categories } from '../data/categories';
import { useBudget } from '../hooks/useBudget';

function FilterByCategory() {
  const { dispatch } = useBudget();

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: 'filter-by-category', payload: { id: e.target.value } });
  };

  return (
    <section className=" bg-white shadow rounded p-5">
      <form>
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          <label htmlFor="category" className="font-bold">
            Filter Expenses
          </label>
          <select
            id="category"
            className="bg-slate-100 p-2 flex-1 outline-blue-500 rounded"
            onChange={handleSelect}
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </form>
    </section>
  );
}

export default FilterByCategory;
