import { createContext } from 'react';
import { Card } from '../types';

interface CardsContextProps {
  cards: Card[];
  setCards: (cards: Card[]) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export const CardsContext = createContext<CardsContextProps>(null!);
