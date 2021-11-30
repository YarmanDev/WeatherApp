import React from "react";
import "../scss/content.scss";
import Card from "../components/Card";
export default function Content() {
  fetch(
    "http://api.weatherapi.com/v1/forecast.json?key=39d6a41f2f1d4974b1d181659212911&q=London&days=4&aqi=no&alerts=no"
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
  const arr = [0, 1, 2, 3];
  return (
    <div className="content">
      <div className="input-wrapper">
        <input
          type="text"
          className="input-wrapper__field"
          placeholder="Search for a city..."
        />
        <div className="input-wrapper__btn"></div>
      </div>

      <div className="cards">
        <Card className="mainCard bothCard">
          <h2>Lviv, Ukraine</h2>
          <p className="degrees">23&#176;</p>
          <img
            className="mainCard-image"
            src="../../images/clear-sky-day.svg"
            alt="weatherIcon"
          />
          <p className="description">Clear Sky</p>
          <p className="time">Thursday 14.20 PM</p>
          <div className="properties">
            <span className="cardItem">Wind 5.7 m/s</span>
            <span className="cardItem">Preassure 1015 hPa</span>
            <span className="cardItem">Humidity 50%</span>
            <span className="cardItem">Cloudiness</span>
          </div>
        </Card>
        <div className="subCards">
          {arr &&
            arr.map((card, idx) => {
              return (
                <Card key={idx} className="subCard bothCard">
                  <h4 className="title">Saturday</h4>
                  <img
                    className="subCard-image"
                    src="../../images/clear-sky-day.svg"
                    alt="weatherIcon"
                  />
                  <p className="degrees">23&#176;</p>
                  <p className="description">Clear Sky</p>
                </Card>
              );
            })}
        </div>
      </div>
    </div>
  );
}
