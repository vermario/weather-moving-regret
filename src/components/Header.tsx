import { ReactElement } from "react";
import { Box, Heading, Flex, Spacer } from "@chakra-ui/react";
import Login from "./Login";

export default function Header(): ReactElement {
  return (
    <Flex p={4} background={"gray.100"} alignItems={"center"}>
      <Heading size="xl">Migrant weather regret calculator</Heading>
      <Spacer />
      <Box>
        <Login />
      </Box>
    </Flex>
  );
}
