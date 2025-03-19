import { useEffect, useState } from "react";
import React from "react";
import Typewriter from "./Typewriting";
import SpotlightCard from "./SpotlightCard";
import { Photos } from "../constants";
import ShowGallery from "./showGallery";
import StarBorder from "./StarBorder";
import Gallery from "./Gallery";
import { Link } from "react-router";

function ProffesionalSkills() {



  return (
    <div className="bg-black text-white py-10 flex flex-col justify-between items-center    px-0 ">
    <h2 className="text-2xl sm:text-3xl md:text-4xl absolute font-[cinzel] font-medium text-center text-[#e3ca85]">
  Professional Skills
</h2>


      <div className="flex flex-col md:flex-row items-center justify-center  py-16 ">
        <div className="w-2/3   md:w-1/2 flex justify-center mt-8 md:mt-0">
          <SpotlightCard className="rounded-lg ">
            <div className="   justify-items-center items-center  md:w-80 md:h-96 r bg-transparent">
              <ShowGallery />
            </div>
          </SpotlightCard>
        </div>
        <div className=" md:w-1/2 mx-10 mr-10 ">
          <p className="text-sm md:text-lg p-0  leading-relaxed mt-5 md:font-[15px] font-[22px] font-[monserrat]">
            Professional skills in {" "}
            <span className="text-[#e3ca85]">Web Designs</span>, ensuring a
            seamless user experience. For {" "}
            <span className="text-[#e3ca85]">Graphic Design</span>, I utilize{" "}
            <span className="text-[#e3ca85]">Photoshop </span>{" "}and{" "} <span className="text-[#e3ca85]">Cnava</span> to craft compelling
            and impactful visuals that align with brand identities.
            Additionally, I have expertise in{" "}
            <span className="text-[#e3ca85]">on-page SEO </span>{" "}as well as{" "}<span className="text-[#e3ca85]">off-page SEO </span>, optimizing
            website content to enhance visibility, improve search rankings, and
            drive organic traffic.
          </p>
          <div className="flex flex-row py-7 space-x-5">
          <div>
              <h1 className="font-[cinzel] text-sm text-[#e3ca85]">
                SEO
              </h1>
              <img
                className="w-25 rounded-md h-10"
                src="https://i.pinimg.com/736x/c0/0a/2a/c00a2a8cf84c042c374ad0a6e924383e.jpg"
              />
            </div>
            <div className="justify-evenly">
              <h1 className="font-[cinzel] text-sm text-[#e3ca85]">
                PhotoShop
              </h1>
              <img
                className="w-25 rounded-md h-10 ml-4"
                src="https://i.pinimg.com/736x/3c/03/bc/3c03bc4d835683de4f70eb79f31b56a3.jpg"
              />
            </div>
            <div>
              <h1 className="font-[cinzel] text-xs text-[#e3ca85]">
                Graphic design
              </h1>
              <img
                className="w-25 rounded-md mb-2 h-10 bg-black"
                src="https://i.pinimg.com/736x/c9/35/61/c93561ce889c03839424e455d98579c3.jpg"
              />
            </div>
          </div>
          <StarBorder
           
            className="custom-class"
            color="cyan"
            speed="5s"
          >
            <Link to="/Gallery">
          <button>
            Gallery
          </button>
          </Link>
          </StarBorder>
        </div>
      </div>
      <div className="flex justify-center mt-6 font-montserrat">
        <p className="text-2xl px-4 font-[cinzel] text-[#fff]">
          {" "}
          <Typewriter
            text="Creating user-centric designs that balance creativity and functionality."
            typingSpeed={150}
            className=" text-xl  font-[cinzel] text-[#fff]"
            loop={1}
          />{" "}
        </p>
      </div>
    </div>
  );
}

export default ProffesionalSkills;
