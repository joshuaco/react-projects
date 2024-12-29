import { useContext, useEffect, useState } from 'react';
import { CardsContext } from '../context/CardsContext';
import { getCards } from '../services/cards';
import Card from './Card';

function Cards() {
  const { cards, setCards, isLoading, setIsLoading } = useContext(CardsContext);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getCards(page).then((newCards) => {
      setCards([...cards, ...newCards]);
      setIsLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <main className='flex gap-4 flex-wrap mt-8 items-center justify-center'>
      {isLoading ? (
        <p className='text-center text-white text-3xl'>Loading cards...</p>
      ) : (
        cards.map((card) => <Card key={card.id} card={card} />)
      )}
    </main>
  );
}

export default Cards;
