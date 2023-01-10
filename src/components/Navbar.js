import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import Image from "./Image";

const Navbar = () => {
  return (
    <div className="sm:px-4">
      <Container>
        <div className="grid h-[9vh] gap-2 px-4 py-4 sm:grid-cols-navbar sm:items-center sm:gap-0 sm:py-4 sm:px-0">
          <div className="">
            <Link to="/">
              <Image className="w-10" link="images/logo.svg" />
            </Link>
          </div>
          <div className="">
            <ul className="flex flex-col justify-end gap-x-8 text-sm font-semibold text-slate-200 sm:flex-row sm:text-base">
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>About</Link>
              </li>
              <li>
                <Link>Portfolio</Link>
              </li>
              <li>
                <Link>Contact</Link>
              </li>
            </ul>
          </div>
          <div className=" sm:justify-self-end">
            <button className=" rounded-sm border border-primary py-2 px-5 text-primary shadow">
              Hire me!
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
