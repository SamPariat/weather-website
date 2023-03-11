import React, { useState, Fragment } from "react";

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

  const clickHandler = async () => {
    setError(null);

    try {
      const {
        aboutWeather,
        temperature,
        realFeelTemperature,
        realFeelTemperatureShade,
        windGust,
        precipitationProbability,
        uvIndex,
        hoursOfSun,
      } = await get1DayForecast(city);

      setOneDayForecast({
        aboutWeather,
        temperature,
        realFeelTemperature,
        realFeelTemperatureShade,
        windGust,
        precipitationProbability,
        uvIndex,
        hoursOfSun,
      });
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
        </Fragment>
      )}
      {error && <ErrorText />}
    </div>
  );
};

export default OneDayForeCast;
