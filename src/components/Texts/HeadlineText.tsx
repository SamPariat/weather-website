import React, { Fragment } from "react";
import { motion, Variants } from "framer-motion";

type HeadlineTextProps = {
  subHeading?: string;
  text: string;
};

const headlineTextVariants: Variants = {
  visible: {
    y: 0,
    opacity: 1,
  },
  hidden: {
    y: 100,
    opacity: 0,
  },
};

const HeadlineText = ({ subHeading, text }: HeadlineTextProps) => {
  return (
    <Fragment>
      <motion.h2
        className="text-textColor text-4xl font-spacegrotesk font-bold mt-6 mb-3"
        variants={headlineTextVariants}
        initial="hidden"
        animate="visible"
      >
        {subHeading}
      </motion.h2>
      <motion.h5
        className="text-textColor text-lg font-spacegrotesk font-medium my-3 px-10 text-center"
        variants={headlineTextVariants}
        initial="hidden"
        animate="visible"
      >
        {text}
      </motion.h5>
    </Fragment>
  );
};

export default HeadlineText;
