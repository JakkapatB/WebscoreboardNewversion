import React from "react";
import { Container } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Center, Square, Circle } from "@chakra-ui/react";

function scoreboard() {
  return (
    <Container maxW="100vw" h="100vh" bg="#061435" centerContent pos="relative">
      <Box bg="#ffffff" w="35%" p={4} color="white" pos="absolute" borderColor="white">
        <Center><Text color="black" fontSize="2xl">Prayuth VS Pravit</Text></Center>
      </Box>
      <Flex>
        <Flex  bg="#9C091D" w="50vw" h="100vh" p="0" color="white" justifyContent="center" alignItems="center">
          <Text fontSize="380">00</Text>
        </Flex>
        <Flex bg="#061435" w="50vw" h="100vh" color="white" justifyContent="center" alignItems="center" >
          <Text fontSize="380" >00</Text>
        </Flex>
      </Flex>
    </Container>
  );
}

export default scoreboard;
