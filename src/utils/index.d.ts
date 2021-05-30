declare module "weather" {
  import { CurrentResponse } from "openweathermap-ts/dist/types";

  export function getCurrentWeatherForCity(): CurrentResponse;
}
