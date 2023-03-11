import React from "react";
import { NavLink } from "react-router-dom";

const InternalLinks = () => {
  return (
    <div className="hidden sm:flex flex-row flex-auto justify-center">
      <ul className="flex flex-row space-x-10">
        <li className="transition ease-in-out text-md text-textColor border-transparent border-b-2 duration-300 hover:border-b-secondaryColor">
          <NavLink
            to="/oneDayForecast"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-b-secondaryColor" : undefined
            }
          >
            1 Day Weather
          </NavLink>
        </li>
        <li className="transition ease-in-out text-md text-textColor border-transparent border-b-2 duration-300 hover:border-b-secondaryColor">
          <NavLink
            to="/fiveDayForecast"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-b-secondaryColor" : undefined
            }
          >
            5 Day Weather
          </NavLink>
        </li>
        <li className="transition ease-in-out text-md text-textColor border-transparent border-b-2 duration-300 hover:border-b-secondaryColor">
          <NavLink
            to="/currentForecast"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-b-secondaryColor" : undefined
            }
          >
            Current Forecast
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default InternalLinks;
