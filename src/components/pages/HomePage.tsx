import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, Variants } from "framer-motion";

import { getTop50CitiesForecast } from "../../api";
import { FiftyCitiesObject } from "../../api/types";
import Button from "../Buttons/Button";
import IndividualWeatherCard from "../Cards/IndividualWeatherCard";
import AboutSection from "../Containers/AboutSection";
import Comments from "../Containers/Comments";
import ErrorText from "../Texts/ErrorText";
import HeadingText from "../Texts/HeadingText";
import HeadlineText from "../Texts/HeadlineText";

const headingVariants: Variants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const HomePage = () => {
  const navigate = useNavigate();
  const [cities, setCities] = useState<FiftyCitiesObject[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchCities = async () => {
    try {
      setError(null);

      const response = await getTop50CitiesForecast();

      setCities(response);
    } catch (error: any) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchCities();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full font-spacegrotesk">
      <HeadingText heading="Accurate, reliable, up-to-date forecasts." />
      <AboutSection />
      <motion.h1
        className="text-4xl font-bold text-textColor mb-4"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        Comments from our users
      </motion.h1>
      <Comments />
      <div className="flex flex-col items-center">
        <motion.h2
          className="font-extrabold text-5xl text-textColor my-5"
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          Live Forecasts for Some of the Known Cities
        </motion.h2>
        <HeadlineText
          subHeading="Powered by the Accuweather API"
          text="Our weather website uses the AccuWeather API to provide users with accurate and up-to-date weather information for their location or any other selected region. With hourly and daily forecasts, interactive maps, and historical weather data, our website enables users to stay informed about the latest weather patterns and make informed decisions about their daily activities. The AccuWeather API ensures that our website delivers reliable weather information to users, allowing them to plan their day, travel safely, and stay prepared for any severe weather events."
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10 mx-10">
        {cities.map((city) => (
          <IndividualWeatherCard
            key={city.key}
            city={city.city}
            country={city.country}
            temperature={city.temperature}
            weatherText={city.weatherText}
            isDayTime={city.isDayTime}
          />
        ))}
      </div>
      {error && <ErrorText />}
      <div className="flex flex-col items-center my-10">
        <motion.h2
          className="font-extrabold text-5xl text-textColor my-5"
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          Try some of our other features!
        </motion.h2>
        <div className="grid grid-cols-3 gap-6">
          <Button
            buttonTitle="One Day Forecast"
            onClick={() => navigate("/oneDayForecast")}
          />
          <Button
            buttonTitle="Five Day Forecast"
            onClick={() => navigate("/fiveDayForecast")}
          />
          <Button
            buttonTitle="Current Forecast"
            onClick={() => navigate("/currentForecast")}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
