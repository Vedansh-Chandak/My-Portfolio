import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import yourimage from '../assets/image-home.jpg'
import CoadingSkills from "./CoadingSkills.jsx";
import ProffesionalSkills from "./ProffesionalSkills.jsx";
import SpotlightCard from "./SpotlightCard";
import Home from "./HomeOutlet.jsx";
function Landing() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [project, setProject] = useState([]);
  const [Completed, setCompleted] = useState();
  const [experience, setExperience] = useState();
  const [img, setImg] = useState([]);

  async function fetchData() {
    try {
      const res = await fetch("../../Data.json");
      const data = await res.json();
      setProject(data);

      if (data.projects && data.projects.length > 0) {
        setCompleted(data.projects[0].completeProject);
        setExperience(data.projects[0].experince);
        const urls = data.projects.map((project) => project.imgUrl).filter(Boolean); 
        setImg(urls);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col font-montserrat relative px-4">
      <main className="relative z-10">
  
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-6xl mx-auto gap-8 mt-20 px-4">
          <div className="lg:w-1/2 w-full text-center lg:text-left mb-6 lg:mb-0">
            <h2 className="text-3xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 font-[cinzel] mb-6">
              I am Vedansh Chandak
            </h2>
            <h3 className="text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-[#e3ca85] to-yellow-500 mb-4">
              Web Developer + UX Designer
            </h3>
            <p className="text-lg sm:text-xl leading-relaxed text-gray-400 mb-4">
              With expertise in building responsive websites, designing visually compelling graphics, and crafting intuitive UI/UX designs, I strive to create seamless user experiences that elevate brands and engage audiences.
            </p>
          
          </div>
          <div className="lg:w-1/2 w-full flex justify-center items-center mb-6 lg:mb-0">
            <img
              src={yourimage}
              alt="Vinay Patidar"
              className="w-64 h-80 object-cover rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            />
          </div>
        </div>
      </main>
      <div className="flex justify-center gap-x-16 mt-28 flex-wrap px-4">
        <div className="flex flex-col items-center mb-8 lg:mb-0">
          <p className="text-6xl font-mono text-yellow-400">{Completed}</p>
          <h4 className="text-xl text-gray-400 mt-2">
            Completed <span className="font-bold text-white">Projects</span>
          </h4>
        </div>
        <div className="flex flex-col items-center mb-8 lg:mb-0">
          <p className="text-6xl font-mono text-yellow-400">{experience}</p>
          <h4 className="text-xl text-gray-400 mt-2">
            Years of <span className="font-bold text-white">Experience</span>
          </h4>
        </div>
      </div>
<div className="px-4">
  <Home/>
</div>
     

   <div className="mt-28">
   <CoadingSkills/>
   </div>

    </div>
  );
}

export default Landing;
