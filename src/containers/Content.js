import { React, useEffect, useState } from "react";
import "../scss/content.scss";
import { Card } from "../components/Card";
import { useSelector, useDispatch } from "react-redux";
import { fetchCitiesNames } from "../fetchers/fetchData";
import { fetchWeatherData } from "../actions/updateCards.action";

export const Content = () => {
  const mainCard = useSelector((state) => state.currentWeatherReducer);
  const subCards = useSelector((state) => state.forecastReducer);
  const [autocomplete, setAutocomplete] = useState([]);
  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setAutocomplete(fetchCitiesNames());
  }, []);

  const handleOptionClick = (item) => {
    const capitilizedWord = item.charAt(0).toUpperCase() + item.slice(1);
    setSearch(item);
    setDisplay(false);
    dispatch(fetchWeatherData(capitilizedWord));
  };
  const handleInputChange = ({ target: { value } }) => {
    setSearch(value);
    setDisplay(!!value);
  };

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
                .map((item, idx) => (
                  <div key={idx} onClick={() => handleOptionClick(item)}>
                    {item}
                  </div>
                ))}
          </div>
        )}

        <span className="input-wrapper__btn"></span>
      </div>

      <div className="cards">
        <Card className="mainCard bothCard" cardType={mainCard}></Card>
        <div className="subCards">
          {subCards &&
            subCards.map((card, idx) => (
              <Card key={idx} className="subCard bothCard" cardType={card} />
            ))}
        </div>
      </div>
    </div>
  );
};
