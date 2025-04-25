"use client";

import React, { useState } from "react";
import "./NavBar.scss";
import { motion } from "framer-motion";
import { IconMenu } from "@tabler/icons-react";
import Link from "next/link";

export const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const onClick = () => {
    console.log("clicked");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="NavBar">
      <h3>
        <Link href="/">shaaanuu</Link>
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
        <IconMenu className="dropbtn" onClick={toggleDropdown} />
        {isDropdownOpen && (
          <div className="mobile-menu">
            <Link href="/#about" onClick={toggleDropdown}>
              About
            </Link>
            <Link href="/blog" onClick={toggleDropdown}>
              Blog
            </Link>
            <Link href="/" onClick={toggleDropdown}>
              Projects
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
