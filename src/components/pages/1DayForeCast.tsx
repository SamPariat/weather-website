import React, { useState, Fragment } from "react";
import { AnimatePresence } from "framer-motion";

import { get1DayForecast } from "../../api";
import type { OneDayForecast } from "../../api/types";

import ErrorText from "../Texts/ErrorText";
import Button from "../Buttons/Button";
import Input from "../Inputs/Input";
import HeadingText from "../Texts/HeadingText";
import OneDayCard from "../Cards/OneDayCard";

const OneDayForeCast = () => {
  const [oneDayForecast, setOneDayForecast] = useState<OneDayForecast>({
    aboutWeather: "",
    temperature: undefined,
    realFeelTemperature: undefined,
    realFeelTemperatureShade: undefined,
    windGust: undefined,
    precipitationProbability: undefined,
    uvIndex: "",
    hoursOfSun: undefined,
  });
  const [city, setCity] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [render, setRender] = useState(0);

  const clickHandler = async () => {
    setError(null);

    try {
      const _1DayForecast = await get1DayForecast(city);

      setOneDayForecast(_1DayForecast);
      setRender(render + 3);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <HeadingText heading="One Day Forecast" />
      <Input setCity={setCity} />
      <Button buttonTitle="Get One Day Forecast" onClick={clickHandler} />
      {oneDayForecast.aboutWeather.length > 0 && (
        <Fragment>
          <AnimatePresence key={`oneDay-${render}`}>
            <OneDayCard
              time="day"
              aboutWeather={oneDayForecast.aboutWeather}
              hoursOfSun={oneDayForecast.hoursOfSun}
              precipitationProbability={
                oneDayForecast.precipitationProbability?.day
              }
              realFeelTemperature={oneDayForecast.realFeelTemperature?.day}
              realFeelTemperatureShade={oneDayForecast.realFeelTemperatureShade}
              temperature={oneDayForecast.temperature?.day}
              uvIndex={oneDayForecast.uvIndex}
              windGust={oneDayForecast.windGust?.day}
            />
            <OneDayCard
              time="night"
              precipitationProbability={
                oneDayForecast.precipitationProbability?.night
              }
              realFeelTemperature={oneDayForecast.realFeelTemperature?.night}
              temperature={oneDayForecast.temperature?.night}
              windGust={oneDayForecast.windGust?.night}
            />
          </AnimatePresence>
        </Fragment>
      )}
      {error && <ErrorText />}
    </div>
  );
};

export default OneDayForeCast;
