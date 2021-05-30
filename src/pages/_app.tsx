import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";
import "styles/global.css";

// Create a client
const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}
export default MyApp;
