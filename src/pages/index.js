import React from "react";
import { useState } from "react";
import { Container } from "@chakra-ui/react";
import { Heading, Flex, Button, Box } from "@chakra-ui/react";
import {
  Input,
  useRadioGroup,
  HStack,
  useRadio,
  useToast,
  Stack,
  Text,
  chakra,
  Image,
  Center,
} from "@chakra-ui/react";
import RadioCard from "./RadioCard";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'

function index() {
  const [input, setInput] = useState("");

    const handleInputChange = (e) => setInput(e.target.value);
    const isError = input === "";
  // const options = ["Volleyball", "Badminton", "Sepak takraw","Table tennis"];
  // const { getRootProps, getRadioProps } = useRadioGroup({
  //   name: "sport",
  //   defaultValue: "Volleyball",
  //   onChange: console.log,
  // });

  // const group = getRootProps();

  function CustomRadio(props) {
    const { image, ...radioProps } = props;
    const { state, getInputProps, getCheckboxProps, htmlProps, getLabelProps } =
      useRadio(radioProps);
    

    return (
      <chakra.label {...htmlProps} cursor="pointer">
        <input {...getInputProps({})} hidden />
        <Box
          {...getCheckboxProps()}
          bg={state.isChecked ? "green.200" : "transparent"}
          w={12}
          p={1}
          rounded="full"
        >
          <Image src={image} rounded="full" {...getLabelProps()} />
        </Box>
      </chakra.label>
    );
  }

  const toast = useToast();

  const avatars = [
    {
      name: "Volleyball",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Badminton",
      image: "https://randomuser.me/api/portraits/men/86.jpg",
    },
    {
      name: "Sepak takraw",
      image: "https://randomuser.me/api/portraits/men/29.jpg",
    },
    {
      name: "Table tennis",
      image: "https://randomuser.me/api/portraits/women/95.jpg",
    },
  ];

  const handleChange = (value) => {
    toast({
      title: `The value got changed to ${value}!`,
      status: "success",
      duration: 700,
    });
  };

  const { value, getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: "Volleyball",
    onChange: handleChange,
  });

  return (
    <Container maxW="100vw" h="165vh" bgGradient="linear(to-r,#08203e,#292E49)">
      <Container
        maxW="100vw"
        h="100vh"
        centerContent
        // pos="absolute"
      >
        <Flex alignItems="center" justifyContent="center" w="100%" h="50vh">
          <Heading as="h1" size="4xl" color="white">
            GameTracker
          </Heading>
        </Flex>
        <Button colorScheme="blue">Get Start</Button>
      </Container>
      <Container maxW="95%" h="60vh" bg="white" centerContent>
        <Heading as="h2" size="xl" p={6}>
          Enter Your ID
        </Heading>

        <Flex w="60%" alignItems="center" justifyContent="space-around">
          <FormControl w="60%" isInvalid={isError}>
            <FormLabel>ID</FormLabel>
            <Input
              placeholder="Please Enter Your ID here"
              type="word"
              value={input}
              onChange={handleInputChange}
            />
            {!isError ? (
              <FormHelperText>
                Enter the your ID to track.
              </FormHelperText>
            ) : (
              <FormErrorMessage>ID is required.</FormErrorMessage>
            )}
          </FormControl>

          <Button colorScheme="blue">Save</Button>
        </Flex>

        {/* <HStack {...group} p={10}>
          {options.map((value) => {
            const radio = getRadioProps({ value });
            return (
              <RadioCard key={value} {...radio}>
                {value}
              </RadioCard>
            );
          })}
        </HStack> */}
        <Center p={5}>
          <Stack {...getRootProps()} w="50vw">
            <Text align="center" w="100%">
              The selected sport is: {value}
            </Text>
            <HStack justifyContent="center">
              {avatars.map((avatar) => {
                return (
                  <CustomRadio
                    key={avatar.name}
                    image={avatar.image}
                    {...getRadioProps({ value: avatar.name })}
                  />
                );
              })}
            </HStack>
          </Stack>
        </Center>

        <Flex w="20%" justifyContent="space-around" p={2}>
          <Button colorScheme="blue">Track</Button>
          <Button colorScheme="blue">Join</Button>
        </Flex>
      </Container>
    </Container>
  );
}

export default index;
