import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <ul class="relative border-l border-gray-200 mt-4 ml-5">
        <li class="mb-10">
          <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8">
            <svg
              aria-hidden="true"
              class="w-3 h-3 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
          <h3 class="flex items-center mb-1 text-lg font-semibold text-white ml-8">
            DE JUSTITIËLE ICT ORGANISATIE
            <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
              Latest
            </span>
          </h3>
          <span class="block mb-2 text-sm font-normal leading-none text-gray-400 ml-8">
            Front-end developer Intern, 2022
          </span>
          <p class="mb-4 text-base font-normal text-gray-500 ml-8">
            Within the organization I wrote my thesis. I also made an
            application with Vue.js and TailwindCSS.
          </p>
        </li>

        <li class="mb-10">
          <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full">
            <svg
              aria-hidden="true"
              class="w-3 h-3 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
          <h3 class="flex items-center mb-1 text-lg font-semibold text-white ml-8">
            DE JUSTITIËLE ICT ORGANISATIE
          </h3>
          <span class="block mb-2 text-sm font-normal leading-none text-gray-400 ml-8">
            Front-end developer Intern, 2022
          </span>
          <p class="mb-4 text-base font-normal text-gray-500 ml-8">
            Within the organization I wrote my thesis. I also made an
            application with Vue.js and TailwindCSS.
          </p>
        </li>
      </ul>
    );
  }
}
