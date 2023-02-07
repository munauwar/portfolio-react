import React, { Component } from "react";
import { motion } from "framer-motion";

export default class extends Component {
  render() {
    return (
      <div id="contact" className="bg-dark-red dark:bg-slate-300">
        <motion.div
          className="max-w-screen-lg px-4 mx-auto overflow-hidden pb-40 pt-20"
          initial={{ y: 400 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "tweeen" }}
        >
          <div className="text-white text-2xl text-center">
            <h2 className="font-mono text-red-700">03. What's next?</h2>
          </div>
          <h1 className="text-center text-white mt-4 text-3xl md:text-4xl xl:text-5xl font-extrabold leading-none dark:text-black">
            Get In Touch
          </h1>
          <p className="text-gray-400 md:w-3/5 mx-auto text-center mt-3 font-mono text-base dark:text-black">
            Let's connect! Do you want to work together? Or do you just want to
            say hi? You can always send me a message and I wil try to reply as
            soon as possible.
            <p className="text-xs mt-2">
              PS: I will reply faster via my{" "}
              <a
                onClick={() =>
                  (window.location =
                    "https://www.linkedin.com/in/munauwar-mughal/")
                }
                className="underline"
              >
                LinkedIn.
              </a>
            </p>
          </p>
          <button
            className="block mx-auto mt-10 py-3 px-5 border border-red-700 text-white hover:bg-red-700 transition-colors font-mono uppercase dark:text-black"
            onClick={() => (window.location = "mailto:mughal.m@outlook.com")}
          >
            Say Hello.
          </button>
        </motion.div>
      </div>
    );
  }
}
