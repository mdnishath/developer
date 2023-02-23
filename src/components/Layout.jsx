import React from "react";
import Info from "./Info";
import { motion, AnimatePresence } from "framer-motion";

const Layout = ({ children }) => {
  const initial = { width: "0vw", x: "-100vw" };
  const animate = { width: "100vw", x: 0 };
  const transition = { duration: 0.5, originX: 0 };
  const exit = { opacity: 1, transition: { duration: 0.3 } };
  return (
    <AnimatePresence>
      <motion.div
        initial={initial}
        animate={animate}
        transition={transition}
        exit={exit}
        className=" bg-cover bg-no-repeat px-4 dark:bg-bg sm:px-0"
      >
        <div className="flex h-screen items-center"> {children}</div>
        <Info />
      </motion.div>
    </AnimatePresence>
  );
};

export default Layout;
