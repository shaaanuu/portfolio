import React from "react";
import "./NavBar.scss";
import { motion } from "framer-motion";

export const NavBar = () => {
  const onClick = () => {
    console.log("clicked");
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
        <motion.div
          className="letsTalk"
          onClick={onClick}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Lets's Talk
        </motion.div>
      </div>
    </div>
  );
};
