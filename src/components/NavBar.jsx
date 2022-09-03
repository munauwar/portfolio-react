import React, { Component } from "react";
import { motion } from "framer-motion";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="md:px-11 px-4 py-4 bg-gray-800 sticky top-0 shadow-xl ">
        <div className="flex flex-wrap justify-between items-center lg:mx-20">
          <p className="flex items-center">
            <motion.span
              className="self-center text-2xl font-mono whitespace-nowrap text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              M. Mughal
            </motion.span>
          </p>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span className="sr-only">Open main menu</span>
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
          </button>
          <div className="hidden w-full md:block md:w-auto">
            <ul className="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:font-medium md:border-0 font-mono">
              <li>
                <a
                  href="#"
                  className="block text-white text-lg md:bg-transparent md:p-0 hover:text-red-700"
                  aria-current="page"
                >
                  <span className="text-red-700">01. </span>About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block pr-2 text-white text-lg md:bg-transparent md:p-0 hover:text-red-700"
                >
                  <span className="text-red-700">02. </span>Experience
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block pr-2 text-white text-lg md:bg-transparent md:p-0 hover:text-red-700"
                >
                  <span className="text-red-700">03. </span>Contact
                </a>
              </li>
              <li>
                <a
                  href="../public/documents/cv.pdf"
                  download
                  className="block py-1 px-4 mt-[-3px] text-white text-lg md:bg-transparent border border-red-700 hover:bg-red-700 transition ease-in-out"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
