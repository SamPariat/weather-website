import React from "react";
import {
  SiTypescript,
  SiReact,
  SiFramer,
  SiAxios,
  SiTailwindcss,
} from "react-icons/si";
import { motion } from "framer-motion";
import { TbClockHour9 } from "react-icons/tb";
import { FaSun } from "react-icons/fa";

import {
  frameworkContainer,
  frameworkVariants,
  rotationVariants,
} from "./variants";

const Framework = () => {
  return (
    <motion.div
      className="flex flex-col w-full justify-center items-center font-spacegrotesk mb-10"
      variants={frameworkContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-between bg-slate-800 font-spacegrotesk w-2/3 lg:w-1/3 px-5 py-3 mt-4 sm:mt-6 rounded-lg"
        variants={frameworkVariants}
        whileHover={{
          scale: 1.1,
        }}
      >
        <motion.span variants={rotationVariants} animate="startRotate">
          <FaSun className="text-xl sm:text-3xl text-[#F05514]" />
        </motion.span>
        <h3 className="text-lg sm:text-2xl text-zinc-300">
          <a
            href="https://www.accuweather.com/"
            target="_blank"
            rel="noreferrer"
          >
            AccuWeather API
          </a>
        </h3>
      </motion.div>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-between bg-slate-800 font-spacegrotesk w-2/3 lg:w-1/3 px-5 py-3 mt-4 sm:mt-6 rounded-lg"
        variants={frameworkVariants}
        whileHover={{ scale: 1.1 }}
      >
        <SiTypescript className="text-xl sm:text-3xl text-[#3178C6]" />
        <h3 className="text-lg sm:text-2xl text-zinc-300">TypeScript</h3>
      </motion.div>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-between bg-slate-800 font-spacegrotesk w-2/3 lg:w-1/3 px-5 py-3 mt-4 sm:mt-6 rounded-lg"
        variants={frameworkVariants}
        whileHover={{
          scale: 1.1,
        }}
      >
        <motion.span variants={rotationVariants} animate="startRotate">
          <SiReact className="text-xl sm:text-3xl text-[#61DAFB]" />
        </motion.span>
        <h3 className="text-lg sm:text-2xl text-zinc-300">React JS</h3>
      </motion.div>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-between bg-slate-800 font-spacegrotesk w-2/3 lg:w-1/3 px-5 py-3 mt-4 sm:mt-6 rounded-lg"
        variants={frameworkVariants}
        whileHover={{
          scale: 1.1,
        }}
      >
        <SiTailwindcss className="text-xl sm:text-3xl text-[#38BDF8]" />
        <h3 className="text-lg sm:text-2xl text-zinc-300">Tailwind CSS</h3>
      </motion.div>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-between bg-slate-800 font-spacegrotesk w-2/3 lg:w-1/3 px-5 py-3 mt-4 sm:mt-6 rounded-lg"
        variants={frameworkVariants}
        whileHover={{
          scale: 1.1,
        }}
      >
        <SiFramer className="text-xl sm:text-3xl text-[#FFFFFF]" />
        <h3 className="text-lg sm:text-2xl text-zinc-300">Framer Motion</h3>
      </motion.div>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-between bg-slate-800 font-spacegrotesk w-2/3 lg:w-1/3 px-5 py-3 mt-4 sm:mt-6 rounded-lg"
        variants={frameworkVariants}
        whileHover={{
          scale: 1.1,
        }}
      >
        <SiAxios className="text-xl sm:text-3xl text-[#671DDF]" />
        <h3 className="text-lg sm:text-2xl text-zinc-300">Axios</h3>
      </motion.div>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-between bg-slate-800 font-spacegrotesk w-2/3 lg:w-1/3 px-5 py-3 mt-4 sm:mt-6 rounded-lg"
        variants={frameworkVariants}
        whileHover={{
          scale: 1.1,
        }}
      >
        <TbClockHour9 className="text-xl sm:text-3xl text-[#62B3A8]" />
        <h3 className="text-lg sm:text-2xl text-zinc-300">Moment JS</h3>
      </motion.div>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-between bg-slate-800 font-spacegrotesk w-2/3 lg:w-1/3 px-5 py-3 mt-4 sm:mt-6 rounded-lg"
        variants={frameworkVariants}
        whileHover={{
          scale: 1.1,
        }}
      >
        <motion.span variants={rotationVariants} animate="startRotate">
          <SiReact className="text-xl sm:text-3xl text-[#E91E63]" />
        </motion.span>
        <h3 className="text-lg sm:text-2xl text-zinc-300">React Icons</h3>
      </motion.div>
    </motion.div>
  );
};

export default Framework;
