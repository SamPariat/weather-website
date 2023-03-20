import React from "react";
import {
  // Moon icons
  WiMoonWaningCrescent4,
  WiMoonNew,
  WiMoonWaxingCrescent4,
  WiMoonFirstQuarter,
  WiMoonWaxingGibbous4,
  WiMoonFull,
  WiMoonWaningGibbous4,
  WiMoonThirdQuarter,
  // Weather icons
  WiDaySunny,
  WiDayHaze,
  WiDayCloudy,
  WiDaySunnyOvercast,
  WiFog,
  WiShowers,
  WiDayShowers,
  WiThunderstorm,
  WiDayThunderstorm,
  WiRain,
  WiDaySnow,
  WiSnow,
  WiSnowflakeCold,
  WiSleet,
  WiSnowWind,
  WiWindy,
  WiNightClear,
  WiNightCloudy,
  WiNightShowers,
  WiNightThunderstorm,
  WiNightSprinkle,
  WiNightSnow,
} from "react-icons/wi";
import {
  // Weather icons
  IoPartlySunnyOutline,
} from "react-icons/io5";
import {
  // Weather icons
  BsCloudy,
  BsCloudSnow,
  BsSnow,
  BsCloudHaze,
} from "react-icons/bs";
import {
  // Weather icons
  GiThermometerHot,
  GiThermometerCold,
} from "react-icons/gi";

export const getMoonPhaseIcon = (
  moonPhaseQuery: string | null
): React.ReactNode => {
  switch (moonPhaseQuery) {
    case null:
      return null;
    case "WaningCrescent":
      return <WiMoonWaningCrescent4 />;
    case "NewMoon":
      return <WiMoonNew />;
    case "WaxingCrescent":
      return <WiMoonWaxingCrescent4 />;
    case "FirstQuarter":
      return <WiMoonFirstQuarter />;
    case "WaxingGibbous":
      return <WiMoonWaxingGibbous4 />;
    case "FullMoon":
      return <WiMoonFull />;
    case "WaningGibbous":
      return <WiMoonWaningGibbous4 />;
    case "ThirdQuarter":
      return <WiMoonThirdQuarter />;
    default:
      return null;
  }
};

export const getWeatherConditionsIcon = (
  iconQuery: number | undefined
): React.ReactNode => {
  switch (iconQuery) {
    case 1:
    case 2:
      return <WiDaySunny />;
    case 3:
    case 4:
      return <IoPartlySunnyOutline />;
    case 5:
      return <WiDayHaze />;
    case 6:
      return <WiDayCloudy />;
    case 7:
      return <BsCloudy />;
    case 8:
      return <WiDaySunnyOvercast />;
    case 11:
      return <WiFog />;
    case 12:
      return <WiShowers />;
    case 13:
    case 14:
      return <WiDayShowers />;
    case 15:
      return <WiThunderstorm />;
    case 16:
    case 17:
      return <WiDayThunderstorm />;
    case 18:
      return <WiRain />;
    case 19:
      return <BsCloudSnow />;
    case 20:
    case 21:
    case 23:
      return <WiDaySnow />;
    case 22:
      return <WiSnow />;
    case 24:
      return <BsSnow />;
    case 25:
      return <WiSnowflakeCold />;
    case 26:
      return <WiSleet />;
    case 29:
      return <WiSnowWind />;
    case 30:
      return <GiThermometerHot />;
    case 31:
      return <GiThermometerCold />;
    case 32:
      return <WiWindy />;
    case 33:
    case 34:
      return <WiNightClear />;
    case 35:
    case 36:
    case 38:
      return <WiNightCloudy />;
    case 37:
      return <BsCloudHaze />;
    case 39:
    case 40:
      return <WiNightShowers />;
    case 41:
    case 42:
      return <WiNightThunderstorm />;
    case 43:
      return <WiNightSprinkle />;
    case 44:
      return <WiNightSnow />;
    default:
      return null;
  }
};
