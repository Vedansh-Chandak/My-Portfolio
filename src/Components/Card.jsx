import React from 'react'

function Card() {
    const formhandler = (e)=>{
        e.preventDefault()
    }
 <div className='className="flex-1 bg-gray-800 rounded-lg p-6 shadow-md"'>

<h2 className="text-2xl font-semibold text-[#e3ca85] mb-6 text-center">
              Get In Touch</h2>


              <form onSubmit={formhandler} className="flex flex-col gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 bg-gray-900 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#e3ca85]"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 bg-gray-900 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#e3ca85]"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-3 bg-gray-900 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#e3ca85]"
                  placeholder="Enter your message"
                  rows="4"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#e3ca85] text-black font-semibold py-3 rounded-lg hover:bg-[#ffd971] focus:outline-none focus:ring-2 focus:ring-[#ffd971]"
              >
                Submit
              </button>
            </form>
        







 </div>
 








  
}
export default Card