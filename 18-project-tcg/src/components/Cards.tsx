import { useEffect, useState } from 'react';
import { getCards } from '../services/cards';
import { Card as CardType } from '../types';
import Card from './Card';

function Cards() {
  const [cards, setCards] = useState<CardType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCards().then((cards) => {
      setCards(cards);
      setIsLoading(false);
    });
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
