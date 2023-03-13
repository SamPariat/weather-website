import React, { Fragment } from "react";
import { motion, Variants } from "framer-motion";

type ButtonProps = {
  buttonTitle: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const spanVariants: Variants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
  },
};

const Button = ({ buttonTitle, onClick }: ButtonProps) => {
  return (
    <Fragment>
      <motion.span
        className="font-spacegrotesk font-semibold uppercase text-textColor text-base align-middle text-center"
        variants={spanVariants}
        initial="initial"
        whileHover="hover"
      >
        <button
          className="rounded-md bg-primaryColor px-5 py-2 cursor-pointer"
          onClick={onClick}
        >
          {buttonTitle}
        </button>
      </motion.span>
    </Fragment>
  );
};

export default Button;
