import { useContext, useEffect } from 'react';
import { CardsContext } from '../context/CardsContext';
import { getCards } from '../services/cards';
import Card from './Card';

function Cards() {
  const { cards, setCards, isLoading, setIsLoading } = useContext(CardsContext);

  useEffect(() => {
    getCards().then((cards) => {
      setCards(cards);
      setIsLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
