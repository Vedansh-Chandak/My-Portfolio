import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function ContactOutlet() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const redirect = () => {
   
    setIsModalOpen(true);
    window.location.href = 'mailto:482003vinaypatidar@gmail.com'; 
    setIsModalOpen("")
  };

 

  const formHandler = (e) => {
    e.preventDefault();
    redirect(); 
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center py-0 px-10">
    

   
      <h1 className="text-5xl font-cinzel mt-10 text-[#e3ca85] mb-12 text-center">
        Contact Us
      </h1>

  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl px-6 md:px-12">

        <div className="space-y-6">
          {[{ icon: "https://img.icons8.com/ios-filled/50/ffffff/marker.png", label: "Address", value: "Mastana Chowk, Ranjhi\nJabalpur 482011" },
            { icon: "https://img.icons8.com/ios-filled/50/ffffff/phone.png", label: "Phone No", value: "+91 8962685123" },
            { icon: "https://i.pinimg.com/736x/f4/39/2b/f4392b5432cd8f3a7cbd7e2ddb6a115b.jpg", label: "Email", value: "jecvedansh@gmail.com" }]
            .map((info, index) => (
              <div key={index}>
                <div className="flex items-center gap-4">
                  <img src={info.icon} alt={info.label} className="w-10 h-10" />
                  <div>
                    <p className="font-montserrat text-lg font-bold text-[#e3ca85]">{info.label}</p>
                    <p className="text-md text-gray-300 whitespace-pre-line">{info.value}</p>
                  </div>
                </div>
                {index < 2 && <hr className="border-t border-[#e3ca85] my-4" />}
              </div>
            ))}
        </div>


        <div className="bg-black border-opacity-20 border-[#e3ca85] border-2 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl text-[#e3ca85] mb-6 font-[cinzel] text-center">Get In Touch</h2>
          <form onSubmit={formHandler} className="space-y-6">
                          {[{ id: "name", placeholder: "Full Name", type: "text" },
              { id: "email", placeholder: "Email Address", type: "email" },
              { id: "message", placeholder: "Text Message", type: "textarea" }]
              .map((input) => (
                <div key={input.id}>
                  {input.type !== "textarea" ? (
                    <input
                      type={input.type}
                      id={input.id}
                      name={input.id}
                      placeholder={input.placeholder}
                      className="w-full p-3 backdrop-brightness-75 bg-[#303030] text-white border-2 border-opacity-20 border-[#e3ca85] rounded-lg shadow-sm focus:ring-2 focus:ring-[#e3ca85] focus:border-[#e3ca85] placeholder-gray-400"
                      required
                    />
                  ) : (
                    <textarea
                      id={input.id}
                      name={input.id}
                      placeholder={input.placeholder}
                      className="w-full p-3 backdrop-brightness-75 bg-[#303030] text-white border-2 border-opacity-20 border-[#e3ca85] rounded-lg shadow-sm focus:ring-2 focus:ring-[#e3ca85] focus:border-[#e3ca85] placeholder-gray-400"
                      rows="4"
                      required
                    ></textarea>
                  )}
                </div>
              ))}
            <button
              type="submit"
              className="w-40 bg-[#e3ca85] text-black font-semibold py-3 rounded-lg shadow-md hover:bg-[#ffd971] focus:ring-2 focus:ring-[#ffd971] transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </div>


    
    </div>
  
  );
  
}

export default ContactOutlet;
