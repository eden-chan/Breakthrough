import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Center,
  Flex,
  Progress,
  useColorModeValue,
  Text,
} from '@chakra-ui/react';
import Metronome from './Metronome';
import 'tailwindcss/tailwind.css';

const WordPrompt = () => {
  const tickTimer = () => {
    setTimer((lastTime) => {
      if (lastTime <= 0) {
        changeWordHandler();
        return 100;
      }
      return lastTime - 10;
    });
  };

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
  const fetchWords = async () => {
    const response = await fetch(
      'https://random-word-api.herokuapp.com/word?number=20',
      {
        method: 'GET',
      }
    );
    const words = await response.json();
    setWords((lastWords) => {
      return [...lastWords, ...words];
    });
  };

  useEffect(() => {
    const interval = setInterval(tickTimer, 500);
    // Clear service worker to prevent underflow
    return () => clearInterval(interval);
  }, []);

  const [timer, setTimer] = useState(100);
  const wordBox = useColorModeValue('#5000CA', '#C4C4C4');
  const prompt = useColorModeValue('#ffffff', '#5000CA');

  return (
    <Center>
      <Flex direction="column" w="100%">
        <Box p="20px" h="200px" borderRadius="12px" bg={wordBox}>
          <Box p="20px"> </Box>
          <Box>
            <Text color={prompt} align="center" fontSize="6xl">
              {words[0]}
            </Text>
          </Box>
        </Box>
        <Box p="15px"></Box>
        <Progress value={timer} w="100%" size="xs" colorScheme="yellow" />

        <Metronome tempo="160" />
        <Button onClick={changeWordHandler}>Change Word</Button>
      </Flex>
    </Center>
  );
};

export default WordPrompt;
