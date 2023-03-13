import React, { Fragment } from "react";
import { motion } from "framer-motion";

type NavButtonProps = {
  text: string;
};

const NavButton = ({ text }: NavButtonProps) => {
  return (
    <Fragment>
      <motion.button
        className="hidden sm:flex font-spacegrotesk text-textColor font-medium text-md px-2 py-2 rounded-md"
        whileHover={{
          scale: 1.05,
        }}
      >
        {text}
      </motion.button>
    </Fragment>
  );
};

export default NavButton;
