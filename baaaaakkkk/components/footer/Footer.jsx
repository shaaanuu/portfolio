import React from "react";
import "./Footer.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <span className="copyright-icon">&#169;</span>
          <span className="year">{currentYear}</span>
          <span className="name">Muhammed Shan</span>
        </div>
      </div>
    </footer>
  );
};
