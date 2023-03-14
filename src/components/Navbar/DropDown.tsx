import React from "react";
import { NavLink } from "react-router-dom";
import { motion, Variants } from "framer-motion";

type DropDownProps = {
  open: boolean;
};

const dropDownVariants: Variants = {
  open: {
    x: 0,
    opacity: 1,
  },
  closed: {
    x: -50,
    opacity: 0,
  },
};

const listVariants: Variants = {
  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const listItemVariants: Variants = {
  open: {
    y: 0,
  },
  closed: {
    y: 50,
  },
};

const DropDown = ({ open }: DropDownProps) => {
  return (
    <motion.div
      className="flex flex-col justify-center items-center sm:hidden font-spacegrotesk absolute top-16 right-2 bg-primaryColor w-40 h-56 rounded-lg py-6"
      variants={dropDownVariants}
      animate={open ? "open" : "closed"}
    >
      <motion.ul className="list-none space-y-2" variants={listVariants}>
        <motion.li
          className="text-md border-l-4 border-transparent duration-300 text-textColor pl-2"
          variants={listItemVariants}
        >
          <NavLink
            to="/oneDayForecast"
            className={({ isActive }) =>
              isActive ? "border-l-4 border-l-secondaryColor pl-2" : undefined
            }
          >
            1 Day Forecast
          </NavLink>
        </motion.li>
        <motion.li
          className="text-md border-l-4 border-transparent duration-300 text-textColor pl-2"
          variants={listItemVariants}
        >
          <NavLink
            to="/fiveDayForecast"
            className={({ isActive }) =>
              isActive ? "border-l-4 border-l-secondaryColor pl-2" : undefined
            }
          >
            5 Day Forecast
          </NavLink>
        </motion.li>
        <motion.li
          className="text-md border-l-4 border-transparent duration-300 text-textColor pl-2"
          variants={listItemVariants}
        >
          <NavLink
            to="/currentForecast"
            className={({ isActive }) =>
              isActive ? "border-l-4 border-l-secondaryColor pl-2" : undefined
            }
          >
            Current Forecast
          </NavLink>
        </motion.li>
        <motion.li
          className="text-md border-l-4 border-transparent duration-300 text-textColor pl-2"
          variants={listItemVariants}
        >
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "border-l-4 border-l-secondaryColor pl-2" : undefined
            }
          >
            About
          </NavLink>
        </motion.li>
      </motion.ul>
    </motion.div>
  );
};

export default DropDown;
