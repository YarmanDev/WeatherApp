import { UPDATE_MAIN_CARD, UPDATE_SUB_CARDS } from "../constants/cards";

export const updateMainCard = ({
  current: {
    cloud,
    humidity,
    wind_mph,
    feelslike_c,
    pressure_mb,
    condition: { text, icon },
  },
  location: { name, country, localtime },
}) => ({
  type: UPDATE_MAIN_CARD,
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
});

export const updateSubCards = ({ forecast: { forecastday } }) => ({
  type: UPDATE_SUB_CARDS,
  forecastday,
});
