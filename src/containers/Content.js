import { React, useEffect, useState } from "react";
import "../scss/content.scss";
import Card from "../components/Card";
import { useSelector, useDispatch } from "react-redux";
import { updateMainCard, updateSubCards } from "../actions/updateCards.action";

export default function Content() {
  const mainCard = useSelector((state) => state.currentWeatherReducer);
  const subCards = useSelector((state) => state.forecastReducer);
  const [autocomplete, setAutocomplete] = useState([]);
  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState(false);
  const dispatch = useDispatch();
  const cards = [];
  useEffect(() => {
    let countries = [];
    const fetchAPI = async () => {
      try {
        let response = await fetch(
          "https://6196f55daf46280017e7e349.mockapi.io/cities"
        );
        response = await response.json();
        countries.push(
          response.filter((country) => {
            let item = country.name;
            countries.push(item.toLowerCase());
          })
        );
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchAPI();
    setAutocomplete(countries);
  }, []);

  const fetchWeatherData = async (city) => {
    let response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=39d6a41f2f1d4974b1d181659212911&q=${city}&days=5&aqi=no&alerts=no`
    );
    response = await response.json();
    // console.log(response);
    dispatch(updateMainCard(response));
    console.log(response);
    dispatch(updateSubCards(response));
  };
  const handleOptionClick = (item) => {
    setSearch(item);
    setDisplay(false);
    fetchWeatherData(item.charAt(0).toUpperCase() + item.slice(1));
  };
  const handleInputChange = ({ target: { value } }) => {
    setSearch(value);
    value ? setDisplay(true) : setDisplay(false);
  };

  for (const [key] of Object.entries(subCards)) {
    cards.push(key);
  }

  return (
    <div className="content">
      <div className="input-wrapper">
        <input
          type="text"
          className="input-wrapper__field"
          placeholder="Search for a city..."
          value={search}
          onChange={handleInputChange}
        />

        {display && (
          <div className="auto">
            {autocomplete &&
              autocomplete
                .filter((country) => country.indexOf(search) > -1)
                .map((item) => (
                  <div onClick={() => handleOptionClick(item)}>{item}</div>
                ))}
          </div>
        )}

        <div className="input-wrapper__btn"></div>
      </div>

      <div className="cards">
        <Card className="mainCard bothCard">
          <h2>
            {mainCard.name}, {mainCard.country}
          </h2>
          <p className="degrees">{mainCard.feelslike_c}&#176;</p>
          <img
            className="mainCard-image"
            src={mainCard.icon}
            alt="weatherIcon"
          />
          <p className="description">{mainCard.text}</p>
          <p className="time">{mainCard.localtime}</p>
          <div className="properties">
            <span className="cardItem">Wind {mainCard.wind_mph}</span>
            <span className="cardItem">Preassure {mainCard.pressure_mb}</span>
            <span className="cardItem">Humidity {mainCard.humidity}</span>
            <span className="cardItem">
              {mainCard.cloud < 35 ? "Cloudness" : "Clouds"}
            </span>
          </div>
        </Card>
        <div className="subCards">
          {cards &&
            cards.map((card, idx) => {
              const value = subCards[card];
              return (
                <Card key={idx} className="subCard bothCard">
                  <h4 className="title">{value.date}</h4>
                  <img
                    className="subCard-image"
                    src={value.icon}
                    alt="weatherIcon"
                  />
                  <p className="degrees">{value.avgtemp_c}&#176;</p>
                  <p className="description">{value.text}</p>
                </Card>
              );
            })}
        </div>
      </div>
    </div>
  );
}
