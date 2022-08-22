import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <ul className="relative border-l border-gray-200 mt-4 ml-5">
        <li className="mb-10">
          <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-white ml-8">
            De Justitiële ICT Organisatie
            <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
              Latest
            </span>
          </h3>
          <span className="block mb-2 text-sm font-normal leading-none text-gray-400 ml-8">
            Front-end developer Intern, 2022
          </span>
          <p className="mb-4 text-base font-normal text-gray-500 ml-8 w-1/2">
            Within the organization I wrote my thesis. I also made an
            application with Vue.js and TailwindCSS.
          </p>
        </li>

        <li className="mb-10">
          <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-white ml-8">
            INFO B.V.
          </h3>
          <span className="block mb-2 text-sm font-normal leading-none text-gray-400 ml-8">
            Back-end developer Intern, 2020
          </span>
          <p className="mb-4 text-base font-normal text-gray-500 ml-8 w-1/2">
            Worked with a team of five developers on different microservices
            within the application. We used the Java programming language for
            this.
          </p>
        </li>

        <li className="mb-10">
          <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-white ml-8">
            Batavia Groep
          </h3>
          <span className="block mb-2 text-sm font-normal leading-none text-gray-400 ml-8">
            Front-end developer, 2018
          </span>
          <p className="mb-4 text-base font-normal text-gray-500 ml-8 w-1/2">
            During my time at Batavia Groep, I styled various components and
            build new functionalities. For this I used HTML, CSS and javascript.
          </p>
        </li>
      </ul>
    );
  }
}
