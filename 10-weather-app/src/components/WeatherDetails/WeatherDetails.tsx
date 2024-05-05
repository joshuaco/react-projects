import { Weather } from '../../schema/valibot';
import { formatTemp } from '../../utils';
import { TempMaxIcon, TempMinIcon } from '../Icons/Icons';
import WeatherDescription from '../WeatherDescription/WeatherDescription';
import styles from './WeatherDetails.module.css';

type WeatherDetailsProps = {
  weather: Weather;
};

function WeatherDetails({ weather }: WeatherDetailsProps) {
  return (
    <section className={styles.section}>
      <div>
        <h2>
          {weather.name}, <span>{weather.sys.country}</span>
        </h2>
        <div className={styles.temp_info}>
          <TempMaxIcon />
          <p>Max: {formatTemp(weather.main.temp_max)}&deg;C</p>
        </div>
        <div className={styles.temp_info}>
          <TempMinIcon />
          <p>Min: {formatTemp(weather.main.temp_min)}&deg;C</p>
        </div>
      </div>
      <div>
        <WeatherDescription
          temp={weather.main.temp}
          weather={weather.weather[0]}
        />
      </div>
    </section>
  );
}

export default WeatherDetails;
