import axios from 'axios';
import { cardsSchema } from '../schemas';

export const getCards = async () => {
  const response = await axios(
    'https://api.pokemontcg.io/v2/cards?pageSize=150'
  );

  const validatedResponse = cardsSchema.safeParse(response.data.data);

  if (validatedResponse.success) {
    return validatedResponse.data;
  }

  throw new Error(`Failed to fetch cards: ${validatedResponse.error.message}`);
};
