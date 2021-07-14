import React, { useEffect, useState } from "react";
import { Box, Center, Progress, useColorModeValue, extendTheme,
         Slider,SliderTrack, SliderFilledTrack, SliderThumb, Flex, Spacer, Image, Menu, HStack} from "@chakra-ui/react";
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

  const wordBox = useColorModeValue("#5000CA","#C4C4C4")
  const prompt = useColorModeValue("#C4C4C4e","#5000CA")

  return (
    <Center>
      <Box className="flex flex-col m-10" mt="50px" w="50%" >
        <Box p="20px" h="200px" bg={wordBox}>
          <Box p="20px"> </Box>
          <Box className="text-center text-6xl" color={prompt} >{words[0]} </Box>
        </Box>
        <Box p="15px">
        </Box>
        <Progress value={timer} w="%100" size="xs" colorScheme="yellow" />
        <p className="text-center text-3xl">Words left: {words.length}</p>
        <button
          onClick={changeWordHandler}
          className="text-center border-5 border-black-600 border-solid"
        >
          Change Word
        </button>
        <button onClick={fetchWords}>Fetch Words</button>
        
        <HStack spacing={100} alignItems="center">
          <Image boxSize="50px" objectFit="scale-down" align={['30%', '50%']} src="/menu.png" />
          <Image boxSize="80px" objectFit="scale-down" align={['center', 'center']} src="/pause.png" />        
        </HStack>
        
        <Flex>
          <Image boxSize="20px" objectFit="scale-down" src="/volume_down.png"/>
          <Spacer />
          <Slider aria-label="volume" colorScheme="yellow" defaultValue={50}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
             <SliderThumb />
          </Slider>
          <Image boxSize="20px" objectFit="scale-down" src="/volume_down.png"/>
         </Flex>

      </Box>
    </Center>
    
  );



};

export default WordPrompt;
