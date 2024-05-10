import { z } from 'zod';

export const CurrencySchema = z.object({
  code: z.string(),
  name: z.string()
});

export const CryptoCurrencyResponseSchema = z.object({
  CoinInfo: z.object({
    FullName: z.string(),
    Name: z.string()
  }),
  RAW: z.object({
    USD: z.object({
      CHANGEPCTHOUR: z.number(),
      PRICE: z.number()
    })
  })
});

export const CryptoCurrenciesResponseSchema = z.array(
  CryptoCurrencyResponseSchema
);

export const PairSchema = z.object({
  currency: z.string(),
  cryptocurrency: z.string()
});

export const CryptoCurrencyDataSchema = z.object({
  HIGHDAY: z.string(),
  IMAGEURL: z.string(),
  PRICE: z.string(),
  LOWDAY: z.string()
});
