import Location from "components/Location";
import { Box, Center, Heading, Text } from "@chakra-ui/react";
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
        <link
          href="data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAElLSgTn5+T/09PR/+fn5P/n5+T/5eXi/+fn5P/T09H/5+fk/+fn5P/l5eL/5+fk/9PT0f/n5+T/Pz8+AS8xMQPn5+T/1dXT/+fn5P/Y2db/5+fk/+fn5P/V1dP/5+fk/9jZ1v/n5+T/5+fk/9XV0//n5+T/2NnW/+fn5P8AAAAA5+fk/+fn5P/T09H/5+fk/+bm4//n5+T/5+fk/9PT0f/n5+T/5ubj/+fn5P/n5+T/09PR/+fn5P/m5uP/5+fk/wAAAADj4+D/5+fk/9PT0f/n5+T/5+fk/+Pj4P/n5+T/09PR/+fn5P/n5+T/4+Pg/+fn5P/T09H/5+fk/+fn5P8AAAAAAAAAANTU0v/n5+T/3d7b/+fn5P/n5+T/1NTS/+fn5P/d3tv/5+fk/+fn5P/U1NL/5+fk/93e2//n5+T/AAAAAAAAAADn5+T/09PR/+fn5P/n5+T/5+fk/+fn5P/T09H/5+fk/+fn5P/n5+T/5+fk/9PT0f/n5+T/AAAAAAAAAABex+//XMDl/+fn5P/U1NL/5+fk/+fn5P/d3tv/5+fk/9TU0v/n5+T/5+fk/93e2//n5+T/AAAAAAAAAAAAAAAAXsfv/17H7/9at9r/Xsfv/+Pj4P/n5+T/5+fk/9PT0f/n5+T/4+Pg/+fn5P/n5+T/AAAAAAAAAABAREQGAAAAAF7H7/9exu7/Xsfv/1q32v9ex+//Xsfv/+bm4//n5+T/09PR/+fn5P/n5+T/5ubj/wAAAAAAAAAAAAAAAAAAAABex+//Xsfv/1u74P9ex+//W7nc/17H7/8AAAAAAAAAAOfn5P8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALzExA17H7/9ex+//Wrfa/17H7/8vMTEDAAAAAAAAAAAAAAAAAAAAAC8xMQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAP//AACAAwAAAAEAAAAAAACAAAAAwAAAAMABAACAAwAAgAcAAIAHAACBvwAAw/8AAP//AAD//wAA//8AAA=="
          rel="icon"
          type="image/x-icon"
        />
      </Head>
      <Box p={4} m={4}>
        <Heading>Migrant weather regret calculator</Heading>
        <Text>
          So at some point you moved for work or study or love... Check the
          weather there and where you live now. Then either cry or rejoice! (If
          it's something like November, most likely cry.)
        </Text>
      </Box>
      <Location initialTown="Villareggia" initialState="IT"></Location>
      <Center>Compared with:</Center>
      <Location initialTown="Jarvenpaa" initialState="FI"></Location>
      <Center>or:</Center>
      <Location initialTown="Lille" initialState="FR"></Location>
      <Center>
        <Heading size="md" pt="5" pb="5">
          Happy now?
        </Heading>
      </Center>
    </>
  );
}
