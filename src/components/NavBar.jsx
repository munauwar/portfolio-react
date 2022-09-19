import React, { Component, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";

export default function NavBar() {
  const [click, setClick] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(true);

  return (
    <nav className="md:px-11 px-4 py-4 bg-gray-800 sticky top-0 shadow-xl ">
      <div className="flex flex-wrap justify-between items-center lg:mx-20">
        <p className="flex items-center">
          <motion.span
            className="self-center text-2xl font-mono whitespace-nowrap text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            M. Mughal
          </motion.span>
        </p>
        <button
          onClick={handleClick}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          {click ? (
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
        <div
          className={click ? "hidden md:block md:w-auto" : "w-full h-screen"}
        >
          <ul className="flex flex-col p-4 mt-[50%] rounded-lg md:flex-row md:space-x-8 md:mt-0 md:font-medium md:border-0 font-mono">
            <motion.li
              initial={{ y: -250 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <HashLink
                smooth
                to="#about"
                onClick={closeMobileMenu}
                className="block text-white text-lg md:bg-transparent md:p-0 hover:text-red-700"
                aria-current="page"
              >
                <span className="text-red-700">01. </span>About
              </HashLink>
            </motion.li>
            <motion.li
              initial={{ y: -250 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.4 }}
            >
              <HashLink
                smooth
                to="#experience"
                onClick={closeMobileMenu}
                className="block pr-2 text-white text-lg md:bg-transparent md:p-0 hover:text-red-700"
              >
                <span className="text-red-700">02. </span>Experience
              </HashLink>
            </motion.li>
            <motion.li
              initial={{ y: -250 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.6 }}
            >
              <HashLink
                smooth
                to="#contact"
                onClick={closeMobileMenu}
                className="block pr-2 text-white text-lg md:bg-transparent md:p-0 hover:text-red-700"
              >
                <span className="text-red-700">03. </span>Contact
              </HashLink>
            </motion.li>
            <motion.li
              initial={{ y: -250 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.8 }}
            >
              <a
                onClick={() =>
                  (window.location =
                    "https://www.linkedin.com/in/munauwar-mughal/")
                }
                className="block w-2/4 text-center mt-2 md:w-full py-1 px-4 md:mt-[-3px] text-white text-lg md:bg-transparent border border-red-700 hover:bg-red-700 transition ease-in-out"
              >
                Resume
              </a>
            </motion.li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
