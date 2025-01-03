import image from '../assets/1.png'
import image2 from '../assets/2.png'

import React from 'react'

function Cv() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center  py-12 px-32 bg-gray-300">
    <div className="w-full sm:w-1/2 flex justify-center">
      <img
        src={image}
        alt="Image 1"
        className="rounded-lg shadow-lg object-cover w-80 h-auto"
      />
    </div>
    <div className="w-full sm:w-1/2 flex justify-center">
      <img
        src={image2}
        alt="Image 2"
        className="rounded-lg shadow-lg object-cover w-80 h-auto"
      />
    </div>
  </div>
  
  )
}

export default Cv