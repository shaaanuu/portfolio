"use client";

import { useEffect } from "react";
import { NavBar } from "./components/navBar/NavBar";
import "./cursor.scss";

// Woah... the metadata won't work for now... :(

// export const metadata = {
//   title: "shaaanuu",
//   description: "A simple but elegant space of mine on the internet.",
// };

export default function RootLayout({ children }) {
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
    <html lang="en">
      <body>
        <div className="cursor" />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
