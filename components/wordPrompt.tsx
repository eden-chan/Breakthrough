import React, { useEffect, useState } from 'react';
import {
  Box,
  Center,
  Flex,
  Progress,
  useColorModeValue,
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
  const prompt = useColorModeValue('#C4C4C4e', '#5000CA');

  return (
    <Center>
      <Flex direction="column" w="100%">
        <Box p="20px" h="200px" bg={wordBox}>
          <Box p="20px"> </Box>
          <Box className="text-center text-6xl" color={prompt}>
            {words[0]}{' '}
          </Box>
        </Box>
        <Box p="15px"></Box>
        <Progress value={timer} w="%100" size="xs" colorScheme="yellow" />
        <button
          onClick={changeWordHandler}
          className="text-center border-5 border-black-600 border-solid"
        >
          Change Word
        </button>
        <Metronome tempo="160" />
      </Flex>
    </Center>
  );
};

export default WordPrompt;
