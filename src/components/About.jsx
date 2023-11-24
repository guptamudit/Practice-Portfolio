import { useEffect } from "react";
import picofme from "../assets/picofme.png";
import resume from "../assets/resume.pdf";
import gsap from "gsap";
const About = () => {
  //

  return (
    <div className="p-[10px]" id="main">
      <div className="lg:mx-12 py-10 mx-4 bg-bgShade  h-auto " id="about">
        <div className="flex flex-col sm:flex-row md:gap-24 gap-6 items-center justify-around ">
          <div className="sm:w-1/2 lg:ml-[130px] ml-[-2px]">
            <img src={picofme} alt="" className="w-[376px] " />
          </div>
          <div className="sm:w-1/2 ml-[20px]">
            <h2 className="md:text-5xl text-4xl text-headingcolor font-bold text-center sm:text-left">
              About Me
            </h2>
            <p className="mt-8 md:pr-8 mb-8 text-center sm:text-left">
              A Punctual and Enthusiastic B-tech student, constantly seeking new
              opportunities to grow and contribute in tech field. My aim is to
              acquire new skills to make up with the constantly growing market.
              <br /> <br />
              I'm excited to connect with like-minded individuals and
              collaborate on multiple projects.
            </p>
            <a href={resume} download className="flex justify-center sm:block">
              <button className="px-8 py-4  bg-primary text-xl text-white  hover:bg-body hover:text-white transition-all duration-300 rounded-2xl">
                Contact Me
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
