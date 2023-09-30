import React from "react";
import starWars from "../../assets/icons/starWarsLogo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-img">
        <img src={starWars} alt="" className="logo" />
      </div>
      <div className="content">
        <h1 className="header-title">
          Star Wars <br /> Figures
        </h1>
        <p className="header-description">
          Find the latest products for the biggest fans of the iconic saga.
        </p>
      </div>
    </div>
  );
};

export default Header;
