import React from "react";
import "./NavBar.scss";

export const NavBar = () => {
  const onClick = () => {
    console.log('clicked')
  };

  return (
    <div className="NavBar">
      <h3>
        <a href="#">shaaanuu</a>
      </h3>
      <div className="menu">
        <a href="#">about</a>
        <a href="#">services</a>
        <a href="#">projects</a>
        <div className="letsTalk" onClick={onClick}>
          Lets's Talk
        </div>
      </div>
    </div>
  );
};
