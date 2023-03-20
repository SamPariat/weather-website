import React, { Fragment } from "react";
import { motion, Variants } from "framer-motion";

type InputProps = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
};

const inputVariants: Variants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Input = ({ setCity }: InputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setCity(event.target.value);

  return (
    <Fragment>
      <motion.input
        type="text"
        placeholder="-- Enter a City --"
        onChange={handleChange}
        className="my-4 px-2 py-2 text-center text-lg font-spacegrotesk rounded-lg bg-transparent text-textColor placeholder:text-textColor border-b-2 border-secondaryColor focus:border-y-2 focus:outline-none"
        variants={inputVariants}
        initial="hidden"
        animate="visible"
      />
    </Fragment>
  );
};

export default Input;
