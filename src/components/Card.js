import React from "react";

export const Card = ({ style, cardType, className }) => {
  const isMainCard = "cloud" in cardType;
  const cardClass = className.split(" ")[0];
  return (
    <div className={className} style={style}>
      <h2 className="title">
        {isMainCard ? ` ${cardType.name}, ${cardType.country}` : cardType.date}
      </h2>
      <p className="degrees">
        {isMainCard ? cardType.feelslike_c : cardType.avgtemp_c}&#176;
      </p>
      <img
        className={`${cardClass}-image`}
        src={cardType.icon}
        alt="weatherIcon"
      />
      <p className="description">{cardType.text}</p>
      <p className="time">{cardType.localtime}</p>
      {isMainCard && (
        <div className="properties">
          <span className="cardItem">Wind {cardType.wind_mph}</span>
          <span className="cardItem">Preassure {cardType.pressure_mb}</span>
          <span className="cardItem">Humidity {cardType.humidity}</span>
          <span className="cardItem">
            {cardType.cloud < 35 ? "Cloudness" : "Clouds"}
          </span>
        </div>
      )}
    </div>
  );
};
