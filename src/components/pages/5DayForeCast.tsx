import { AnimatePresence } from "framer-motion";
import moment from "moment";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { v4 } from "uuid";

import { get5DayForecast } from "../../api";
import type { FiveDayForecast } from "../../api/types";

import Button from "../Buttons/Button";
import FiveDayCard from "../Cards/FiveDayCard";
import Input from "../Inputs/Input";
import ErrorText from "../Texts/ErrorText";
import HeadingText from "../Texts/HeadingText";
import HeadlineText from "../Texts/HeadlineText";

const FiveDayForeCast = () => {
  const [fiveDayForecast, setFiveDayForecast] = useState<FiveDayForecast>({
    headline: "",
    forecasts: [],
  });
  const [error, setError] = useState<string | null>("");
  const [city, setCity] = useState("");
  const [animationKey, setAnimationKey] = useState<string>("");

  const clickHandler = async () => {
    setError(null);
    setFiveDayForecast({
      headline: "",
      forecasts: [],
    });

    try {
      const { forecasts, headline } = await toast.promise(
        get5DayForecast(city),
        {
          pending: "Sending request...",
          success: `Here is the 5 day forecast for ${city}`,
          error: "Couldn't send request. Something went wrong...",
        }
      );

      setFiveDayForecast({ forecasts, headline });
      setAnimationKey(v4());
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <HeadingText heading="Five Day Forecast" />
      <Input setCity={setCity} />
      <Button
        buttonTitle="Get Five Day Forecast"
        onClick={clickHandler}
        disableButton={city.length < 3}
      />
      {fiveDayForecast.headline.length > 0 && (
        <HeadlineText
          subHeading="Some Information"
          text={fiveDayForecast.headline}
        />
      )}
      {fiveDayForecast.forecasts.length > 0 &&
        fiveDayForecast.forecasts.map((forecast, dayFromToday) => (
          <AnimatePresence key={animationKey}>
            <FiveDayCard
              key={dayFromToday}
              maximumTemperature={forecast.maximumTemperature}
              minimumTemperature={forecast.minimumTemperature}
              precipitationProbabilityDay={forecast.precipitationProbabilityDay}
              precipitationProbabilityNight={
                forecast.precipitationProbabilityNight
              }
              airQuality={forecast.airQuality}
              uvIndex={forecast.uvIndex}
              date={moment().add(dayFromToday, "day").format("DD-MMM-YY")}
              dayOfWeek={moment().add(dayFromToday, "days").format("ddd")}
            />
          </AnimatePresence>
        ))}
      {error && <ErrorText />}
    </div>
  );
};

export default FiveDayForeCast;
