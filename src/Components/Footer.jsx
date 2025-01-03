import React from "react";

function Footer() {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen md:px-24 lg:px-8 bg-black text-white font-montserrat">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Portfolio"
            className="inline-flex items-center"
          >
            <svg
              className="w-10 h-10"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="50" cy="50" r="45" stroke="#e3ca85" fill="none" />

              <path
                d="M30 30 L50 70 L70 30"
                stroke="#e3ca85"
                fill="none"
                stroke-width="3"
              />

              <path
                d="M50 30 L50 70 M50 30 Q70 40 50 50"
                stroke="#e3ca85"
                fill="none"
                stroke-width="3"
              />
            </svg>

            {/* Branding */}
            <div className="flex flex-col items-center -space-y-2">
              <span className="font-[cinzel] text-[23px] text-[#e3ca85] font-normal">
                Vedansh
              </span>
              <span className="font-[cinzel] text-[23px] text-[#e3ca85] font-normal">
                Chandak
              </span>
              
            </div>
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm">
              Hi, I'm Vedansh Chandak, a passionate web developer. Welcome to my
              portfolio!
            </p>
            <p className="mt-4 text-sm">
              Feel free to explore my work and connect with me for exciting
              opportunities.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide">Contact</p>
          <div className="flex">
            <p className="mr-1">Phone:</p>
            <span>8962685123</span>
          </div>
          <div className="flex">
            <p className="mr-1">Email:</p>
            <span>jecvedansh@gmail.com</span>
          </div>
          <div className="flex">
            <p className="mr-1">Location:</p>
            <span>Jabalpur, {"(M.P)"}</span>
          </div>
        </div>
        <div>
          <p className="text-base font-bold tracking-wide">Follow Me</p>
          <div className="flex items-center mt-1 space-x-3">
            {/* LinkedIn */}
            <a
              href="[Your LinkedIn]"
              className="text-white"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M19 0H5C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5zm-9 19H7V9h3v10zm-1.5-11.167c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zM20 19h-3v-4.5c0-1.119-.881-2-2-2s-2 .881-2 2V19h-3V9h3v1.327c.739-.812 1.85-1.327 3-1.327 2.206 0 4 1.794 4 4V19z" />
              </svg>
            </a>
            {/* GitHub */}
            <a
              href="[Your GitHub]"
              className="text-white"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.111.793-.261.793-.578 0-.287-.01-1.049-.015-2.057-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-.889-.609.067-.596.067-.596 1.042.073 1.59 1.069 1.59 1.069.928 1.591 2.435 1.131 3.029.865.094-.673.363-1.131.661-1.391-2.665-.303-5.466-1.333-5.466-5.931 0-1.311.469-2.381 1.235-3.221-.124-.303-.535-1.523.118-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.398 3.003-.403 1.02.005 2.047.137 3.006.403 2.291-1.552 3.298-1.23 3.298-1.23.655 1.653.244 2.873.12 3.176.769.84 1.234 1.91 1.234 3.221 0 4.609-2.804 5.625-5.475 5.921.372.319.703.951.703 1.917 0 1.383-.013 2.499-.013 2.84 0 .32.192.694.799.576C20.565 21.795 24 17.297 24 12 24 5.373 18.627 0 12 0z" />
              </svg>
            </a>
            {/* Twitter */}
            <a
              href="[Your Twitter]"
              className="text-white"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M24 4.557a9.832 9.832 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 3.1a9.865 9.865 0 0 1-3.127 1.195A4.92 4.92 0 0 0 16.616 2c-2.725 0-4.932 2.21-4.932 4.934 0 .386.045.762.127 1.124A13.978 13.978 0 0 1 1.64 3.16 4.93 4.93 0 0 0 3.127 9.172a4.914 4.914 0 0 1-2.23-.616v.061c0 2.28 1.618 4.185 3.764 4.617a4.923 4.923 0 0 1-2.224.086 4.93 4.93 0 0 0 4.6 3.42A9.867 9.867 0 0 1 .96 19.291a13.937 13.937 0 0 0 7.548 2.211c9.056 0 14.008-7.497 14.008-13.986 0-.21-.005-.42-.015-.63A10.011 10.011 0 0 0 24 4.557z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm">
          © {new Date().getFullYear()} Vinay Patidar. All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a href="/faq" className="text-sm text-white">
              F.A.Q
            </a>
          </li>
          <li>
            <a href="/privacy-policy" className="text-sm text-white">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms" className="text-sm text-white">
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
