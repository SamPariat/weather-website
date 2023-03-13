import React from "react";
import moment from "moment";
import { motion } from "framer-motion";

import { containerVariants, childContainerVariants } from "./variants";

type CurrentCardProps = {
  weatherText: string;
  temperature?: number;
  realFeelTemperature?: number;
  wind: string;
  dewPoint?: number;
  visibility: string;
  currentlyRaining: boolean;
  humidity?: number;
  pressure?: number;
};

const CurrentCard = (props: CurrentCardProps) => {
  return (
    <motion.div
      className="flex flex-col w-3/4 lg:w-1/2 bg-secondaryColor my-10 px-10 py-5 rounded-lg font-spacegrotesk"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="flex justify-between py-2 mb-3 border-b-2 border-textColor"
        variants={childContainerVariants}
      >
        <h5 className="text-textColor">Current Weather</h5>
        <h5 className="text-textColor">{moment().format("DD-MMM")}</h5>
      </motion.div>
      <motion.div
        className="text-textColor flex flex-col lg:flex-row items-center justify-between my-4"
        variants={childContainerVariants}
      >
        <span className="flex flex-row items-baseline">
          <h1 className="font-bold text-5xl sm:text-6xl">{`${props.temperature}°C`}</h1>
        </span>
        <span className="flex flex-row items-baseline">
          <h3 className="font-semibold text-xl sm:text-2xl">{`Real Feel ${props.realFeelTemperature}°C`}</h3>
        </span>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10"
        variants={childContainerVariants}
      >
        <div className="flex flex-col">
          <span className="text-textColor flex justify-between">
            <p className="text-sm sm:text-lg font-light">Wind</p>
            <p className="text-sm sm:text-lg font-semibold text-right">
              {props.wind}
            </p>
          </span>
          <span className="text-textColor flex justify-between items-center">
            <p className="text-sm sm:text-lg font-light">Humidity</p>
            <p className="text-sm sm:text-lg font-semibold text-right">
              {`${props.humidity}%`}
            </p>
          </span>
          <span className="text-textColor flex justify-between items-center">
            <p className="text-sm sm:text-lg font-light">Dew Point</p>
            <p className="text-sm sm:text-lg font-semibold">
              {`${props.dewPoint}°C`}
            </p>
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-textColor flex justify-between">
            <p className="text-sm sm:text-lg font-light">Visibility</p>
            <p className="text-sm sm:text-lg font-semibold">
              {props.visibility}
            </p>
          </span>
          <span className="text-textColor flex justify-between">
            <p className="text-sm sm:text-lg font-light">Currently Raining</p>
            <p className="text-sm sm:text-lg font-semibold">
              {props.currentlyRaining ? "True" : "False"}
            </p>
          </span>
          <span className="text-textColor flex justify-between">
            <p className="text-sm sm:text-lg font-light">Pressure</p>
            <p className="text-sm sm:text-lg font-semibold">
              {`${props.pressure} mb`}
            </p>
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CurrentCard;
