import { useEffect, useState } from "react";
import React from "react";
import yourimage from "../assets/image-home.jpg";
import Typewriter from "./Typewriting";

function AboutOutlet() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center py-16 px-6 sm:px-10 md:px-16">
      <h2 className="text-4xl sm:text-5xl font-[cinzel] mt-6 mb-10 text-[#e3ca85] text-center">
        About Me
      </h2>
      <main className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-10">
        <div className="md:w-1/2">
          <p className="text-base sm:text-lg leading-relaxed font-montserrat">
            Hi, I’m <span className="text-[#e3ca85]">Vedansh Chandak</span>, a
            passionate <span className="text-[#e3ca85]">Web Developer</span> and
            Graphic Designer who thrives at the intersection of technology and
            artistry.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mt-4 font-montserrat">
            I believe great work comes from a balance of technical precision
            and creative imagination. My mission is to merge these two worlds,
            helping businesses and individuals communicate their stories
            effectively in the digital space.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mt-4 font-montserrat">
            Combining my technical development skills with a flair for creative
            design, I ensure each project is both innovative and effective.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mt-6 font-[montserrat] text-[#e3ca85] font-medium">
            Great websites aren’t built in a day; they are built with vision
            and persistence.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src={yourimage}
            alt="Vedansh Chandak"
            className="w-72 sm:w-80 h-auto max-h-[400px] rounded-md border-2 border-[#e3ca85] shadow-lg"
          />
        </div>
      </main>
    </div>
  );
}

export default AboutOutlet;
