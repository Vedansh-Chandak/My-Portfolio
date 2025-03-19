import React from "react";
import { Photos } from "../constants";



function Gallery(){
  return (
    
    
    <div className="relative font-inter antialiased">
  
      <main className="relative min-h-screen flex flex-col justify-center bg-black overflow-hidden">
        <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-10">
          <div className="block flex-col justify-items-center">
          <h1 className="font-[cinzel] text-[#e3ca85] text-[25px] md:text-[35px] justify-items-center " >Proffesional Skills</h1>
          <h1 className="font-[cinzel] text-[#fff] text-[15px] md:text-[25px] justify-items-center" >and</h1>
          <h1 className="font-[cinzel] text-[#e3ca85] text-[25px] md:text-[35px] justify-items-center " >Hobbies</h1>
          </div>
          <div className="space-y-20">
            
            

            {/* Masonry Layout with CSS Columns */}
            <div>
              
              <div className="columns-2 md:columns-4 gap-4 space-y-4">
                {Photos.map((image) => (
                  <img
                    key={image.id}
                    src={image.src}
                    alt={image.alt}
                    className="w-full rounded-xl shadow"
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>
    
    </div>
  );
};

export default Gallery;
