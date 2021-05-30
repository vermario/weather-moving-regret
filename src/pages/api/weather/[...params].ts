import type { NextApiRequest, NextApiResponse } from "next";
import { CountryCode } from "openweathermap-ts/dist/types";
import { getCurrentWeatherForCity } from "utils/weather";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { params } = req.query;
  const weather = await getCurrentWeatherForCity(
    params[0],
    params[1] as CountryCode
  );
  //  console.log(weather);
  res.end(JSON.stringify(weather));
};
