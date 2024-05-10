import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { getCryptos, getCurrentCryptoData } from './services/crypto-services';
import { CryptoCurrency, CryptoData, Pair } from './types';

type CryptoStore = {
  cryptoCurrencies: CryptoCurrency[];
  cryptoData: CryptoData;
  loading: boolean;
  fetchCryptos: () => Promise<void>;
  fetchData: (pair: Pair) => Promise<void>;
};

export const useCryptoStore = create<CryptoStore>()(
  devtools((set) => ({
    cryptoCurrencies: [],
    cryptoData: {} as CryptoData,
    loading: false,
    // Actions
    fetchCryptos: async () => {
      const cryptoCurrencies = await getCryptos();
      set(() => ({
        cryptoCurrencies
      }));
    },
    fetchData: async (pair) => {
      set(() => ({
        loading: true
      }));
      const cryptoData = await getCurrentCryptoData(pair);
      set(() => ({
        cryptoData,
        loading: false
      }));
    }
  }))
);
