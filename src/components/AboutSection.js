import React from "react";
import Container from "./Container";

const AboutSection = () => {
  return (
    <div className=" my-20">
      <Container>
        <div className=" rounded-xl p-10">
          <h3 className="text-center text-2xl font-bold text-secondery">
            About me
          </h3>
          <p className="mx-auto my-5 max-w-[960px] text-center text-slate-600">
            I, m a designer & developer with a passion for web design. I enjoy
            developing simple, clean and slick websites that provide real value
            to the end user. Thousands of clients have procured exceptional
            resulfs while working with me. Delivering work within time and
            budget which meets clients requirements in our mata.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;
