import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-r from-black to-blue-900 ... overflow-x-hidden"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className='text-white text-2xl font-bold"'>Hello folks! This is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          MANOJ KUMAR
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a {" "}
          <ReactTyped
                className=" text-gray-700 font-bold  "
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={50}
                backSpeed={50}
                loop={true}
              /> 
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm passionate MERN stack developer. I specialize in creating dynamic
          and efficient web applications using MongoDB, Express.js, React, and
          Node.js. Explore my projects to see how I bring ideas to life through
          code. I'm always open to new opportunities and collaborations, so feel
          free to reach out!
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 border-blue-500 px-6 py-3 my-2 flex items-center bg-blue-500 hover:bg-blue-900 hover:border-blue-900 transition duration-700">
              View Work
              <span className="group-hover:rotate-90 transition duration-700">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
