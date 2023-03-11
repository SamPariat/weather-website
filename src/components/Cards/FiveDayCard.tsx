import React from "react";
import { BsDroplet } from "react-icons/bs";

type FiveDayCardProps = {
  minimumTemperature: number;
  maximumTemperature: number;
  precipitationProbabilityDay: number;
  precipitationProbabilityNight: number;
  airQuality: string;
  uvIndex: string;
  dayOfWeek: string;
  date: string;
};

const FiveDayCard = ({
  minimumTemperature,
  maximumTemperature,
  precipitationProbabilityDay,
  precipitationProbabilityNight,
  airQuality,
  uvIndex,
  dayOfWeek,
  date,
}: FiveDayCardProps) => {
  return (
    <div className="w-3/4 xs:w-1/2 h-28 font-spacegrotesk flex flex-row bg-secondaryColor px-4 py-2 my-5 rounded-2xl">
      <div className="flex grow-1 flex-col justify-center items-start">
        <span className="text-textColor text-base xs:text-lg">{dayOfWeek}</span>
        <span className="text-textColor text-base xs:text-lg">{date}</span>
      </div>
      <div className="flex grow-2 justify-center items-center">
        <span className="text-textColor text-lg sm:text-4xl">
          {`${maximumTemperature}°C`}
        </span>
        <span className="text-textColor text-lg sm:text-4xl">/</span>
        <span className="text-textColor text-base sm:text-2xl">
          {`${minimumTemperature}°C`}
        </span>
      </div>
      <div className="hidden lg:flex grow-3 justify-center items-center">
        <span className="text-textColor text-xl font-semibold text-center">
          {`Air Quality: ${airQuality} & UV Index: ${uvIndex}`}
        </span>
      </div>
      <div className="flex grow-1 justify-end items-center">
        <span className="text-textColor text-base sm:text-lg px-4">
          <BsDroplet />
        </span>
        <span className="text-textColor text-sm sm:text-lg">
          {`${precipitationProbabilityDay}% / ${precipitationProbabilityNight}%`}
        </span>
      </div>
    </div>
  );
};

export default FiveDayCard;
