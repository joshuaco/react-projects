import { useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Header() {
  const { pathname } = useLocation();

  const isHome = useMemo(() => pathname === '/', [pathname]);

  return (
    <header
      className={isHome ? 'bg-header bg-center bg-cover' : 'bg-slate-800'}
    >
      <div className='container mx-auto px-5 py-4'>
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
            my-16 space-y-4'
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
              >
                <option value=''>Select a category</option>
                <option value='cocktail'>Cocktail</option>
                <option value='mixer'>Mixer</option>
                <option value='shot'>Shot</option>
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
