import { CurrentResponse } from "openweathermap-ts/dist/types";
import dynamic from "next/dynamic";
import { LatLngExpression } from "leaflet";

import {
  Heading,
  Avatar,
  Box,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";

type WeatherProps = {
  weather: CurrentResponse;
};

export default function Weather({ weather }: WeatherProps): JSX.Element {
  //console.log(weather);
  const result = weather?.weather[0];
  const position: LatLngExpression = [weather?.coord.lat, weather?.coord.lon];
  const MapNoSsr = dynamic(() => import("components/Map"), { ssr: false });
  return (
    <SimpleGrid columns={2} spacing={0}>
      <Box
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Avatar
          size={"xl"}
          src={`http://openweathermap.org/img/wn/${result?.icon}@2x.png`}
          mb={4}
          pos={"relative"}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {weather?.name}
        </Heading>
        <Heading fontSize={"xl"} fontFamily={"body"}>
          {result?.description}
        </Heading>
        <Heading fontSize={"l"} fontFamily={"body"}>
          Temp: {weather?.main.temp}C
        </Heading>
      </Box>
      <MapNoSsr position={position} />
    </SimpleGrid>
  );
}
