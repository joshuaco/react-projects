import axios from 'axios';
import { cardsSchema } from '../schemas';
import { Card } from '../types';

export const getCards = async (page: number): Promise<Card[]> => {
  const response = await axios(
    `https://api.pokemontcg.io/v2/cards?page=${page}&pageSize=15`
  );

  const validatedResponse = cardsSchema.safeParse(response.data.data);

  if (validatedResponse.success) {
    return validatedResponse.data as Card[];
  }

  throw new Error(`Failed to fetch cards: ${validatedResponse.error.message}`);
};

export const searchCardByName = async (name: string) => {
  const response = await axios(
    `https://api.pokemontcg.io/v2/cards?q=name:${name.toLowerCase()}`
  );

  const validatedResponse = cardsSchema.safeParse(response.data.data);

  if (validatedResponse.success) {
    return validatedResponse.data as Card[];
  }

  throw new Error(`Failed to fetch cards: ${validatedResponse.error.message}`);
};
