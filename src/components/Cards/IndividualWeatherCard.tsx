import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { motion, Variants } from "framer-motion";

type IndividualWeatherCardProps = {
  city: string;
  country: string;
  temperature?: number | undefined;
  weatherText: string;
  isDayTime: boolean;
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    rotateY: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateY: 360,
    transition: {
      duration: 0.5,
    },
  },
};

const IndividualWeatherCard = ({
  city,
  country,
  temperature,
  weatherText,
  isDayTime,
}: IndividualWeatherCardProps) => {
  return (
    <motion.div
      className="flex flex-col w-full bg-secondaryColor font-spacegrotesk px-6 py-4 rounded-lg text-textColor shadow-lg"
      variants={cardVariants}
      initial="hidden"
      whileHover={{ scale: 1.05 }}
      whileInView="visible"
    >
      <h4 className="text-2xl font-semibold">{city}</h4>
      <h6 className="text-lg font-semibold">{country}</h6>
      <div className="flex flex-row items-center my-2">
        <span className="text-3xl mr-4">
          {isDayTime ? <BsSun /> : <BsMoon />}
        </span>
        <span className="flex flex-row items-baseline">
          <h3 className="text-3xl font-bold">{`${temperature}°`}</h3>
          <h4 className="text-lg">C</h4>
        </span>
      </div>
      <div className="flex flex-row items-baseline">
        <span className="font-light">{weatherText}</span>
      </div>
    </motion.div>
  );
};

export default IndividualWeatherCard;
