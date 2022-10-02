import React, { Component } from "react";
import Timeline from "../components/Timeline";

export default class Experience extends Component {
  render() {
    return (
      <div id="experience" className="bg-gray-800 dark:bg-stone-400">
        <svg viewBox="0 0 1440 320">
          <path
            className="fill-current text-dark-red dark:text-slate-300"
            d="m0 160 48 16c48 16 144 48 240 69.3 96 21.7 192 31.7 288 32 96-.3 192-10.3 288-48 96-37.3 192-101.3 288-112 96-10.3 192 31.7 240 53.4l48 21.3V0H0Z"
          />
        </svg>
        <div className="max-w-screen-lg px-4 mx-auto overflow-hidden">
          <div className="text-white text-2xl">
            <span className="font-mono text-red-700">02. </span>Experience
            <hr className="w-1/4 inline-block pt-1 border-red-500 ml-2" />
          </div>
          <Timeline />
        </div>
        <svg viewBox="0 0 1440 320">
          <path
            className="fill-current text-dark-red dark:text-slate-300"
            d="m0 96 48-16c48-16 144-48 240-42.7C384 43 480 85 576 138.7 672 192 768 256 864 288c96 32 192 32 288 0s192-96 240-128l48-32v192H0Z"
          />
        </svg>
      </div>
    );
  }
}
