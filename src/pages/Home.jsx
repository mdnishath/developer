import React from "react";
import { useSelector } from "react-redux";
import Container from "../components/Container";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";
import { AiFillGithub } from "react-icons/ai";
import { SiUpwork } from "react-icons/si";

const Home = () => {
  const data = useSelector((state) => state);
  console.log(data);
  return (
    <div className=" px-4 dark:bg-dark-primary sm:px-0">
      <div className="flex h-screen items-center">
        <div className="mx-auto w-[650px] rounded-lg">
          <div>
            <div className="mx-auto w-[120px] rounded-full">
              <img
                className="rounded-full ring-4 ring-primary"
                src="images/profile.jpg"
                alt=""
              />
            </div>
            <p className="mt-5 mb-5 text-center text-lg dark:text-dark-text">
              Hi, my name is
            </p>
            <p className="mb-4 text-center  text-3xl font-bold dark:text-dark-text md:mb-2">
              Md Nishath Khandakar
            </p>
            <h1 className="mb-4 text-center text-2xl font-bold dark:text-dark-third">
              Progressive web developer
            </h1>
            <p className="text-center text-lg dark:text-dark-text-2">
              1 year of IT experience in developing web applications as a
              fresher. Good knowledge of HTML, CSS, JavaScript, React JS,
              Firebase, Figma, Bootstrap, and Tailwind CSS.
            </p>
            <div className="flex justify-center">
              <button class="btn mt-5 border-primary bg-transparent hover:border-primary hover:bg-transparent">
                Checkout My Projects
              </button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className=" bottom-[200px] left-[100px]  lg:absolute">
              <div className="text-bse mt-10 flex flex-col items-center justify-center gap-8 ">
                <FaFacebookF className="text-secondery duration-200 ease-linear hover:text-primary" />
                <FaTwitter className="text-secondery duration-200 ease-linear hover:text-primary" />
                <TfiLinkedin className="text-secondery duration-200 ease-linear hover:text-primary" />
                <AiFillGithub className="text-secondery duration-200 ease-linear hover:text-primary" />
                <SiUpwork className="text-secondery duration-200 ease-linear hover:text-primary" />
              </div>
              <div className="relative w-full">
                <div className="absolute bottom-[-200px] left-1/2 h-[180px] w-[2px] bg-secondery"></div>
              </div>
            </div>
            <div className=" bottom-[200px] right-[100px] lg:absolute">
              <div className="mt-10 flex flex-col items-center justify-center gap-4">
                <p className="vtr text-base text-secondery">
                  wpprodeveloper@gmail.com
                </p>
              </div>
              <div className="relative w-full">
                <div className="absolute bottom-[-200px] left-1/2 h-[180px] w-[2px] bg-secondery"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
