import React, { Component } from "react";
import Timeline from "../components/Timeline";

export default class Experience extends Component {
  render() {
    return (
      <div className="bg-gray-800">
        <div className="max-w-screen-lg px-4 mx-auto py-20 overflow-hidden">
          <div className="text-white text-2xl">
            <span className="font-mono text-red-700">02. </span>Experience
            <hr className="w-1/4 inline-block pt-1 border-red-500 ml-2" />
          </div>
          <Timeline />
        </div>
      </div>
    );
  }
}
