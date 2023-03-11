export interface CurrentForecast {
  weatherText: string;
  temperature: number | undefined;
  realFeelTemperature: number | undefined;
  wind: string;
  dewPoint: number | undefined;
  visibility: string;
  currentlyRaining: boolean;
  humidity: number | undefined;
  pressure: number | undefined;
}

export type DayNightObject = {
  day: number;
  night: number;
};

export interface OneDayForecast {
  aboutWeather: string;
  temperature: DayNightObject | undefined;
  realFeelTemperature: DayNightObject | undefined;
  realFeelTemperatureShade: number | undefined;
  windGust: { day: string; night: string } | undefined;
  precipitationProbability: DayNightObject | undefined;
  uvIndex: string;
  hoursOfSun: number | undefined;
}

export type FiveDayForecastObject = {
  minimumTemperature: number;
  maximumTemperature: number;
  precipitationProbabilityDay: number;
  precipitationProbabilityNight: number;
  airQuality: string;
  uvIndex: string;
};

export interface FiveDayForecast {
  headline: string;
  forecasts: FiveDayForecastObject[];
}
