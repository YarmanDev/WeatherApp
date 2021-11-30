import { UPDATE_MAIN_CARD } from "../constants/cards";

const intialState = {
  country: "Ukraine",
  name: "Lviv",
  feelslike_c: 2,
  text: "Snow",
  icon: "../../images/rain.svg",
  localtime: "Thursday 14.20",
  wind_mph: "5.7",
  pressure_mb: "1015",
  humidity: "50%",
  cloud: 0,
};

const updateMainCard = (
  state,
  {
    cloud,
    humidity,
    wind_mph,
    feelslike_c,
    pressure_mb,
    text,
    name,
    country,
    localtime,
    icon,
  }
) => {
  return {
    ...state,
    cloud,
    humidity,
    wind_mph,
    feelslike_c,
    pressure_mb,
    text,
    name,
    country,
    localtime,
    icon,
  };
};

export const currentWeatherReducer = (state = intialState, action) => {
  switch (action.type) {
    case UPDATE_MAIN_CARD:
      return updateMainCard(state, action);
  }
  return state;
};
