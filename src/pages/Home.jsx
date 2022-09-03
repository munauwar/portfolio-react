import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <section className="bg-gray-800">
        <div className="max-w-screen-xl px-4 mx-auto lg:gap-8 pt-52">
          <div className="mr-auto place-self-center lg:col-span-7">
            <p className="max-w-2xl font-mono mb-2 text-red-700 md:text-lg lg:text-2xl">
              Hi, my name is
            </p>
            <h1 className="text-white max-w-2xl mb-4 text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight leading-none ">
              Munauwar Mughal.
            </h1>
            <p className="text-white max-w-2xl mb-4 text-4xl md:text-5xl xl:text-5xl font-extrabold leading-none">
              I build things for the web.
            </p>
          </div>
          <button
            className="py-3 px-5 border border-red-700 text-white hover:bg-red-700 transition-colors font-mono uppercase mb-7"
            onClick={() => (window.location = "mailto:mughal.m@outlook.com")}
          >
            Contact me.
          </button>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#330a00"
            fill-opacity="1"
            d="M0,32L1440,192L1440,320L0,320Z"
          ></path>
        </svg>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ff5500"
            fill-opacity="1"
            d="M0,224L720,0L1440,192L1440,320L720,320L0,320Z"
          ></path>
        </svg> */}
      </section>
    );
  }
}
