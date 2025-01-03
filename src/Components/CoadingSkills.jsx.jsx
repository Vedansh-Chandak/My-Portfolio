import { useEffect, useState } from "react";
import React from "react";
import ShowGallery from "./showGallery";
import { InfiniteSlider } from "./InfiniteSlider";
import { Photos } from "../constants";
import ProffesionalSkills from "./ProffesionalSkills";
import image from '../assets/Ai.png'
import EcommerseImg from '../assets/Ecommerse.png'
import bmi from '../assets/bgm.png'
import todo from '../assets/Todo.png'

function CoadingSkills() {
  return (
    <div className="bg-black text-white  flex flex-col justify-between items-center    px-0 md:px-0 py-5">
      <h2 className="text-4xl absolute  font-[cinzel] font-medium justify-center text-[#e3ca85]">
        MY SKILLS <br />
        <span className="text-white text-[28px] ">coading skills</span>
      </h2>

      <main className="flex flex-col md:flex-row items-center justify-between px-8 py-16 ">
        <div className="mx-0  md:mx-12">
          <p className="text-sm md:text-lg p-0 md:px-10 leading-relaxed mt-5 md:font-[15px] font-[22px] font-[monserrat]">
            A skilled <span className="text-[#e3ca85]">Web Developer</span> with
            expertise in the <span className="text-[#e3ca85]">MERN stack <br/> </span>{" "}
            and proficiency in <span className="text-[#e3ca85]">JavaScript</span>{" "}
            and its libraries.
            <br/>
            
            Exploring advanced concepts, refining skills, and building <br/> efficient, user-centric applications to drive impactful digital solutions.
            <br />
            <br/>
            <br/>
            
            Currently advancing in{" "}
            <span className="text-[#e3ca85]">DSA with C++</span>, mastering{" "}
            <span className="text-[#e3ca85]">Devops</span>, and exploring{" "}
            <span className="text-[#e3ca85]">GenAI</span>.
          </p>
          <div className="flex flex-row py-7  justify-center space-x-8">
            <div>
              
              <img
                className="w-20 rounded-md h-16"
                src="https://i.pinimg.com/736x/77/43/47/77434785352285b35f67c6f3e985d04e.jpg"
              />
            </div>
            <div>
              
              <img
                className="w-30 rounded-md h-16 bg-black"
                src="https://th.bing.com/th?id=OIP.c9BbPNmGFrhbXYTdOTG6FAHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              />
            </div>
          </div>
         

        </div>

        <div className="w-2/3  flex-col  md:w-1/3 rounded-lg border-2 border-[#e3ca85] border-opacity-25 space-y-5 flex items-center justify-center mt-6 md:mt-0">
          <h1 className="text-[28px] my-4 font-[cinzel]  ">projects</h1>
          <div className="mx-10 grid grid-cols-2 gap-8 justify-items-center items-center bg-transparent">
            <div className="bg-gray-700 md:w-40 md:h-40 flex justify-center items-center rounded-lg">
       <a href="https://www.linkedin.com/in/vedansh-chandak-842943290/">
       <img src={image}></img>
       </a>
              
            </div>
            <div className="bg-gray-700 md:w-40 md:h-40 flex justify-center items-center rounded-lg">
             <a href="https://www.linkedin.com/in/vedansh-chandak-842943290/">
             <img src={EcommerseImg}></img>
             </a>
            </div>
            <div className="bg-gray-700 md:w-40 md:h-40 flex justify-center items-center rounded-lg">
            <a  href="https://www.linkedin.com/in/vedansh-chandak-842943290/">
            <img src={bmi}></img>
            </a>
            </div>
            <div className="bg-gray-700 md:w-40 md:h-40 flex justify-center items-center rounded-lg">
             <a href="https://www.linkedin.com/in/vedansh-chandak-842943290/">
             <img src={todo}></img>
             </a>
            </div>
          </div>

          <div>
            <div className=" my-5 flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-200 hover:text-white transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6 hover:fill-white transition-colors duration-300"
                >
                  <path d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.302 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577v-2.23c-3.338.727-4.033-1.416-4.033-1.416-.546-1.38-1.333-1.748-1.333-1.748-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.997.107-.775.42-1.305.762-1.606-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.382 1.235-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.007-.322 3.3 1.23a11.48 11.48 0 013.003-.404c1.018.005 2.044.137 3.003.404 2.292-1.552 3.297-1.23 3.297-1.23.654 1.653.243 2.873.12 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.625-5.476 5.921.43.37.815 1.096.815 2.213v3.28c0 .319.217.694.825.577C20.565 22.092 24 17.594 24 12.297 24 5.67 18.627.297 12 .297z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-200 hover:text-white transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6 hover:fill-white transition-colors duration-300"
                >
                  <path d="M19 0H5C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM8.3 19.2H5.5V9.1h2.8v10.1zm-1.4-11.5c-.9 0-1.5-.6-1.5-1.4 0-.8.6-1.4 1.5-1.4.9 0 1.5.6 1.5 1.4 0 .8-.6 1.4-1.5 1.4zm12.6 11.5h-2.8v-5.5c0-1.3-.5-2.2-1.7-2.2-.9 0-1.4.6-1.6 1.1-.1.2-.1.5-.1.8v5.8h-2.8s.1-9.4 0-10.1h2.8v1.4c.4-.7 1.1-1.6 2.8-1.6 2.1 0 3.7 1.4 3.7 4.4v5.9z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
      <InfiniteSlider />

      <div className="mt-28">
        <ProffesionalSkills/>
      </div>
    </div>
  );
}

export default CoadingSkills;
