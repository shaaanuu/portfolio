import React from "react";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <div className="NavBar">
      <h3>
        <a href="#">shaaanuu</a>
      </h3>
      <div className="menu">
        <a href="#">about</a>
        <a href="#">services</a>
        <a href="#">projects</a>
        <div className="letsTalk">Lets's Talk</div>
      </div>
    </div>
  );
};
