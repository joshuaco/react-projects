import { z } from 'zod';
import {
  CryptoCurrencyDataSchema,
  CryptoCurrencyResponseSchema,
  CurrencySchema,
  PairSchema
} from '../schemas/crypto-schema';

export type Currency = z.infer<typeof CurrencySchema>;
export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponseSchema>;

export type Pair = z.infer<typeof PairSchema>;
export type CryptoData = z.infer<typeof CryptoCurrencyDataSchema>;
