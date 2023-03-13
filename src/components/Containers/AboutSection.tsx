import React from "react";
import { WiCloudUp } from "react-icons/wi";
import { motion, Variants } from "framer-motion";

import SiteDescription from "../Cards/SiteDescription";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 1.2,
      duration: 3,
    },
  },
};

const innerContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const AboutSection = () => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 mx-10 my-10 items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex justify-center items-center">
        <WiCloudUp className="text-primaryColor text-9xl md:text-[18rem]" />
      </div>
      <motion.div
        className="flex bg-slate-800 text-white px-10 py-5 rounded-3xl"
        variants={innerContainerVariants}
        whileHover={{
          y: -5,
        }}
      >
        <SiteDescription />
      </motion.div>
    </motion.div>
  );
};

export default AboutSection;
