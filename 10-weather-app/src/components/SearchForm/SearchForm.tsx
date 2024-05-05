import { FormEvent, useState } from 'react';
import style from './SearchForm.module.css';

type SearchFormProps = {
  fetchWeather: (searchValue: string) => Promise<void>;
};

function SearchForm({ fetchWeather }: SearchFormProps) {
  const [city, setCity] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (city === '' || Number(city)) {
      setError(true);
      return;
    }

    fetchWeather(city);
    setError(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={style.form_field}>
        <label htmlFor="city">Ingresa el nombre de la ciudad</label>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Ciudad"
          value={city}
          className={error ? style.error_input : ''}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      {error && <p className={style.error}>Ingresa una ciudad válida</p>}
      <button type="submit">Buscar</button>
    </form>
  );
}

export default SearchForm;
