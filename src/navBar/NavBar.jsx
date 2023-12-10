import React from "react";
import "./NavBar.scss";
import { motion } from "framer-motion";
import { IconMenu } from "@tabler/icons-react";
import Dropdown from "rc-dropdown";
import "rc-dropdown/assets/index.css";

export const NavBar = () => {
  const onClick = () => {
    console.log("clicked");
  };
  const menu = (
    <ul className="drop-menu-items">
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Services</a>
      </li>
      <li>
        <a href="#">Projects</a>
      </li>
    </ul>
  );

  return (
    <div className="NavBar">
      <h3>
        <a href="#">shaaanuu</a>
      </h3>
      <div className="menu">
        <div className="menu-items">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
        </div>
        <Dropdown overlay={menu} trigger={["click"]} className="drop-down">
          <IconMenu className="dropbtn" />
        </Dropdown>
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
