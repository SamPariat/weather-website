import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

type NavButtonProps = {
  text: string;
  navigateTo: string;
};

const NavButton = ({ text, navigateTo }: NavButtonProps) => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <motion.button
        className="hidden sm:flex font-spacegrotesk text-textColor font-medium text-md px-2 py-2 rounded-md"
        whileHover={{
          scale: 1.05,
        }}
        onClick={() => navigate(navigateTo)}
      >
        {text}
      </motion.button>
    </Fragment>
  );
};

export default NavButton;
