import React from "react";
import { useSelector } from "react-redux";
import Container from "../components/Container";
import Info from "../components/Info";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

const Home = () => {
  const data = useSelector((state) => state);
  console.log(data);
  return (
    <Layout>
      <Container>
        <div className="mx-auto rounded-lg lg:w-[650px]">
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
              <motion.button
                whileHover={{
                  scale: 1.1,
                }}
                className="btn mt-5 border-primary bg-transparent hover:border-primary hover:bg-transparent"
              >
                Checkout My Projects
              </motion.button>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Home;
