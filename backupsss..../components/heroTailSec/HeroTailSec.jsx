"use client";
import React, { useState, useEffect } from "react";
import "./HeroTailSec.scss";

export const HeroTailSec = () => {
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    if (cursor && isHovering) {
      cursor.classList.add("hero-tail-hover");
    }

    return () => {
      const cursor = document.querySelector(".cursor");
      if (cursor) {
        cursor.classList.remove("hero-tail-hover");
      }
    };
  }, [isHovering]);

  return (
    <div className="HeroTailSec" id="about">
      <h1
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className={isHovering ? "text-hover" : ""}
      >
        I blend design with code to craft experiences that breathe life into
        digital spaces
      </h1>
    </div>
  );
};
