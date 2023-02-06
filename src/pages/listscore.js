import React from "react";
import DataTable from "./listscorePage/Table/Table";
import { ChakraProvider } from "@chakra-ui/react";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: "500",
  subsets: ["latin"],
});

export default function Listscore({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <ChakraProvider>
        <DataTable />
      </ChakraProvider>
    </main>
  );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoi
