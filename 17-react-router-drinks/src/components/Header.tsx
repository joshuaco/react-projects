import { useEffect, useMemo, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAppStore } from '../stores/useAppStore';

function Header() {
  const { pathname } = useLocation();
  const [searchFilters, setSearchFilters] = useState({
    category: '',
    ingredients: ''
  });

  const isHome = useMemo(() => pathname === '/', [pathname]);

  const fetchCategories = useAppStore((state) => state.fetchCategories);
  const categories = useAppStore((state) => state.categories);
  const searchRecipes = useAppStore((state) => state.searchRecipes);
  const showNotification = useAppStore((state) => state.showNotification);

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSearchFilters((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(searchFilters).includes('')) {
      showNotification({ text: 'All fields are required', error: true });
      return;
    }
    searchRecipes(searchFilters);
  };

  return (
    <header
      className={isHome ? 'bg-header bg-center bg-cover' : 'bg-slate-800'}
    >
      <div className='container mx-auto px-5 lg:px-32 py-4'>
        <div className='flex items-center justify-between'>
          <div>
            <img className='w-24' src='/logo.svg' alt='logo' />
          </div>

          <nav className='flex items-center gap-4'>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'text-orange-500 uppercase font-bold'
                  : 'text-white uppercase font-bold'
              }
              to='/'
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'text-orange-500 uppercase font-bold'
                  : 'text-white uppercase font-bold'
              }
              to='/favorites'
            >
              Favorites
            </NavLink>
          </nav>
        </div>
        {isHome && (
          <form
            className='sm:w-1/2 lg:w-1/3 bg-orange-400 p-4 rounded-md 
            my-24 space-y-4'
            onSubmit={handleSubmit}
          >
            <div className='space-y-1'>
              <label
                className='block text-white font-bold uppercase text-lg'
                htmlFor='ingredients'
              >
                Name or Ingredients
              </label>
              <input
                className='p-2 w-full rounded-md focus:outline-none'
                type='text'
                id='ingredients'
                name='ingredients'
                onChange={handleChange}
                value={searchFilters.ingredients}
                placeholder='Vodka, Tequila, Gin, etc'
              />
            </div>

            <div className='flex flex-col gap-1'>
              <label
                className='block text-white font-bold uppercase text-lg'
                htmlFor='category'
              >
                Category
              </label>
              <select
                className='p-2 w-full rounded-md focus:outline-none'
                id='category'
                name='category'
                onChange={handleChange}
                value={searchFilters.category}
              >
                <option value=''>Select a category</option>
                {categories.drinks.map((category) => (
                  <option
                    key={category.strCategory}
                    value={category.strCategory}
                  >
                    {category.strCategory}
                  </option>
                ))}
              </select>
            </div>

            <input
              className='text-white uppercase font-bold cursor-pointer bg-orange-800 hover:bg-orange-900 p-2 rounded-md w-auto max-h-14 self-end'
              type='submit'
              value='Search'
            />
          </form>
        )}
      </div>
    </header>
  );
}

export default Header;
