"use client";

import React from "react";
import "./NavBar.scss";
import { motion } from "framer-motion";
import { IconMenu } from "@tabler/icons-react";
import Dropdown from "rc-dropdown";
import "rc-dropdown/assets/index.css";
import Link from "next/link";

export const NavBar = () => {
  const onClick = () => {
    console.log("clicked");
  };
  const menu = (
    <ul className="drop-menu-items">
      <li>
        <Link href="/#about">About</Link>
      </li>
      <li>
        <Link href="/blog">Blog</Link>{" "}
      </li>
      <li>
        <Link href="/">Projects</Link>
      </li>
    </ul>
  );

  return (
    <div className="NavBar">
      <h3>
        <Link href="#">shaaanuu</Link>
      </h3>
      <div className="menu">
        <div className="menu-items">
          <Link href="/#about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/">Projects</Link>
        </div>
        <motion.div
          className="letsTalk"
          onClick={onClick}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Let&apos;s Talk
        </motion.div>
        <Dropdown overlay={menu} trigger={["click"]} className="drop-down">
          <IconMenu className="dropbtn" />
        </Dropdown>
      </div>
    </div>
  );
};
