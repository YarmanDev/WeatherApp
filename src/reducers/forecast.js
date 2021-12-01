import { UPDATE_SUB_CARDS } from "../constants/cards";
import { initialStateForecast } from "./intialStates";

export const forecastReducer = (state = initialStateForecast, action) => {
  switch (action.type) {
    case UPDATE_SUB_CARDS:
      return updateSubCards(state, action);
    default:
      return state;
  }
};

const updateSubCards = (state, { forecastday }) => {
  const takeRightOptions = (day) => {
    return (day = (({
      date,
      day: {
        avgtemp_c,
        condition: { text, icon },
      },
    }) => ({ date, avgtemp_c, text, icon }))(day));
  };
  let [firstDay, secondDay, thirdtDay] = forecastday;

  firstDay = takeRightOptions(firstDay);
  secondDay = takeRightOptions(secondDay);
  thirdtDay = takeRightOptions(thirdtDay);

  const newState = [
    { ...state[0], ...firstDay },
    { ...state[1], ...secondDay },
    { ...state[2], ...thirdtDay },
  ];
  return newState;
};
