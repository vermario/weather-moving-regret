import { useSession, signIn, signOut } from "next-auth/react";
import { ReactElement } from "react";
import { Text, Button, Flex } from "@chakra-ui/react";

export default function Login(): ReactElement {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <Flex alignItems={"center"}>
          <Text>Signed in as {session.user.name}</Text>
          <Button colorScheme="teal" onClick={() => signOut()} m={2}>
            Sign out
          </Button>
        </Flex>
      </>
    );
  }
  return (
    <>
      <Button colorScheme="teal" onClick={() => signIn()}>
        Sign in
      </Button>
    </>
  );
}
