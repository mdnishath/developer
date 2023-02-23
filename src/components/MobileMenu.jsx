import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const MobileMenu = () => {
  const [show, setShow] = useState(false);
  console.log(show);
  // Animation

  const initial = { width: "0vw", x: "-100vw" };
  const animate = { width: "80vw", x: 0 };
  const transition = { duration: 0.5, origin: 0 };
  const exit = { x: "-100%", opacity: 1, transition: { duration: 0.3 } };
  return (
    <div className="absolute z-[100] w-full">
      <div className="flex justify-end">
        <button onClick={() => setShow(!show)}>
          <CgMenuRight className="mr-4 mt-4 text-2xl text-primary" />
        </button>
        <AnimatePresence>
          {show && (
            <motion.div
              initial={initial}
              animate={animate}
              transition={transition}
              exit={exit}
              className="absolute left-0 top-0 h-screen w-3/4 divide-y divide-dark-secondery dark:bg-dark-primary"
            >
              <div className="flex items-start justify-between py-4">
                <div className="w-[150px] pl-4">
                  <img src="images/dark-logo.svg" alt="" />
                </div>
                <button onClick={() => setShow(false)}>
                  <AiOutlineClose className="mr-4 mt-4 text-2xl text-primary" />
                </button>
              </div>
              <ul className="menu pl-4 font-semibold text-secondery">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/skills">Skills</NavLink>
                </li>
                <li>
                  <NavLink to="/projects">Projects</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact </NavLink>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MobileMenu;
