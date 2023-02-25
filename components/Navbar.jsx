import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  isError,
  Input,
  useToast,
  Image,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import Link from "next/link";
import modalButton from "@/pages/modalButton";

export default function WithSubnavigation() {
  const toast = useToast();
  const [id, setID] = useState(() => {
    // const saved = localStorage.getItem("id");
    if (typeof window !== "undefined") {
      // Perform localStorage action
      const saved = localStorage.getItem("id");
      const initialValue = saved;
      return initialValue || "";
    }
  });
  const { isOpen, onToggle } = useDisclosure();
  const [input, setInput] = useState("");
  const [viewCanClick, setViewCanClick] = useState(false);
  const handleInputChange = (e) => {
    setInput(e.target.value);
    // setIDinput(e.target.value)
  };
  const isError = input === "";
  useEffect(() => {
    if (viewCanClick) {
      setViewCanClick(false);
    }
  }, [isError]);

  const idSetting = () => {
    setViewCanClick(true);
    setID(input);
    console.log(input);
  };
  useEffect(() => {
    // storing input name
    localStorage.setItem("id", id);
  }, [id]);

  return (
    <Box>
      <Flex
        bg={useColorModeValue("#030814", "gray.800")}
        color={useColorModeValue("#fcfcfc", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        // borderBottom={1}
        // borderStyle={'solid'}
        // borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          justify={{ base: "center", md: "start" }}
          marginLeft={5}
        >
          <Link href="/">
            <Image src="GameTrackers.svg" alt="logo" />
          </Link>
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
        >
          <Flex display={{ base: "none", md: "flex" }}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Popover placement="bottom-end">
            <PopoverTrigger>
              <Button
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"#FF6573"}
                href={"#"}
                _hover={{
                  bg: "#ec4156",
                }}
              >
                View
              </Button>
            </PopoverTrigger>
            <PopoverContent w="40vw">
              <PopoverHeader fontWeight="semibold" color="black">
                Enter the your ID to track.
              </PopoverHeader>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody color="black">
                <Flex
                  w="100%"
                  alignItems="center"
                  justifyContent="space-around"
                >
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
                </Flex>
                <br />
                <Center>
                  <Flex w="40%" justifyContent="space-around">
                    <Link isExternal href="/scoreboardForFB/id">
                      <Button isDisabled={!viewCanClick} colorScheme="blue">
                        Track
                      </Button>
                    </Link>

                    <Link href="/viewscore/" isExternal><Button isDisabled={!viewCanClick} colorScheme="blue">
                      View
                    </Button></Link>
                    
                  </Flex>
                </Center>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          {/* <modalButton>Track</modalButton> */}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}
const ModalTrackButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Lorem count={2} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Flex>
      <Stack direction={"row"} spacing={8}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? "#"}
                  fontSize={"sm"}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                </Link>
              </PopoverTrigger>

              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={"xl"}
                  minW={"sm"}
                >
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    </Flex>
  );
};
// NavItem
const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};
// NavItem
const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
// Array<NavItem>
const NAV_ITEMS = [
  {
    label: "Scoreboard",
    href: "scoreboard",
  },
  {
    label: "List Score",
    href: "listscore",
  },
  {
    label: "About us",
    href: "aboutus",
  },
];
