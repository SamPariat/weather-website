import React, { Fragment } from "react";
import { motion, Variants } from "framer-motion";

type ButtonProps = {
  buttonTitle: string;
  disableButton?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const spanVariants: Variants = {
  initial: {
    y: 100,
    opacity: 0,
    scale: 1,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  hover: {
    scale: 1.1,
  },
};

const Button = ({ buttonTitle, onClick, disableButton }: ButtonProps) => {
  return (
    <Fragment>
      <motion.span
        className="font-spacegrotesk font-semibold uppercase text-textColor text-base align-middle text-center"
        variants={spanVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <button
          className="rounded-md bg-primaryColor px-5 py-2 cursor-pointer"
          onClick={onClick}
          disabled={disableButton}
        >
          {buttonTitle}
        </button>
      </motion.span>
    </Fragment>
  );
};

export default Button;
