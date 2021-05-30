import OpenWeatherMap from "openweathermap-ts";
import { CountryCode, CurrentResponse } from "openweathermap-ts/dist/types";

const setWeather = (): OpenWeatherMap => {
  const openWeather = new OpenWeatherMap({
    apiKey: process.env.WEATHER_API_KEY,
  });
  openWeather.setUnits("metric");
  return openWeather;
};

export const getCurrentWeatherForCity = (
  city: string,
  countryCode: CountryCode
): Promise<CurrentResponse> => {
  const openWeather = setWeather();
  try {
    const weather = openWeather.getCurrentWeatherByCityName({
      cityName: city,
      countryCode: countryCode,
    });
    return weather;
  } catch (error) {
    console.error("Error is ", error);
    return null;
  }
};
