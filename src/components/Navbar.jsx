import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";
import HoverAnimation from "./HoverAnimation";

const Navbar = () => {
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 768;
  console.log(windowDimension);
  return (
    <>
      {isMobile ? (
        <MobileMenu />
      ) : (
        <div className="absolute z-[100] w-full  py-4 lg:px-[100px]">
          <div className="navbar px-0 ">
            <div className="flex-1">
              <div className="w-[150px]">
                <img src="images/dark-logo.svg" alt="" />
              </div>
            </div>
            <div className="flex-none dark:text-slate-300">
              <ul className="menu menu-horizontal gap-4 px-1 dark:text-dark-text">
                <li>
                  <NavLink to="/" className="hover:bg-dark-primary">
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/about" className="hover:bg-dark-primary">
                    About
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/skils" className="hover:bg-dark-primary">
                    Skills
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/projects" className="hover:bg-dark-primary">
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="hover:bg-dark-primary">
                    Contact{" "}
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
