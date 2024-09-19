import axios from 'axios';
import {
  CryptoCurrenciesResponseSchema,
  CryptoCurrencyDataSchema
} from '../schemas/crypto-schema';
import { Pair } from '../types';

export async function getCryptos() {
  const API_URL =
    'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=USD';

  const {
    data: { Data }
  } = await axios(API_URL);

  const response = CryptoCurrenciesResponseSchema.safeParse(Data);

  if (response.success) {
    return response.data;
  }
  if (response.error) {
    console.log(response.error.issues);
  }
  return [];
}

export async function getCurrentCryptoData(pair: Pair) {
  const API_URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.cryptocurrency}&tsyms=${pair.currency}`;

  const {
    data: { DISPLAY }
  } = await axios(API_URL);

  const response = CryptoCurrencyDataSchema.safeParse(
    DISPLAY[pair.cryptocurrency][pair.currency]
  );

  if (response.success) {
    return response.data;
  } else {
    throw new Error('Error fetching crypto data');
  }
}
