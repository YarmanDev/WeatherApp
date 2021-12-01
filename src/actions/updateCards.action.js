import { Api } from "../services/api_service";
import {
  UPDATE_MAIN_CARD_WEATHER,
  UPDATE_MAIN_CARD_PROPERTIES,
  UPDATE_SUB_CARDS,
} from "../constants/cards";

export const updateMainCardWeather = ({
  current: {
    feelslike_c,
    condition: { text, icon },
  },
  location: { name, country, localtime },
}) => ({
  type: UPDATE_MAIN_CARD_WEATHER,
  feelslike_c,
  text,
  name,
  country,
  localtime,
  icon,
});
export const updateMainCardProperties = ({
  current: { cloud, humidity, wind_mph, pressure_mb },
}) => ({
  type: UPDATE_MAIN_CARD_PROPERTIES,
  cloud,
  humidity,
  wind_mph,
  pressure_mb,
});

export const updateSubCards = ({ forecast: { forecastday } }) => ({
  type: UPDATE_SUB_CARDS,
  forecastday,
});

export const fetchWeatherData = (city) => (dispatch) => {
  Api.get(
    `http://api.weatherapi.com/v1/forecast.json?key=39d6a41f2f1d4974b1d181659212911&q=${city}&days=5&aqi=no&alerts=no`
  )
    .then((response) => response.data)
    .then((data) => {
      dispatch(updateMainCardWeather(data));
      dispatch(updateMainCardProperties(data));
      dispatch(updateSubCards(data));
    });
};
