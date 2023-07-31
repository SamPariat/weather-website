export type DayNightObject<T> = {
  day: T;
  night: T;
};

export interface OneDayForecast {
  aboutWeather: string;
  moonPhase: string;
  temperature: DayNightObject<number> | undefined;
  realFeelTemperature: DayNightObject<number> | undefined;
  realFeelTemperatureShade: number | undefined;
  windGust: DayNightObject<string> | undefined;
  precipitationProbability: DayNightObject<number> | undefined;
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

export interface FiftyCitiesObject {
  key: string;
  city: string;
  country: string;
  temperature: number;
  weatherText: string;
  isDayTime: boolean;
}

export interface CurrentForecast {
  weatherIcon: number | undefined;
  weatherText: string;
  temperature: number | undefined;
  realFeelTemperature: number | undefined;
  wind: string;
  dewPoint: number | undefined;
  visibility: string;
  precipitationProbability: number | undefined;
  humidity: number | undefined;
  iconPhrase: string;
  dateTime: string;
}
