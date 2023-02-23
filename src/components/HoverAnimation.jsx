import React from "react";
import { motion, AnimatePresence } from "framer-motion";
const HoverAnimation = ({ children }) => {
  const initial = { x: "0" };
  const animate = { x: "0" };
  const transition = { duration: 0.5, originX: 0 };
  const whileHover = { scale: 1, background: "#000" };
  const exit = { x: "-100%", opacity: 1, transition: { duration: 0.3 } };
  return (
    <AnimatePresence>
      <motion.div whileHover={whileHover} transition={transition} exit={exit}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default HoverAnimation;
