import { useWeather } from './hooks/useWeather';
import darkModeIcon from './assets/dark_mode.svg';
import cloudSunIcon from './assets/cloud_sun.svg';
import styles from './App.module.css';
import SearchForm from './components/SearchForm/SearchForm';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';
import Spinner from './components/Spinner/Spinner';

function App() {
  const { weather, fetchWeather, loading, notFound } = useWeather();
  return (
    <>
      <header className={styles.header}>
        <div>
          <img src={cloudSunIcon} alt="icon" />
          <h1 className={styles.title}>Weather App</h1>
        </div>
        <img src={darkModeIcon} alt="icon" />
      </header>
      <main className={styles.main}>
        <SearchForm fetchWeather={fetchWeather} />
        {loading && <Spinner />}
        {weather.name && <WeatherDetails weather={weather} />}
        {notFound && <p className={styles.not_found}>{notFound}</p>}
      </main>
    </>
  );
}

export default App;
