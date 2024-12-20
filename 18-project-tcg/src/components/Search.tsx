import { useState } from 'react';

function Search() {
  const [search, setSearch] = useState('');

  return (
    <form className='mt-4'>
      <input
        type='search'
        placeholder='Search for a card...'
        className='border-2 border-white rounded-md p-2 outline-none md:w-96'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}

export default Search;
