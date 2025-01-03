import React, { useState } from "react";
import {Link} from "react-router-dom"
function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden"; // Stop scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }
  };

  return (
    <div className="bg-black ">
      <header className="bg-black shadow-lg">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Branding */}
          <div className="flex justify-start flex-col items-center -space-y-2">
            <span className="font-[cinzel] text-[23px] text-[#e3ca85] font-normal">
             <Link to={"/"}>VEDANSH</Link>
            </span>
            <span className="font-[cinzel] text-[23px] text-[#e3ca85] font-normal ">
            <Link to={"/"}>CHANDAK</Link>
            </span>
          </div>

          <div className="hidden sm:flex space-x-8 items-center">
  <Link to="/Home">
    <a className="text-white hover:text-[#e3ca85] hover:border-[#e3ca85] border-black border-b-2 duration-300 font-[Montserrat] text-sm sm:text-base">
      Home
    </a>
  </Link>
  <Link to="/ContactOutlet">
    <a className="text-white hover:text-[#e3ca85] hover:border-[#e3ca85] border-black border-b-2 duration-300 font-[Montserrat] text-sm sm:text-base">
      Contact
    </a>
  </Link>
  <Link to="/AboutOutlet">
    <a className="text-white hover:text-[#e3ca85] hover:border-[#e3ca85] border-black border-b-2 duration-300 font-[Montserrat] text-sm sm:text-base">
      About
    </a>
  </Link>
  <Link to="/CoadingSkills">
    <a className="text-white hover:text-[#e3ca85] hover:border-[#e3ca85] border-black border-b-2 duration-300 font-[Montserrat] text-sm sm:text-base">
      Skills
    </a>
  </Link>
  <Link to="/Gallery">
    <a className="text-white hover:text-[#e3ca85] hover:border-[#e3ca85] border-black border-b-2 duration-300 font-[Montserrat] text-sm sm:text-base">
      Gallery
    </a>
  </Link>
</div>

          
          <div className="flex space-x-4">
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

          {/* Mobile Menu Toggle */}
          <div className="sm:hidden flex items-center">
            <button onClick={toggleMobileMenu} aria-label="Toggle Menu">
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-8 w-8 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.364 5.636a1 1 0 00-1.414 0L12 10.586 7.05 5.636A1 1 0 105.636 7.05L10.586 12l-4.95 4.95a1 1 0 101.414 1.414L12 13.414l4.95 4.95a1 1 0 101.414-1.414L13.414 12l4.95-4.95a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-8 w-8 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm0 7a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm0 7a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="sm:hidden fixed inset-0 bg-black bg-opacity-95 z-50">
            <div className="flex justify-between items-center p-4">
              {/* Social Media Icons */}
              <div className="flex space-x-4">
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
                ;
              </div>
              {/* Close Button */}
              <button onClick={toggleMobileMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-8 w-8 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.364 5.636a1 1 0 00-1.414 0L12 10.586 7.05 5.636A1 1 0 105.636 7.05L10.586 12l-4.95 4.95a1 1 0 101.414 1.414L12 13.414l4.95 4.95a1 1 0 101.414-1.414L13.414 12l4.95-4.95a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-center justify-center space-y-6 h-full">
            <Link to="/Home">
    <a className="text-white hover:text-[#e3ca85] hover:border-[#e3ca85] border-black border-b-2 duration-300 font-[Montserrat] text-sm sm:text-base">
      Home
    </a>
  </Link>
  <Link to="/ContactOutlet">
    <a className="text-white hover:text-[#e3ca85] hover:border-[#e3ca85] border-black border-b-2 duration-300 font-[Montserrat] text-sm sm:text-base">
      Contact
    </a>
  </Link>
  <Link to="/AboutOutlet">
    <a className="text-white hover:text-[#e3ca85] hover:border-[#e3ca85] border-black border-b-2 duration-300 font-[Montserrat] text-sm sm:text-base">
      About
    </a>
  </Link>
  <Link to="/CoadingSkills">
    <a className="text-white hover:text-[#e3ca85] hover:border-[#e3ca85] border-black border-b-2 duration-300 font-[Montserrat] text-sm sm:text-base">
      Skills
    </a>
  </Link>
  <Link to="/Gallery">
    <a className="text-white hover:text-[#e3ca85] hover:border-[#e3ca85] border-black border-b-2 duration-300 font-[Montserrat] text-sm sm:text-base">
      Gallery
    </a>
  </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default Navbar;
