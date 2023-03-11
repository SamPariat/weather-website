import React from "react";
import { NavLink } from "react-router-dom";

const DropDown = () => {
  return (
    <div className="flex flex-col justify-center items-center sm:hidden font-spacegrotesk absolute top-16 right-2 bg-primaryColor w-40 h-fit rounded-lg py-6">
      <ul className="list-none space-y-2">
        <li className="text-md border-l-4 border-transparent duration-300 text-textColor pl-2">
          <NavLink
            to="/oneDayForecast"
            className={({ isActive }) =>
              isActive ? "border-l-4 border-l-secondaryColor pl-2" : undefined
            }
          >
            1 Day Forecast
          </NavLink>
        </li>
        <li className="text-md border-l-4 border-transparent duration-300 text-textColor pl-2">
          <NavLink
            to="/fiveDayForecast"
            className={({ isActive }) =>
              isActive ? "border-l-4 border-l-secondaryColor pl-2" : undefined
            }
          >
            5 Day Forecast
          </NavLink>
        </li>
        <li className="text-md border-l-4 border-transparent duration-300 text-textColor pl-2">
          <NavLink
            to="/currentForecast"
            className={({ isActive }) =>
              isActive ? "border-l-4 border-l-secondaryColor pl-2" : undefined
            }
          >
            Current Forecast
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
