import React from 'react';
import DataTable from "./listscorePage/Table/Table"
import { ChakraProvider } from "@chakra-ui/react"
export default function Listscore({ Component, pageProps }) {
  return (
    <ChakraProvider>
    <DataTable/>
    </ChakraProvider>

);
  }
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoi
