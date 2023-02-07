import React, { Component } from "react";
import { motion } from "framer-motion";

export default class About extends Component {
  render() {
    return (
      <div className="bg-dark-red dark:bg-slate-300">
        <motion.div
          className="max-w-screen-xl px-4 mx-auto overflow-hidden"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="text-white text-2xl dark:text-black">
            <span className="font-mono text-red-700">01. </span>About me
            <hr className="w-1/4 inline-block pt-1 border-red-500 ml-2" />
          </div>
          <div className="text-white lg:w-1/2 block mt-5 float-left text-justify font-mono dark:text-black">
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
            <ul className="list-disc mt-5 ml-5 marker:text-white dark:marker:text-red-700">
              <li>Javascript</li>
              <li>React</li>
              <li>Vue</li>
              <li>Node.js</li>
              <li>Typescript</li>
              <li>Java</li>
            </ul>
          </div>
          <div className="pb-6 lg:pl-20 mt-[-250px]">
            <img
              src="./images/portret-removebg.png"
              className="shadow rounded border-none mx-auto"
              alt="profilepic"
            />
          </div>
        </motion.div>
      </div>
    );
  }
}
