import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen   bg-gradient-to-r from-black to-blue-900 ... text-gray-300 overflow-x-hidden"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right text-center pb-8 pl-4">
            <p className="text-4xl font-bold inline ">About</p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-2xl font-bold">
            <p>
              Hi. I'm Manoj Kumar, Nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
            I specialize in the MERN stack, focusing on creating dynamic and responsive web applications. I have built a solid foundation in HTML, CSS, JavaScript, and React, among other front-end frameworks.<br/> 
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. <br />I am actively looking
              for a position as a MERN stack developer, where I can contribute
              my skills and grow as a developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
