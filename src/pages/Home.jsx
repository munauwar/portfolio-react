import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <section className="bg-gray-800">
        <div className="max-w-screen-xl px-4 mx-auto lg:gap-8 pt-60 pb-60">
          <div className="mr-auto place-self-center lg:col-span-7">
            <p className="max-w-2xl font-mono mb-2 text-red-700 md:text-lg lg:text-2xl">
              Hi, my name is
            </p>
            <h1 className="text-white max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none xl:text-5xl">
              Munauwar Mughal.
            </h1>
            <p className="text-white max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-5xl">
              I build things for the web.
            </p>
          </div>
          <button
            className="py-3 px-5 border border-red-700 text-white hover:bg-red-700 transition-colors font-mono uppercase"
            onClick={() => (window.location = "mailto:mughal.m@outlook.com")}
          >
            Contact me.
          </button>
        </div>
      </section>
    );
  }
}
