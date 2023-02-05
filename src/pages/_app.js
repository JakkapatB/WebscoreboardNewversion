import "@/styles/globals.css";
import * as React from "react";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "components/Navbar";
import theme from "./theme";
import Fonts from "./Fonts";
import Footer from "components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </ChakraProvider>
  );
}
