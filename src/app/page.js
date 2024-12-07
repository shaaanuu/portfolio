"use client";

import { useEffect } from "react";
import { Footer } from "./components/footer/Footer";
import { HeroSec } from "./components/heroSec/HeroSec";
import { HeroTailSec } from "./components/heroTailSec/HeroTailSec";
import { NavBar } from "./components/navBar/NavBar";
import "./page.scss";

export default function Home() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursor = document.querySelector(".cursor");
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div className="cursor" />

      <NavBar />
      <HeroSec />
      <HeroTailSec />
      <Footer />
    </>
  );
}
