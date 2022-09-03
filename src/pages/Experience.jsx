import React, { Component } from "react";
import Timeline from "../components/Timeline";

export default class Experience extends Component {
  render() {
    return (
      <div className="bg-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#330a00"
            fill-opacity="1"
            d="M0,96L48,80C96,64,192,32,288,37.3C384,43,480,85,576,138.7C672,192,768,256,864,288C960,320,1056,320,1152,288C1248,256,1344,192,1392,160L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <div className="max-w-screen-lg px-4 mx-auto overflow-hidden">
          <div className="text-white text-2xl">
            <span className="font-mono text-red-700">02. </span>Experience
            <hr className="w-1/4 inline-block pt-1 border-red-500 ml-2" />
          </div>
          <Timeline />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#330a00"
            fill-opacity="1"
            d="M0,96L48,80C96,64,192,32,288,37.3C384,43,480,85,576,138.7C672,192,768,256,864,288C960,320,1056,320,1152,288C1248,256,1344,192,1392,160L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    );
  }
}
