import React from "react";
import yourimage from '../assets/image-home.jpg';
import Typewriter from "./Typewriting";
import { Link } from "react-router";

function Home() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <main className="flex flex-col md:flex-row items-center justify-between px-4 py-10 md:px-4 md:py-16 w-full">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-[#e3ca85] shadow-lg">
            <img
              src={yourimage}
              alt="Vedansh Chandak"
              className="w-full h-full object-cover rounded-full"
            />
      <Link to='/Cv'> <a
  className="mt-4 mx-auto font-bold sm:ml-14 block text-black bg-[#e3ca85] p-3 rounded-3xl w-40 sm:w-48 max-w-[200px] border-white border-2 hover:bg-[#ebc04b] hover:text-black text-center hover:font-semibold text-sm sm:text-base"
>
  View My CV
</a>
</Link>
 
            <div className="flex justify-center gap-4 mt-4">
              <a href="https://gmail.com">
                <img 
                  src="https://i.pinimg.com/736x/84/d9/9b/84d99b9cd99b57489776cdcf46517e58.jpg"
                  className="w-10 h-10 border-solid border-[#f1d27d] border-2 rounded-md"
                />
              </a>
              <a href="https://instagram.com">
                <img 
                  src="https://i.pinimg.com/236x/0c/23/33/0c23332059f19519c291c00496b5f056.jpg"
                  className="w-10 h-10 border-solid border-[#f1d27d] border-2 rounded-md"
                />
              </a>
              <a href="https://linkedin.com">
                <img 
                  src="https://i.pinimg.com/236x/ba/72/3f/ba723fc8dfb5362956a680df14943be3.jpg"
                  className="w-10 h-10 border-solid border-[#f1d27d] border-2 rounded-md"
                />
              </a>
            </div>
          </div>
        </div>

    
        <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0 px-4 md:px-0">
          <h1 className="text-3xl  md:text-4xl lg:text-4xl font-extrabold font-[cinzel] tracking-wide leading-tight text-[#e3ca85] mt-28">
            VEDANSH CHANDAK
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-[#e3ca85] mt-4">
            Hi, I’m Vedansh Chandak, a Web Developer and Graphic Designer
          </p>
          <p className="text-sm md:text-base lg:text-lg mt-2">
            I specialize in crafting innovative websites and visually captivating designs. Whether you're looking for a cutting-edge web application or a compelling graphic identity, I've got you covered.
          </p>
          <div className="text-center md:text-left mt-6 p-4 rounded-lg shadow-md">
  <p className="text-base sm:text-lg md:text-xl leading-relaxed">
    Welcome to the <span className="text-blue-500">React</span> world where{" "}
    <Typewriter
      text="Blending creativity and functionality"
      typingSpeed={80}
      className="text-[#e3ca85] font-serif"
      loop={1}
    />{" "}
    to build dynamic web solutions and stunning visuals!
  </p>
</div>


        </div>
      </main>
    </div>
  );
}

export default Home;
