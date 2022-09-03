import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="dark-red" style={{ backgroundColor: "#330a00" }}>
        <div className="max-w-screen-xl px-4 mx-auto overflow-hidden">
          <div className="text-white text-2xl">
            <span className="font-mono text-red-700">01. </span>About me
            <hr className="w-1/4 inline-block pt-1 border-red-500 ml-2" />
          </div>
          <div className="text-white md:w-1/2 block mt-5 float-left text-justify font-mono">
            Hello! My name is Munauwar and I enjoy creating things that live on
            the internet. I am a well-organised, problem solver, independent
            person with high attention to detail. I am someone who is every day
            in search for challenges to improve my skills to eventually become a
            Full Stack Developer.
            <p className="mt-5">
              I learned a lot of different languages, frameworks and libraries
              because of the interest in front-end and back-end. Here are a few
              technologies I've working with recently:
            </p>
            <ul className="list-disc mt-5 ml-5 marker:text-white">
              <li>Javascript</li>
              <li>React</li>
              <li>Vue</li>
              <li>Node.js</li>
              <li>Typescript</li>
              <li>Java</li>
            </ul>
          </div>
          <img
            className="lg:pl-20 mt-[-65px] rounded mx-auto"
            src="./images/image-removedbg.png"
            alt="profilepic"
          />
        </div>
      </div>
    );
  }
}
