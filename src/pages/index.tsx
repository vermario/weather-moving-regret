import Location from "components/Location";
import { Box, Center, Heading, Text } from "@chakra-ui/react";
import Header from "components/Header";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home(): JSX.Element {
  const { data: session } = useSession();
  return (
    <>
      <Header />
      {session && (
        <>
          <Box p={4} m={4}>
            <Text>
              So at some point you moved for work or study or love... Check the
              weather there and where you live now. Then either cry or rejoice!
              (If it&apos;s something like November, most likely cry.)
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
      )}
      {!session && (
        <>
          <Box p={4} m={4}>
            Log in to see more locations!{" "}
          </Box>
          <Location initialTown="Villareggia" initialState="IT"></Location>
        </>
      )}
    </>
  );
}
