import React from "react";
import { useSelector } from "react-redux";
import Container from "../components/Container";

const Home = () => {
  const data = useSelector((state) => state);
  console.log(data);
  return (
    <div className="px-4 sm:px-0">
      <Container>
        <div className="grid items-center gap-y-4 py-5 sm:grid-cols-1 sm:gap-y-0 md:h-[91vh] md:py-0">
          <div>
            <span className="mb-6 inline-block text-xl text-slate-200">
              Hi, my name is
            </span>
            <h1 className=" mb-5 text-2xl font-bold text-slate-200 sm:text-5xl">
              Md Nishath Khandakar
            </h1>
            <h2 className="mb-4 text-2xl font-semibold text-slate-300 md:text-5xl">
              Front-End Developer
            </h2>
            <p className=" mb-6 text-lg text-slate-400 md:w-[50%]">
              Hi there! I'm Nishath . I'm a Front-End Developer interested in
              proggramming. Currently learning modern JavaScript.
            </p>

            <div className="flex gap-x-4">
              <button className="rounded-sm border border-primary py-2 px-5 text-primary shadow">
                Recent Projects
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
