import React, { useState, useEffect } from "react";
import { Photos } from "../constants"; // Ensure Photos is imported correctly

function ShowGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Photos.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="relative flex w-full h-[400px] overflow-hidden rounded-lg mx-auto">
      {/* Slider Container */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {Photos.map((photo) => (
          <div
            key={photo.id}
            className="flex-shrink-0 w-full h-full"
          >
            <img
              className="w-full h-full  rounded-lg object-contain object-center"
              src={photo.src}
              alt={`Image ${photo.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowGallery;
