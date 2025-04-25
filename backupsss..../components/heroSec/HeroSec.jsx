"use client";

import React, { useEffect } from "react";
import "./HeroSec.scss";

export const HeroSec = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijk".toUpperCase();

  useEffect(() => {
    const letters = document.querySelectorAll(".letter");
    letters.forEach((letter) => {
      const randomX = Math.random() * (window.innerWidth - 100);
      const randomY = Math.random() * 100;
      letter.style.left = `${randomX}px`;
      letter.style.top = `${randomY}%`;
    });
  }, []);

  return (
    <div className="hero-sec">
      <div className="main-heading">shaaanuu</div>

      {alphabet.split("").map((letter, index) => (
        <div key={index} className={`letter`}>
          {letter}
        </div>
      ))}
    </div>
  );
};
