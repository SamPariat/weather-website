import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { getCurrentForecast } from "../../api";
import type { CurrentForecast } from "../../api/types";
import HeadingText from "../Texts/HeadingText";
import Input from "../Inputs/Input";
import ErrorText from "../Texts/ErrorText";
import Button from "../Buttons/Button";
import CurrentCard from "../Cards/CurrentCard";

const CurrentForeCast = () => {
  const [city, setCity] = useState("");
  const [currentForecast, setCurrentForecast] = useState<CurrentForecast>({
    weatherText: "",
    temperature: undefined,
    realFeelTemperature: undefined,
    wind: "",
    dewPoint: undefined,
    visibility: "",
    currentlyRaining: false,
    humidity: undefined,
    pressure: undefined,
  });
  const [error, setError] = useState<string | null>(null);
  const [render, setRender] = useState(0);

  const clickHandler = async () => {
    setError(null);

    try {
      const _currentForecast = await getCurrentForecast(city);

      setCurrentForecast(_currentForecast);
      setRender(render + 2);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <HeadingText heading="Current Forecast" />
      <Input setCity={setCity} />
      <Button buttonTitle="Get Current Forecast" onClick={clickHandler} />
      {currentForecast.weatherText.length > 0 && (
        <AnimatePresence key={`current-${render}`}>
          <CurrentCard
            currentlyRaining={currentForecast.currentlyRaining}
            dewPoint={currentForecast.dewPoint}
            humidity={currentForecast.humidity}
            visibility={currentForecast.visibility}
            weatherText={currentForecast.weatherText}
            wind={currentForecast.wind}
            realFeelTemperature={currentForecast.realFeelTemperature}
            temperature={currentForecast.temperature}
            pressure={currentForecast.pressure}
          />
        </AnimatePresence>
      )}
      {error && <ErrorText />}
    </div>
  );
};

export default CurrentForeCast;
