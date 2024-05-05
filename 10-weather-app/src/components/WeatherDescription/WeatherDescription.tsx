import { data } from '../../data';
import { formatTemp } from '../../utils';
import styles from './WeatherDescription.module.css';

type WeatherDescriptionProps = {
  temp: number;
  weather: {
    main: string;
    description: string;
  };
};

function WeatherDescription({ temp, weather }: WeatherDescriptionProps) {
  const weatherIcon = data.find((obj) => obj.weather === weather.main);

  return (
    <div className={styles.description}>
      <div className={styles.description_info}>
        <img src={weatherIcon?.img} alt={weather.main} width="128" />
        <div>
          <p>{formatTemp(temp)}&deg;C</p>
          <p>
            {weather.description.charAt(0).toUpperCase() +
              weather.description.slice(1)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeatherDescription;
