import axios from 'axios';

const API_KEY = 'cc0504fde11f0fb189fa27c12bab5386';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},ca`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}