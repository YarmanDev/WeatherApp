import {
  UPDATE_MAIN_CARD_PROPERTIES,
  UPDATE_MAIN_CARD_WEATHER,
} from "../constants/cards";
import { intialStateCurrent } from "./intialStates";

const updateMainCardWeather = (
  state,
  { feelslike_c, text, name, country, localtime, icon }
) => {
  return {
    ...state,
    feelslike_c,
    text,
    name,
    country,
    localtime,
    icon,
  };
};
const updateMainCardProperties = (
  state,
  { cloud, humidity, wind_mph, pressure_mb }
) => {
  return {
    ...state,
    cloud,
    humidity,
    wind_mph,
    pressure_mb,
  };
};

export const currentWeatherReducer = (state = intialStateCurrent, action) => {
  switch (action.type) {
    case UPDATE_MAIN_CARD_WEATHER:
      return updateMainCardWeather(state, action);
    case UPDATE_MAIN_CARD_PROPERTIES:
      return updateMainCardProperties(state, action);
    default:
      return state;
  }
};
