// import { motion } from "framer-motion";
//  const HeroSecBak = () => {
//   return (
//     <div className="hero-sec">
//       <motion.div
//         className="bg"
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{
//           type: "just",
//           stiffness: 100,
//           damping: 20,
//         }}
//       >
//         <div>
//           <motion.p
//             initial={{ x: -1500, scale: 0 }}
//             animate={{ x: 0, scale: 1 }}
//             transition={{
//               type: "just",
//               stiffness: 100,
//               damping: 20,
//             }}
//           >
//             HEY, I'M SHAN
//           </motion.p>
//           <motion.p
//             initial={{ x: 1500, scale: 0 }}
//             animate={{ x: 0, scale: 1 }}
//             transition={{
//               type: "just",
//               stiffness: 100,
//               damping: 20,
//             }}
//           >
//             <span>HEY, I'M SHAN</span>
//           </motion.p>
//           <motion.p
//             initial={{ x: -1500, scale: 0 }}
//             animate={{ x: 0, scale: 1 }}
//             transition={{
//               type: "just",
//               stiffness: 100,
//               damping: 20,
//             }}
//           >
//             HEY, I'M SHAN
//           </motion.p>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

//
//
//
//
//

// export const HeroSec = () => {
//   const alphabet = "abcdefghijklmnopqrstuvwxyz";

//   return (
//     <div className="hero-sec">
//       <div className="main-heading">shaaanuu</div>

//       {alphabet.split("").map((letter, index) => (
//         <div key={index} className={`glyph-${letter} glyphs`}>
//           {letter}
//         </div>
//       ))}
//     </div>
//   );
// };

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
