import axios from 'axios';
import { useState } from 'react';
import { Weather, parseData } from '../schema/valibot';

const API_KEY = import.meta.env.VITE_API_KEY;

const initialState: Weather = {
  name: '',
  main: {
    temp: 0,
    temp_max: 0,
    temp_min: 0
  },
  sys: {
    country: ''
  },
  weather: [
    {
      description: '',
      main: ''
    }
  ]
};

export function useWeather() {
  const [weather, setWeather] = useState<Weather>(initialState);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState('');

  const fetchWeather = async (searchValue: string) => {
    setNotFound('');
    setLoading(true);
    setWeather(initialState);
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${API_KEY}&lang=es`;
      const { data } = await axios(url);
      const response = parseData(data);

      if (response) {
        setWeather(response);
      }
    } catch (error) {
      console.log(error);
      setNotFound('Ciudad no encontrada');
    } finally {
      setLoading(false);
    }
  };

  return {
    weather,
    fetchWeather,
    loading,
    notFound
  };
}
