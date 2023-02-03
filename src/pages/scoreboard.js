import React from "react";
import { Container, VStack } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Center, Square, Circle } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

function scoreboard() {
  return (
    // Container of Scoreboard
    <Container maxW="100vw" h="100vh" bg="#061435" centerContent pos="relative">
      <VStack pos="absolute" spacing={1} h="100%">
        {/* Team name and Button */}
        <Flex>
          <Box
          opacity={0.5}
            bg="#ffffff"
            w="5vw"
            p={3}
            color="white"
            // pos="absolute"
            borderColor="white"
          >
            <Center>
              <Text color="black" fontSize="2xl">
                0
              </Text>
            </Center>
          </Box>

          {/* Team 1 name */}
          <Box
            bg="#ffffff"
            w="20vw"
            p={2.5}
            color="white"
            // pos="absolute"
            borderColor="white"
            ml={2}
            mr={1}
          >
            <Center>
              <Text color="black" fontSize="2xl">
                Prayuth
              </Text>
            </Center>
          </Box>

          <Box
            bg="#fecf41"
            w="0.5vw"
            p={2.5}
            color="black"
            // pos="absolute"
          ></Box>

          {/* Team 2 name */}
          <Box
            bg="#ffffff"
            w="20vw"
            p={2.5}
            color="white"
            // pos="absolute"
            borderColor="white"
            ml={1}
            mr={2}
          >
            <Center>
              <Text color="black" fontSize="2xl">
                Pravit
              </Text>
            </Center>
          </Box>

          <Box
          opacity={0.5}
            bg="#ffffff"
            w="5vw"
            p={3}
            color="white"
            // pos="absolute"
            borderColor="white"
          >
            <Center>
              <Text color="black" fontSize="2xl">
                0
              </Text>
            </Center>
          </Box>
        </Flex>

        {/* Set Score */}
        <Flex>
          <Box
            bg="#ffffff"
            w="5vw"
            p={3}
            color="white"
            // pos="absolute"
            borderColor="white"
            mr={1}
          >
            <Center>
              <Text color="black" fontSize="2xl">
                0
              </Text>
            </Center>
          </Box>
          <Box
            bg="#fecf41"
            w="0.5vw"
            p={2.5}
            color="black"
            // pos="absolute"
          ></Box>
          <Box
            bg="#ffffff"
            w="5vw"
            p={3}
            color="white"
            // pos="absolute"
            borderColor="white"
            ml={1}
          >
            <Center>
              <Text color="black" fontSize="2xl">
                0
              </Text>
            </Center>
          </Box>
        </Flex>
      </VStack>

      <Box
        opacity={0.5}
        bg="#ffffff"
        w="6vw"
        p={2.5}
        color="white"
        pos="absolute"
        borderColor="white"
        bottom="0"
        left={0}
      >
        <Center>
          <Text color="black" fontSize="2xl">
            -1
          </Text>
        </Center>
      </Box>
      <Box
        bg="#ffffff"
        w="20vw"
        p={2.5}
        color="white"
        pos="absolute"
        borderColor="white"
        ml={2}
        mr={1}
        bottom="0"
      >
        <Center>
          <Text color="black" fontSize="2xl">
            00:00:00
          </Text>
        </Center>
      </Box>
      <Box
        opacity={0.5}
        bg="#ffffff"
        w="6vw"
        p={2.5}
        color="white"
        pos="absolute"
        borderColor="white"
        right={0}
        bottom="0"
      >
        <Center>
          <Text color="black" fontSize="2xl">
            -1
          </Text>
        </Center>
      </Box>

      {/* Scoreboard */}
      <Flex>
        {/* // Scoreboard Team 1 */}
        <Flex
          bg="#9C091D"
          w="50vw"
          h="100vh"
          p="0"
          color="white"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="380">0</Text>
        </Flex>
        {/* // Scoreboard Team 2 */}
        <Flex
          bg="#061435"
          w="50vw"
          h="100vh"
          color="white"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="380">0</Text>
        </Flex>
      </Flex>
    </Container>
  );
}

export default scoreboard;
