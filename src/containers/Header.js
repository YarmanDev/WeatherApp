import React from "react";
import "../scss/header.scss";
import { HomeSvg, OptionsSvg } from "../components/svg/HeadersSvg";

export const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">WeatherApp</h1>
      <div className="header-icons">
        <HomeSvg />
        <OptionsSvg />
      </div>
    </header>
  );
};
