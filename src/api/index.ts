import axios from "axios";
import {
  CurrentForecast,
  FiveDayForecast,
  FiveDayForecastObject,
  OneDayForecast,
} from "./types";

const accuweatherApiKey = process.env.REACT_APP_ACCUWEATHER_API_KEY;
const accuweatherBaseUrl = process.env.REACT_APP_ACCUWEATHER_BASE_URL;

const axiosConfig = axios.create({
  baseURL: accuweatherBaseUrl,
});

export const getLocationKey = async (cityQuery: string): Promise<number> => {
  try {
    const response = await axiosConfig.get(
      `/locations/v1/cities/autocomplete?apikey=${accuweatherApiKey}&q=${encodeURI(
        cityQuery.trim()
      )}`
    );

    return response.data[0]["Key"];
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const get1DayForecast = async (
  cityQuery: string
): Promise<OneDayForecast> => {
  try {
    const locationKey = await getLocationKey(cityQuery);

    const response = await axiosConfig.get(
      `/forecasts/v1/daily/1day/${encodeURI(
        locationKey.toString()
      )}?apikey=${accuweatherApiKey}&details=true&metric=true`
    );

    const dailyForecasts = response.data["DailyForecasts"][0];

    return {
      aboutWeather: response.data["Headline"]["Text"],
      temperature: {
        day: dailyForecasts["Temperature"]["Maximum"]["Value"],
        night: dailyForecasts["Temperature"]["Minimum"]["Value"],
      },
      realFeelTemperature: {
        day: dailyForecasts["RealFeelTemperature"]["Maximum"]["Value"],
        night: dailyForecasts["RealFeelTemperature"]["Minimum"]["Value"],
      },
      realFeelTemperatureShade:
        dailyForecasts["RealFeelTemperatureShade"]["Maximum"]["Value"],
      windGust: {
        day: `${dailyForecasts["Day"]["WindGust"]["Speed"]["Value"]} km/h ${dailyForecasts["Day"]["WindGust"]["Direction"]["English"]}`,
        night: `${dailyForecasts["Night"]["WindGust"]["Speed"]["Value"]} km/h ${dailyForecasts["Night"]["WindGust"]["Direction"]["English"]}`,
      },
      precipitationProbability: {
        day: dailyForecasts["Day"]["PrecipitationProbability"],
        night: dailyForecasts["Night"]["PrecipitationProbability"],
      },
      uvIndex: `${dailyForecasts["AirAndPollen"][5]["Value"]} ${dailyForecasts["AirAndPollen"][5]["Category"]}`,
      hoursOfSun: dailyForecasts["HoursOfSun"],
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const get5DayForecast = async (
  cityQuery: string
): Promise<FiveDayForecast> => {
  try {
    const locationKey = await getLocationKey(cityQuery);

    const response = await axiosConfig.get(
      `/forecasts/v1/daily/5day/${encodeURI(
        locationKey.toString()
      )}?apikey=${accuweatherApiKey}&details=true&metric=true`
    );

    const forecasts = response.data["DailyForecasts"];
    const _5DayForecasts: FiveDayForecastObject[] = [];

    forecasts.forEach((forecast: any) => {
      _5DayForecasts.push({
        minimumTemperature: forecast["Temperature"]["Minimum"]["Value"],
        maximumTemperature: forecast["Temperature"]["Maximum"]["Value"],
        precipitationProbabilityDay:
          forecast["Day"]["PrecipitationProbability"],
        precipitationProbabilityNight:
          forecast["Night"]["PrecipitationProbability"],
        airQuality: forecast["AirAndPollen"][0]["Category"],
        uvIndex: forecast["AirAndPollen"][5]["Category"],
      });
    });

    return {
      headline: response.data["Headline"]["Text"],
      forecasts: _5DayForecasts,
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getCurrentForecast = async (
  cityQuery: string
): Promise<CurrentForecast> => {
  try {
    const locationKey: number = await getLocationKey(cityQuery);

    const response = await axiosConfig.get(
      `/currentconditions/v1/${encodeURI(
        locationKey.toString()
      )}?apikey=${accuweatherApiKey}&details=true`
    );

    const data = response.data[0];

    return {
      weatherText: data["WeatherText"],
      temperature: data["Temperature"]["Metric"]["Value"],
      realFeelTemperature: data["RealFeelTemperature"]["Metric"]["Value"],
      wind: `${data["Wind"]["Speed"]["Metric"]["Value"]} km/h ${data["Wind"]["Direction"]["English"]}`,
      dewPoint: data["DewPoint"]["Metric"]["Value"],
      visibility: `${data["Visibility"]["Metric"]["Value"]} km`,
      currentlyRaining: data["HasPrecipitation"],
      humidity: data["RelativeHumidity"],
      pressure: data["Pressure"]["Metric"]["Value"],
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
};
