import React from "react";
import { useState, useEffect, useRef } from "react";
import { Container, VStack, useBoolean, useDisclosure } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
} from "@chakra-ui/react";
import {
  Center,
  Square,
  Circle,
  Editable,
  EditableInput,
  EditablePreview,
} from "@chakra-ui/react";
import { GameScore, ScorePlayer1, ScorePlayer2 } from "./is";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPause,
  faPlay,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";

const teamA = new ScorePlayer1("Team A");
const teamB = new ScorePlayer2("Team B");

function scoreboard() {
  const [score_a, set_score_a] = useState(0);
  const [score_b, set_score_b] = useState(0);
  const [set_a, set_set_a] = useState(0);
  const [set_b, set_set_b] = useState(0);
  const [time, setTime] = useState(0);
  // const [running, setRunning] = useState(false);
  const [running, setRunning] = useBoolean();
  const [teamAName, setTeamAName] = useState("Team A");
  const [teamBName, setTeamBName] = useState("Team B");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isWinner, setIsWinner] = useState(false);

  const onChange_A_NameHandler = (event) => {
    setTeamAName(event.target.value);
    // console.log(teamAName)
  };
  const onChange_B_NameHandler = (event) => {
    setTeamBName(event.target.value);
    // console.log(teamBName)
  };
  GameScore.selectSportAndSetPointToWin('Table tennis') //เปลี่ยนกีฬาตรงนี้

  const timeToString =
    ("0" + Math.floor((time / 60000) % 60)).slice(-2) +
    ":" +
    ("0" + Math.floor((time / 1000) % 60)).slice(-2) +
    ":" +
    ("0" + ((time / 10) % 100)).slice(-2);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  function reState(x) {
    if (x) {
      let scoreA = x[0],
        scoreB = x[1];
      let setA = x[2],
        setB = x[3];
      set_score_a(scoreA);
      set_score_b(scoreB);
      set_set_a(setA);
      set_set_b(setB);
    }
    // console.log(x);
  }

  function addScoreA() {
    reState(addScoreTeamA());
  }

  function addScoreB() {
    reState(addScoreTeamB());
  }

  function subtractScoreA() {
    reState(subtractScoreTeamA());
  }

  function subtractScoreB() {
    reState(subtractScoreTeamB());
  }

  function resetScoreAndSetButton() {
    resetScoreAndSet();
    reState([0, 0, 0, 0]);
    setTime(0);
    // setIsReset(true);

    // console.log(score_a, score_b , set_a, set_b)
  }

  function addScoreTeamA() {
    // GameScore.getNumOfSetToWin();
    // console.log(GameScore.numOfSetToWin);

    if (
      teamA.getWinSet() < GameScore.getNumOfSetToWin() &&
      teamB.getWinSet() < GameScore.getNumOfSetToWin()
    ) {
      teamA.addScore();
      GameScore.updateScore(teamA, teamB);
      // const data = getDataArray();
      // console.log(typeof(data));
      // console.log(data[0]);
      // backUpVariables(data[0], data[1], data[2], data[3], data[4], data[5], data[6]);
      // backUpVariables();
      // updateScoreAndSet()
      let scoreA, scoreB;
      let dataReturn = GameScore.updateScore(teamA, teamB);
      // console.log(scoreA, scoreB, setA, setB);
      console.log(dataReturn);

      return dataReturn;
    } else {
      alert("เอาล่ะ มันชนะแล้วลูกพี่");
      onOpen();
      console.log(onOpen);
      console.log(isOpen);
    }
  }
  function subtractScoreTeamA() {
    teamA.subtractScore();
    // updateScoreAndSet()
    // backUpVariables(teamA.getScore(), teamA.getWinSet(), teamB.getScore(), teamB.getWinSet(), GameScore.getSportName(), GameScore.getSetPoint(), GameScore.getNumOfSetToWin());
    // backUpVariables();
    GameScore.updateScore(teamA, teamB);
    let dataReturn = GameScore.updateScore(teamA, teamB);
    return dataReturn;
  }

  function addScoreTeamB() {
    if (
      teamA.getWinSet() < GameScore.getNumOfSetToWin() &&
      teamB.getWinSet() < GameScore.getNumOfSetToWin()
    ) {
      teamB.addScore();
      GameScore.updateScore(teamA, teamB);
      // const data = getDataArray();
      // console.log(typeof(data));
      // console.log(data[0]);
      // backUpVariables(data[0], data[1], data[2], data[3], data[4], data[5], data[6]);
      // backUpVariables();
      // updateScoreAndSet()
      let scoreA, scoreB;
      let dataReturn = GameScore.updateScore(teamA, teamB);
      // console.log(scoreA, scoreB, setA, setB);
      console.log(dataReturn);

      return dataReturn;
    } else {
      alert("เอาล่ะ มันชนะแล้วลูกพี่");
      setIsBWinner(true);
    }
  }
  function subtractScoreTeamB() {
    teamB.subtractScore();
    // updateScoreAndSet()
    // backUpVariables(teamA.getScore(), teamA.getWinSet(), teamB.getScore(), teamB.getWinSet(), GameScore.getSportName(), GameScore.getSetPoint(), GameScore.getNumOfSetToWin());
    // backUpVariables();
    GameScore.updateScore(teamA, teamB);
    let dataReturn = GameScore.updateScore(teamA, teamB);
    return dataReturn;
  }

  function resetScoreAndSet() {
    teamA.setScore(0);
    teamB.setScore(0);
    GameScore.resetScoreAndSet(teamA, teamB);
    // updateScoreAndSet();
    // GameScore.updateScoreAndSet();
    // backUpVariables(teamA.getScore(), teamA.getWinSet(), teamB.getScore(), teamB.getWinSet(), GameScore.getSportName(), GameScore.getSetPoint(), GameScore.getNumOfSetToWin());
  }

  // Press key from keyboard to Add, Sub , Reset score.
  useEffect(() => {
    const keyDownHandler = (event) => {
      console.log("User pressed: ", event.key);

      if (event.key === ";") {
        event.preventDefault();
        addScoreA();
      }
      if (event.key === "'") {
        event.preventDefault();
        addScoreB();
      }
      if (event.key === ".") {
        event.preventDefault();
        subtractScoreA();
      }
      if (event.key === "/") {
        event.preventDefault();
        subtractScoreB();
      }
      if (event.key === "]") {
        event.preventDefault();
        resetScoreAndSetButton();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  const showWinner = () => {
    if (true) {
      return (
        <WinnerModal
          pos="absolute"
          onOpen={onOpen}
          isOpen={isOpen}
        ></WinnerModal>
      );
    } else {
      return <></>;
    }
  };

  return (
    // Container of Scoreboard
    <Container maxW="100vw" h="100vh" bg="#061435" centerContent pos="relative">
      {GameScore.haveWinner ? (
        <Flex
          zIndex={1}
          pos="absolute"
          alignItems="center"
          justifyContent="center"
          h="100%"
          w="100%"
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(0deg)"
        >
          <Card align="center" w="50vw">
            <CardHeader>
              <Heading size="xl"> The competition is over </Heading>
            </CardHeader>
            <CardBody>
              <Text>
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
            <CardFooter>
              <Button mr={10} colorScheme="blue" onClick={resetScoreAndSetButton}>Restart</Button>
              <Button ml={10} colorScheme="blue" >Save</Button>
            </CardFooter>
          </Card>
        </Flex>
      ) : (
        <div></div>
      )}

      {/* {showWinner} */}

      <VStack pos="absolute" spacing={1}>
        {/* Team name and Button */}
        <Flex>
          {/* Reset button */}
          <Box
            opacity={0.5}
            bg="#ffffff"
            w="5vw"
            p={3}
            color="white"
            // pos="absolute"
            borderColor="white"
            onClick={resetScoreAndSetButton}
          >
            <Center>
              <Text color="black" fontSize="2xl" userSelect="none">
                <FontAwesomeIcon icon={faRotateRight} />
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
              {/* <Text color="black" fontSize="2xl" userSelect="none">
                Prayuth Chan
              </Text> */}
              <Editable
                color="black"
                fontSize="2xl"
                defaultValue={teamAName}
                userSelect="none"
              >
                <EditablePreview />
                <EditableInput onChange={onChange_A_NameHandler} />
              </Editable>
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
              {/* <Text color="black" fontSize="2xl" userSelect="none">
                Pravit Wong
              </Text> */}
              <Editable color="black" fontSize="2xl" defaultValue={teamBName}>
                <EditablePreview />
                <EditableInput onChange={onChange_B_NameHandler} />
              </Editable>
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
            onClick={setRunning.toggle}
          >
            <Center>
              <Text color="black" fontSize="2xl" userSelect="none">
                <FontAwesomeIcon icon={faPlay} />
                <FontAwesomeIcon icon={faPause} />
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
              <Text color="black" fontSize="2xl" userSelect="none">
                {set_a}
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
              <Text color="black" fontSize="2xl" userSelect="none">
                {set_b}
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
        onClick={subtractScoreA}
      >
        <Center>
          <Text color="black" fontSize="2xl" userSelect="none">
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
          <Text color="black" fontSize="2xl" userSelect="none">
            {/* {time} */}
            {/* <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span> */}
            {/* <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span> */}
            {/* <span>{("0" + ((time / 10) % 100)).slice(-2)}</span> */}
            {timeToString}
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
        onClick={subtractScoreB}
      >
        <Center>
          <Text color="black" fontSize="2xl" userSelect="none">
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
          onClick={addScoreA}
          // onKeyPress={(e)=>{onKeyHandler(e)}}
        >
          <Text fontSize="380" userSelect="none">
            {score_a}
          </Text>
        </Flex>
        {/* // Scoreboard Team 2 */}
        <Flex
          bg="#061435"
          w="50vw"
          h="100vh"
          color="white"
          justifyContent="center"
          alignItems="center"
          onClick={addScoreB}
        >
          <Text fontSize="380" userSelect="none">
            {score_b}
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
}
export default scoreboard;
