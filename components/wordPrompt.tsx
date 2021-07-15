import React, { useEffect, useState } from "react";
import {
  Box,
  Center,
  Progress,
  useColorModeValue,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Flex,
  Spacer,
  Image,
  Icon,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { PlayIcon, MenuIcon, VolumeUpIcon, VolumeDownIcon } from "./icons";
import "tailwindcss/tailwind.css";

const WordPrompt = () => {
  useEffect(() => {
    const interval = setInterval(tickTimer, 70);
    fetchWords();
    // Clear service worker to prevent underflow
    return () => clearInterval(interval);
  }, []);
  const changeWordHandler = () => {
    setWords((lastWords) => {
      if (lastWords.length <= 3) {
        fetchWords();
      }
      lastWords.shift();
      return [...lastWords];
    });
  };
  const [words, setWords] = useState([]);
  const fetchWords = () => {
    fetch("https://random-word-api.herokuapp.com/word?number=10", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setWords((lastWords) => {
          return [...lastWords, ...data];
        });
      });
  };

  const [timer, setTimer] = useState(100);

  const tickTimer = () => {
    setTimer((lastTime) => {
      if (lastTime <= 0) {
        changeWordHandler();
        return 100;
      }
      return lastTime - 1;
    });
  };

  const wordBox = useColorModeValue("#5000CA", "#C4C4C4");
  const prompt = useColorModeValue("#C4C4C4e", "#5000CA");

  return (
    <Center>
      <Box className="flex flex-col m-10" mt="50px" w="50%">
        <Box p="20px" h="200px" bg={wordBox}>
          <Box p="20px"> </Box>
          <Box className="text-center text-6xl" color={prompt}>
            {words[0]}{" "}
          </Box>
        </Box>
        <Box p="15px"></Box>
        <Progress value={timer} w="%100" size="xs" colorScheme="yellow" />
        <p className="text-center text-3xl">Words left: {words.length}</p>
        <button
          onClick={changeWordHandler}
          className="text-center border-5 border-black-600 border-solid"
        >
          Change Word
        </button>
        <button onClick={fetchWords}>Fetch Words</button>

        <HStack
          width="calc(50% + 40px)"
          alignItems="center"
          justifyItems="space-between"
          spacing="true"
        >
          <IconButton
            aria-label="Menu"
            w="50px"
            h="50px"
            objectFit="scale-down"
            isRound={true}
            icon={<MenuIcon w="100%" h="100%" />}
          />
          <IconButton
            aria-label="Start and Pause"
            m="auto"
            boxSize="80px"
            objectFit="scale-down"
            justifySelf="center"
            isRound={true}
            icon={<PlayIcon w="100%" h="100%"/>}
          />
        </HStack>

        <Flex>
          <VolumeDownIcon boxSize="40px"/>
          <Spacer />
          <Slider  aria-label="volume" colorScheme="yellow" defaultValue={50}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <VolumeUpIcon boxSize="40px"/>
        </Flex>
      </Box>
    </Center>
  );
};

export default WordPrompt;
