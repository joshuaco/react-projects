import { useContext, useEffect, useState } from 'react';
import { searchCardByName } from '../services/cards';
import { CardsContext } from '../context/CardsContext';
import { useDebounce } from '@uidotdev/usehooks';

function Search() {
  const [search, setSearch] = useState('');
  const { setCards, setIsLoading } = useContext(CardsContext);
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    if (debouncedSearch) {
      setIsLoading(true);
      searchCardByName(debouncedSearch).then((cards) => {
        setCards(cards);
        setIsLoading(false);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);

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
