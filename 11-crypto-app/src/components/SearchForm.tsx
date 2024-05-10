import { ChangeEvent, FormEvent, useState } from 'react';
import { currencies } from '../data';
import { useCryptoStore } from '../store';
import { Pair } from '../types';
import ErrorMessage from './ErrorMessage';
import './SearchForm.css';

function SearchForm() {
  const cryptoCurrencies = useCryptoStore((state) => state.cryptoCurrencies);
  const fetchData = useCryptoStore((state) => state.fetchData);
  const [error, setError] = useState('');
  const [pair, setPair] = useState<Pair>({
    currency: '',
    cryptocurrency: ''
  });

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPair({
      ...pair,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(pair).includes('')) {
      setError('Todos los campos son obligatorios.');
      return;
    }

    fetchData(pair);
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form_field">
        <label htmlFor="currency">Selecciona Moneda Local</label>
        <select name="currency" id="currency" onChange={handleChange}>
          <option value="">--Seleccione--</option>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>
      <div className="form_field">
        <label htmlFor="cryptocurrency">Selecciona Criptomoneda</label>
        <select
          name="cryptocurrency"
          id="cryptocurrency"
          onChange={handleChange}
          value={pair.cryptocurrency}
        >
          <option value="">--Seleccione--</option>
          {cryptoCurrencies.map((crypto) => (
            <option key={crypto.CoinInfo.Name} value={crypto.CoinInfo.Name}>
              {crypto.CoinInfo.FullName}
            </option>
          ))}
        </select>
      </div>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <input className="form_submit" type="submit" value="Cotizar" />
    </form>
  );
}

export default SearchForm;
