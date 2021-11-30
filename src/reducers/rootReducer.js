import { combineReducers } from "redux";
import { currentWeatherReducer } from "./currentWeatherReducer";
import { forecastReducer } from "./forecast";

export const rootReducer = combineReducers({
  currentWeatherReducer,
  forecastReducer,
});
