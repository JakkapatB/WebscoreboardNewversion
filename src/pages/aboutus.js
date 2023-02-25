import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  Badge,
  Avatar,
  Center,
  Card,
  CardFooter,
  CardBody,
  CardHeader,
  SimpleGrid,
  Img,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";
import Footer from "components/Footer";
import { BsGithub, BsFacebook } from "react-icons/bs";
import { useRouter } from "next/router";
import { animateScroll } from 'react-scroll';
import { handleSmoothScroll } from "next/dist/shared/lib/router/router";
// import modalButton from "components/modalButton";

export default function About_us() {
  return (
    <Container
      maxW="100vw"
      h="auto"
      centerContent
      pos="relative"
      bgGradient="linear(to-r,#08203e,#08203e)"
    >
      <Container maxW={"7xl"} mb={40}>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
          mb={50}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            >
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: "30%",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "red.400",
                  zIndex: -1,
                }}
                bgGradient="linear(to-tl,#ffce41, #f06778)"
                bgClip="text"
              >
                Game Trackers
              </Text>
              <br />
              <Text as={"span"} color={"red.400"}>
                About us
              </Text>
            </Heading>
            <Text color={"#fcfcfc"}>
              We created game trackers so everyone can keep track of their
              scores anytime, anywhere and never miss an important score.
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <Button
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                colorScheme={"red"}
                bg={"red.400"}
                _hover={{ bg: "red.500" }}
                onClick={() =>window.scrollTo({
                  top: 720,
                  behavior: 'smooth'
                })}
              >
                Contact us
              </Button>
              {/* <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              leftIcon={<PlayIcon h={4} w={4} color={'gray.300'} />}>
              How It Works
            </Button> */}
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            {/* <Blob
            w={'150%'}
            h={'150%'}
            position={'absolute'}
            top={'-20%'}
            left={0}
            zIndex={-1}
            color={useColorModeValue('while', 'red.400')}
          /> */}
            <Box
              position={"relative"}
              height={"300px"}
              rounded={"2xl"}
              boxShadow={"2xl"}
              width={"full"}
              overflow={"hidden"}
            >
              {/* <IconButton
              aria-label={'Play Button'}
              variant={'ghost'}
              _hover={{ bg: 'transparent' }}
              icon={<PlayIcon w={12} h={12} />}
              size={'lg'}
              color={'white'}
              position={'absolute'}
              left={'50%'}
              top={'50%'}
              transform={'translateX(-50%) translateY(-50%)'}
            /> */}
              <Image
                alt={"Hero Image"}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={"100%"}
                src={
                  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                }
              />
            </Box>
          </Flex>
        </Stack>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          direction={{ base: "column", md: "row" }}
          mt={20}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Center>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                mt={20}
              >
                <Text
                  as={"span"}
                  position={"relative"}
                  _after={{
                    content: "''",
                    width: "full",
                    height: "30%",
                    position: "absolute",
                    bottom: 1,
                    left: 0,
                    bg: "red.400",
                    zIndex: -1,
                  }}
                  color="#ffce41"
                >
                  Cofounders
                </Text>
              </Heading>
            </Center>
            <SimpleGrid
              spacing={8}
              templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            >
              {testimonials.map((cardinfo, index) => (
                <SocialProfileWithImage key={index} {...cardinfo} />
              ))}
            </SimpleGrid>
          </Stack>
        </Stack>
      </Container>
    </Container>
  );
}
function SocialProfileWithImage(props = testimonials.map()) {
  const { name, role, facebook, github, avatar, index } = props;
  return (
    <Center py={6}>
      <Box
        maxW={"270px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
        _hover={{
          transition: "all 0.2s ease-in-out",
          transform: "translateY(-10px)",
        }}
      >
        <Image
          h={"120px"}
          w={"full"}
          src="night-photograph-g3f11ccbe8_1920.jpg"
          objectFit={"cover"}
        />
        <Flex justify={"center"} mt={-12}>
          <Avatar
            size={"xl"}
            src={avatar}
            alt={"Author"}
            backgroundColor={"#F7F5F2"}
            css={{
              border: "2px solid #F7F5F2",
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
              {name}
            </Heading>
            <Text color={"gray.500"}>{role}</Text>
          </Stack>

          <Stack direction={"row"} justify={"center"} spacing={6}>
            <Stack spacing={0} align={"center"}>
              <IconButton
                aria-label="github"
                variant="ghost"
                size="lg"
                isRound={true}
                _hover={{ bg: "#F0EEED" }}
                icon={<BsGithub size="28px" />}
                onClick={() => window.open(github)}
              />
              <Text fontSize={"sm"} color={"gray.500"}>
                Github
              </Text>
            </Stack>
            {/* <Stack spacing={0} align={'center'}>
            <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#F0EEED' }}
                      icon={<BsFacebook size="28px" />}
                      onClick={() => window.open(facebook)}
                    />
              <Text fontSize={'sm'} color={'gray.500'}>
                Facebook
              </Text>
            </Stack> */}
          </Stack>

          {/* <Button
            w={"full"}
            mt={8}
            bg={useColorModeValue("#151f21", "gray.900")}
            color={"white"}
            rounded={"md"}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
          >
            Follow
          </Button> */}
        </Box>
      </Box>
    </Center>
  );
}
const testimonials = [
  {
    name: "Jakkapat B.",
    role: "Developer",
    github: "https://github.com/JakkpatB",
    avatar: "boss.svg",
  },
  {
    name: "Chotipat Sr.",
    role: "Developer",
    github: "https://github.com/chotipats2092002",
    avatar: "glun.svg",
  },
  {
    name: "Isoon S.",
    role: "Developer",
    github: "https://github.com/IsoonS",
    avatar: "2.svg",
  },
  {
    name: "Weerapong K.",
    role: "Developer",
    github: "https://github.com/WeerapongKh",
    avatar: "Lee.svg",
  },
  {
    name: "Chitthana R.",
    role: "Developer",
    github: "https://github.com/noujamess",
    avatar: "jame.svg",
  },
  {
    name: "Natthaphong T.",
    role: "Developer",
    github: "https://github.com/natthaphong1939",
    avatar: "4.svg",
  },
  {
    name: "Thitinan P.",
    role: "Developer",
    github: "https://github.com/thitinan147",
    avatar: "1.svg",
  },
  {
    name: "Suphakorn L.",
    role: "Document",
    github: "https://github.com/Suphakorn07",
    avatar: "7.svg",
  },
  {
    name: "Natthawut J.",
    role: "Document",
    github: "https://github.com/vextion01",
    avatar: "3.svg",
  },
  {
    name: "Trinnapop M.",
    role: "Document",
    github: "https://github.com/yeahyouknowmeimmafuckingtdxii",
    avatar: "6.svg",
  },
];
