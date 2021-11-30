import { UPDATE_SUB_CARDS } from "../constants/cards";
const initialState = [
  {
    avgtemp_c: "3",
    text: "Clear Sky",
    date: "2021-11-30",
    icon: "../../images/rain.svg",
  },
  {
    avgtemp_c: "3",
    text: "Clear Sky",
    date: "2021-11-30",
    icon: "../../images/rain.svg",
  },
  {
    avgtemp_c: "3",
    text: "Clear Sky",
    date: "2021-11-30",
    icon: "../../images/rain.svg",
  },
];

export const forecastReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SUB_CARDS:
      return updateSubCards(state, action);
  }
  return state;
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

  const [firstDayState, secondDayState, thirdtDayState] = state;
  const newState = [
    { ...firstDayState, ...firstDay },
    { ...secondDayState, ...secondDay },
    { ...thirdtDayState, ...thirdtDay },
  ];
  return newState;
};
