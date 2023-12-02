import React from "react";
import "./HeroSec.scss";
import { motion } from "framer-motion";

export const HeroSec = () => {
  return (
    <div className="hero-sec">
      <div
        className="bg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "just",
          stiffness: 100,
          damping: 20,
        }}
      >
        <div>
          <motion.p
            initial={{ x: -1500, scale: 0 }}
            animate={{ x: 0, scale: 1 }}
            transition={{
              type: "just",
              stiffness: 100,
              damping: 20,
            }}
          >
            HEY, I'M SHAN
          </motion.p>
          <motion.p
            initial={{ x: 1500, scale: 0 }}
            animate={{ x: 0, scale: 1 }}
            transition={{
              type: "just",
              stiffness: 100,
              damping: 20,
            }}
          >
            <span>HEY, I'M SHAN</span>
          </motion.p>
          <motion.p
            initial={{ x: -1500, scale: 0 }}
            animate={{ x: 0, scale: 1 }}
            transition={{
              type: "just",
              stiffness: 100,
              damping: 20,
            }}
          >
            HEY, I'M SHAN
          </motion.p>
        </div>
      </div>
    </div>
  );
};
