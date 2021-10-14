import { useQuery } from "react-query";
import latinize from "latinize";
import React, { FormEvent, useState, useEffect } from "react";
import { Input, Button, Box, SimpleGrid } from "@chakra-ui/react";
import FadeIn from "react-fade-in";
import Weather from "components/Weather";

type locationProps = {
  initialTown: string;
  initialState: string | null;
};

export default function Location({
  initialTown,
  initialState,
}: locationProps): JSX.Element {
  const [city, setCity] = useState(initialTown);
  const [countryCode, setCountryCode] = useState(initialState);
  const { isLoading, error, data, refetch } = useQuery(
    ["weather", city, countryCode],
    () =>
      fetch(`/api/weather/${city}/${countryCode}`).then((res) => res.json()),
    {
      enabled: false,
    }
  );
  useEffect(() => {
    refetch();
  }, [refetch]);
  const handleSubmit = (e: FormEvent) => {
    refetch();
    e.preventDefault();
  };

  return (
    <Box p={4} m={4} boxShadow={"xl"}>
      <Box mb={4}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <SimpleGrid columns={3} spacing={1}>
            <Input
              placeholder="City"
              name="city"
              type="text"
              value={city}
              onChange={(e) => setCity(latinize(e.target.value))}
            />
            <Input
              placeholder="CountryCode"
              name="CountryCode"
              type="text"
              value={countryCode}
              onChange={(e) => setCountryCode(latinize(e.target.value))}
            />
            <Button colorScheme="teal" isLoading={isLoading} type="submit">
              Get weather
            </Button>
          </SimpleGrid>
        </form>
      </Box>
      {error && <p>Error!</p>}
      <FadeIn>
        {data?.weather && !isLoading && <Weather weather={data}></Weather>}
      </FadeIn>
    </Box>
  );
}
