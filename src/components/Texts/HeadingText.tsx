import React from "react";
import { motion, Variants } from "framer-motion";

type HeadingTextProps = {
  heading: string;
};

const headingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const HeadingText = ({ heading }: HeadingTextProps) => {
  return (
    <motion.h1
      className="font-spacegrotesk text-center font-extrabold text-4xl sm:text-6xl text-textColor mt-8 mb-8"
      variants={headingVariants}
      initial="hidden"
      animate="visible"
    >
      {heading}
    </motion.h1>
  );
};

export default HeadingText;
