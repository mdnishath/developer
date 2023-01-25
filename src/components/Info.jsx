import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";
import { AiFillGithub } from "react-icons/ai";
import { SiUpwork } from "react-icons/si";

const Info = () => {
  return (
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
  );
};

export default Info;
