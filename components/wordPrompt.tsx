import React, { useEffect, useState } from 'react';
import { Center, Flex, Progress } from '@chakra-ui/react';
import Metronome from './Metronome';
import 'tailwindcss/tailwind.css';

const WordPrompt = () => {
  const [words, setWords] = useState([]);
  const [timer, setTimer] = useState(100);

  useEffect(() => {
    const interval = setInterval(tickTimer, 500);
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

  const fetchWords = () => {
    fetch('https://random-word-api.herokuapp.com/word?number=10', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setWords((lastWords) => {
          return [...lastWords, ...data];
        });
      })
      .catch((err) => console.log(err));
  };

  const tickTimer = () => {
    setTimer((lastTime) => {
      if (lastTime <= 0) {
        changeWordHandler();
        return 100;
      }
      return lastTime - 10;
    });
  };

  return (
    <Center>
      <Flex flexDirection="column" w="350px">
        <p className="text-center text-5xl">{words[0]}</p>
        <Progress value={timer} w="%100" size="xs" colorScheme="yellow" />
        <p className="text-center text-3xl">Words left: {words.length}</p>
        <button
          onClick={changeWordHandler}
          className="text-center border-5 border-black-600 border-solid"
        >
          Change Word
        </button>
        <button onClick={fetchWords}>Fetch Words</button>
        <Metronome tempo="160" />
      </Flex>
    </Center>
  );
};

export default WordPrompt;
