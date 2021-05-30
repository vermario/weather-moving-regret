import Location from "components/Location";
import { Box, Center, Heading, Text } from "@chakra-ui/react";

import React, { FormEvent, useState } from "react";
import Head from "next/head";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
      </Head>
      <Box p={4} m={4}>
        <Heading>Migrant weather regret calculator</Heading>
        <Text>
          So at some point you moved for work or study or love... Check the
          weather there and where you live now. Then either cry or rejoice! But
          most likely cry.
        </Text>
      </Box>
      <Location initialTown="Torino" initialState="IT"></Location>
      <Center>VS</Center>
      <Location initialTown="Helsinki" initialState="FI"></Location>
    </>
  );
}
