import React from "react";
import { motion } from "framer-motion";
import DarkModePopup from "../components/DarkModePopup";

export default function Home() {

  return (
    <section className="bg-gray-800 dark:bg-stone-400">
      <div className="max-w-screen-xl px-4 mx-auto lg:gap-8 pt-52 pb-24 md:pb-0">
        <motion.div
          className="mx-auto lg:col-span-7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          <p className="max-w-2xl font-mono mb-2 text-red-700 md:text-lg lg:text-2xl opacity-40 bg-gradient-to-b">
            Hi, my name is
          </p>
          <h1 className="text-white max-w-2xl mb-4 text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight leading-none dark:text-black">
            Munauwar Mughal.
          </h1>
          <p className="text-white max-w-2xl mb-4 text-4xl md:text-5xl xl:text-5xl font-extrabold leading-none dark:text-black">
            I build things for the web.
          </p>
        </motion.div>
        <motion.button
          className="py-3 px-5 border border-red-700 text-white hover:bg-red-700 transition-colors font-mono uppercase mb-7 dark:text-black"
          onClick={() => (window.location = "mailto:mughal.m@outlook.com")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
        >
          Contact me.
        </motion.button>
      </div>
      <DarkModePopup />
      <svg viewBox="0 0 1440 320">
        <path
          id="about"
          className="fill-current text-dark-red dark:text-slate-300"
          d="m0 32 1440 160v128H0Z"
        />
      </svg>
    </section>
  );
}
