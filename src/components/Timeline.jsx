import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <>
        <ol className="border-l border-gray-200 mt-5">
          <li className="mb-10">
            <span className="absolute ml-[-10px] justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>
            </span>
            <div className="p-4 bg-white rounded-lg border border-gray-200 ml-7">
              <div className="justify-between items-center mb-3 sm:flex">
                <time className="mb-1 text-xs font-normal text-red-700 sm:order-last sm:mb-0">
                  Latest
                </time>
                <div className="font-mono text-gray-500">
                  <span className="font-bold text-base text-black">
                    Hogeschool van Amsterdam
                  </span>
                  <p className="text-xs italic">Software Engineer student</p>
                </div>
              </div>
              <div className="p-3 text-base font-normal text-black bg-gray-50 rounded-lg border border-gray-200">
                Within the organization I wrote my thesis. I also made an
                application with Vue.js and TailwindCSS.
              </div>
            </div>
          </li>

          <li className="mb-10">
            <span className="absolute ml-[-10px] justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 overflow-hidden"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                />
              </svg>
            </span>
            <div className="p-4 bg-white rounded-lg border border-gray-200 ml-7">
              <div className="justify-between items-center mb-3 sm:flex">
                <div className="font-mono text-gray-500">
                  <span className="font-bold text-base text-black selection:text-red-700">
                    De Justitiële ICT Organisatie
                  </span>
                  <p className="text-xs italic selection:text-red-700">Front-end developer, Intern 2022</p>
                </div>
              </div>
              <div className="p-3 text-base font-normal text-black bg-gray-50 rounded-lg border border-gray-200">
                Within the organization I wrote my thesis. I also made an
                application with Vue.js and TailwindCSS.
              </div>
            </div>
          </li>

          <li className="mb-10">
            <span className="absolute ml-[-10px] justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                />
              </svg>
            </span>
            <div className="p-4 bg-white rounded-lg border border-gray-200 ml-7">
              <div className="justify-between items-center mb-3 sm:flex">
                <div className="font-mono text-gray-500">
                  <span className="font-bold text-base text-black">
                    INFO B.V.
                  </span>
                  <p className="text-sm italic">Backend-end developer, Intern 2020</p>
                </div>
              </div>
              <div className="p-3 text-base font-normal text-black bg-gray-50 rounded-lg border border-gray-200">
                Worked with a team of five developers on different microservices
                within the application. We used the Java programming language
                for this.
              </div>
            </div>
          </li>

          <li className="mb-10">
            <span className="absolute ml-[-10px] justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                />
              </svg>
            </span>
            <div className="p-4 bg-white rounded-lg border border-gray-200 ml-7">
              <div className="justify-between items-center mb-3 sm:flex">
                <div className="font-mono text-gray-500">
                  <span className="font-bold text-base text-black">
                    Batavia Groep
                  </span>
                  <p className="text-sm italic">Front-end developer, Intern 2018</p>
                </div>
              </div>
              <div className="p-3 text-base font-normal text-black bg-gray-50 rounded-lg border border-gray-200">
                During my time at Batavia Groep, I styled various components and
                build new functionalities. For this I used HTML, CSS and
                javascript.
              </div>
            </div>
          </li>
        </ol>
      </>
    );
  }
}
