import React from "react";
import { useState, useEffect, } from "react";
import { useRouter } from 'next/router'
import { Container } from "@chakra-ui/react";
import { Heading, Flex, Button, Box } from "@chakra-ui/react";
import { addNew } from "./md.js";
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
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  isError,
  Link,
} from "@chakra-ui/react";
import RadioCard from "./RadioCard";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

function index() {
  let router= useRouter()
  const [id, setID] = useState(() => {
    // const saved = localStorage.getItem("id");
    if (typeof window !== "undefined") {
      // Perform localStorage action
      const saved = localStorage.getItem("id");
      const initialValue = (saved);
      return initialValue || "";
    }
  });

  const [sport, setSport] = useState(() => {
    // const saved = localStorage.getItem("id");
    if (typeof window !== "undefined") {
      // Perform localStorage action
      const saved = localStorage.getItem("sport");
      const initialValue = (saved);
      return initialValue || "";
    }
  });
  const [yourID, setYourID] = useState([]);
  useEffect(() => {
    const yourID = (localStorage.getItem("id"));
    if (yourID) {
      setYourID(yourID);
    }
  }, []);

  // const [IDinput, setIDinput] = useState("");
  const [teamAname, setTeamAName] = useState("");
  const [teamBname, setTeamBName] = useState("");
  const [typesport, setTypeSport] = useState("");
  const [viewCanClick, setViewCanClick] = useState(false);
  useEffect(()=>{
    if(teamAname === "" || teamBname === "" || typesport === "") {
      setViewCanClick(false)
    }
  },[])

  const [input, setInput] = useState("");
  const handleInputChange = (e) => {
    setInput(e.target.value);
    // setIDinput(e.target.value)
  };
  const handleNameOfTeamAChange = (e) => {
    setTeamAName(e.target.value);
  };
  const handleNameOfTeamBChange = (e) => {
    setTeamBName(e.target.value);
  };

  const isError = input === "";

  const idSetting = () => {
    setID(input);
    console.log(input);
  };

  const sportSetting = () => {
    setSport(value)
    setTypeSport(value);
  }
  useEffect(() => {
    // storing input name
    localStorage.setItem("id", id);
  }, [id]);

  useEffect(() => {
    // storing input name
    localStorage.setItem("sport", sport);
  }, [sport]);

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

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("bottom");

  return (
    <Container maxW="100vw" h="100vh" bgGradient="linear(to-r,#08203e,#292E49)">
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
        <Button colorScheme="blue" onClick={onOpen}>
          Create
        </Button>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px"></DrawerHeader>
            <DrawerBody>
              <Container maxW="95%" h="50vh" bg="white" centerContent>
                {/* <Heading as="h2" size="xl" p={6}>
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

                  <Button
                    colorScheme="blue"
                    onClick={() => {
                      idSetting();
                      toast({
                        title: "ID saved.",
                        description: "We've save your ID.",
                        status: "success",
                        duration: 4500,
                        isClosable: true,
                      });
                    }}
                  >
                    Select ID
                  </Button>
                </Flex> */}
                <br />
                <Flex alignItems={"center"}>
                  <FormControl isRequired>
                    <FormLabel>First team's name</FormLabel>
                    <Input
                      placeholder="First team's name"
                      type="word"
                      value={teamAname}
                      onChange={handleNameOfTeamAChange}
                    />
                  </FormControl>
                  <Heading pl={10} pr={10}>
                    VS
                  </Heading>
                  <FormControl isRequired>
                    <FormLabel>Second team's name</FormLabel>
                    <Input
                      placeholder="Second team's name"
                      type="word"
                      value={teamBname}
                      onChange={handleNameOfTeamBChange}
                    />
                  </FormControl>
                </Flex>

                <br />

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

                <Flex w="30%" justifyContent="space-around" p={2}>
                  {/* <Button
                  w={"40%"}
                    colorScheme="blue"
                    onClick={() =>
                      toast({
                        title: "Name set",
                        description: "We've set team name for you.",
                        status: "success",
                        duration: 4500,
                        isClosable: true,
                      })
                    }
                  >
                    Set name
                  </Button> */}

                  {/* <Button colorScheme="blue">Join</Button> */}
                  <Button
                    colorScheme="blue"
                    onClick={() => {
                      toast({
                        title: "Tracker created.",
                        description: "We've created your sport tracker for you.",
                        status: "success",
                        duration: 4500,
                        isClosable: true,
                      });
                      sportSetting();
                      setViewCanClick(true)
                    }}
                  >
                    Save
                  </Button>
                  <Button
                  isDisabled={!viewCanClick}
                    colorScheme="blue"
                    onClick={() => {
                      toast({
                        title: "Tracker created.",
                        description: "We've created your sport tracker for you.",
                        status: "success",
                        duration: 4500,
                        isClosable: true,
                      });
                      const returnedID = async() => {
                        let x = await addNew("", 0, 0, 0, 0, typesport, false, teamAname, teamBname)
                        console.log("return ID : " + x);
                        localStorage.setItem("id", x);
                        router.push('/scoreboardForFB/scoreboardID')
                      }
                      // addNew("", 0, 0, 0, 0, typesport, false, teamAname, teamBname);
                      returnedID();
                      console.log("addNew")
                      sportSetting();

                    }}
                  >
                    Go Track
                  </Button>

                  {/* <Button colorScheme="blue">Join</Button> */}
                </Flex>
                <br />
              </Container>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Container>
    </Container>
  );
}

export default index;
