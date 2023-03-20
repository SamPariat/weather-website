import React, { useState, Fragment } from "react";
import moment from "moment-timezone";
import { motion, Variants } from "framer-motion";
import { AiFillCaretUp } from "react-icons/ai";

import { containerVariants, childContainerVariants } from "./variants";
import { getWeatherConditionsIcon } from "../../api/iconMap";

type CurrentCardProps = {
  weatherIcon?: number;
  weatherText: string;
  temperature?: number;
  realFeelTemperature?: number;
  wind: string;
  dewPoint?: number;
  visibility: string;
  precipitationProbability?: number;
  humidity?: number;
  iconPhrase: string;
  hour: number;
  dateTime: string;
};

const caretVariants: Variants = {
  showDetails: {
    rotateX: 180,
    transition: {
      duration: 0.3,
      staggerChildren: 1,
    },
  },
  hideDetails: {
    rotateX: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const subContainerVariants: Variants = {
  showDetails: {
    y: 30,
    opacity: 0,
  },
  hideDetails: {
    y: 0,
    opacity: 1,
  },
};

const CurrentCard = (props: CurrentCardProps) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const WeatherIcon = getWeatherConditionsIcon(props.weatherIcon);

  return (
    <motion.div
      className="flex flex-col w-3/4 lg:w-1/2 bg-secondaryColor my-10 px-5 sm:px-10 py-5 rounded-lg font-spacegrotesk"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileInView={{
        rotateY: 360,
        transition: {
          duration: 0.5,
        },
      }}
    >
      <motion.div
        className="flex justify-between py-2 mb-3 border-b-2 border-textColor"
        variants={childContainerVariants}
      >
        <h5 className="text-textColor">
          {moment().add(props.hour, "hour").format("hh A (Z)")}
        </h5>
        <h5 className="text-textColor">{moment().format("DD-MMM")}</h5>
      </motion.div>
      <motion.div
        className="text-textColor flex flex-col lg:flex-row items-center justify-between my-4"
        variants={childContainerVariants}
      >
        <span className="flex flex-row items-baseline">
          <span className="text-5xl sm:text-6xl mr-3">{WeatherIcon}</span>
          <h1 className="font-bold text-5xl sm:text-6xl">{`${props.temperature}°C`}</h1>
        </span>
        <span className="flex flex-row items-baseline">
          <h3 className="font-semibold text-xl sm:text-2xl">{`Real Feel ${props.realFeelTemperature}°C`}</h3>
        </span>
      </motion.div>
      <motion.div
        className="flex justify-end"
        onClick={() => setShowDetails(!showDetails)}
        variants={caretVariants}
        animate={showDetails ? "showDetails" : "hideDetails"}
      >
        <AiFillCaretUp className="cursor-pointer text-xl" />
      </motion.div>
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10"
        variants={childContainerVariants}
      >
        {showDetails && (
          <Fragment>
            <motion.div
              className="flex flex-col"
              variants={subContainerVariants}
              initial="showDetails"
              animate="hideDetails"
            >
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
            </motion.div>

            <motion.div
              className="flex flex-col"
              variants={subContainerVariants}
              initial="showDetails"
              animate="hideDetails"
            >
              <span className="text-textColor flex justify-between">
                <p className="text-sm sm:text-lg font-light">Visibility</p>
                <p className="text-sm sm:text-lg font-semibold">
                  {props.visibility}
                </p>
              </span>
              <span className="text-textColor flex justify-between">
                <p className="text-sm sm:text-lg font-light">Chance of Rain</p>
                <p className="text-sm sm:text-lg font-semibold">
                  {`${props.precipitationProbability}%`}
                </p>
              </span>
              <span className="text-textColor flex justify-between">
                <p className="text-sm sm:text-lg font-light">Conditions</p>
                <p className="text-sm sm:text-lg font-semibold">
                  {props.iconPhrase}
                </p>
              </span>
            </motion.div>
          </Fragment>
        )}
      </motion.div>
    </motion.div>
  );
};

export default CurrentCard;
