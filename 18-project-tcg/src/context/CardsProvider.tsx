import { useState } from 'react';
import { Card } from '../types';
import { CardsContext } from './CardsContext';

interface CardsProviderProps {
  children: React.ReactNode;
}

function CardsProvider({ children }: CardsProviderProps) {
  const [cards, setCards] = useState<Card[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <CardsContext.Provider value={{ cards, setCards, isLoading, setIsLoading }}>
      {children}
    </CardsContext.Provider>
  );
}

export default CardsProvider;
