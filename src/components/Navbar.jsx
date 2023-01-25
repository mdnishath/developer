import React from "react";
import { NavLink } from "react-router-dom";
import Container from "./Container";

const Navbar = () => {
  return (
    <div className="absolute w-full py-4 dark:bg-dark-primary lg:px-[100px]">
      <div className="navbar px-0 dark:bg-dark-primary">
        <div className="flex-1">
          <div className="w-[150px]">
            <img src="images/dark-logo.svg" alt="" />
          </div>
        </div>
        <div className="flex-none dark:text-slate-300">
          <ul className="menu menu-horizontal px-1 dark:text-dark-text">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/skils">Skills</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
