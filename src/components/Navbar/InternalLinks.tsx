import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const InternalLinks = () => {
  return (
    <div className="hidden sm:flex flex-row flex-auto justify-center">
      <ul className="flex flex-row space-x-10">
        <motion.li
          className="transition ease-in-out text-md text-textColor border-transparent border-b-2 duration-300 hover:border-b-secondaryColor"
          whileHover={{
            scale: 1.05,
          }}
        >
          <NavLink
            to="/oneDayForecast"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-b-secondaryColor" : undefined
            }
          >
            1 Day Weather
          </NavLink>
        </motion.li>
        <motion.li
          className="transition ease-in-out text-md text-textColor border-transparent border-b-2 duration-300 hover:border-b-secondaryColor"
          whileHover={{
            scale: 1.05,
          }}
        >
          <NavLink
            to="/fiveDayForecast"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-b-secondaryColor" : undefined
            }
          >
            5 Day Weather
          </NavLink>
        </motion.li>
        <motion.li
          className="transition ease-in-out text-md text-textColor border-transparent border-b-2 duration-300 hover:border-b-secondaryColor"
          whileHover={{
            scale: 1.05,
          }}
        >
          <NavLink
            to="/currentForecast"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-b-secondaryColor" : undefined
            }
          >
            Current Forecast
          </NavLink>
        </motion.li>
      </ul>
    </div>
  );
};

export default InternalLinks;
