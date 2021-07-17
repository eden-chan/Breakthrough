import { useState } from 'react';
import WordPrompt from '../../components/wordPrompt';
import PreRap from '../../components/preRap';
import Link from 'next/link';
import ExternalPlayer from '../../components/ExternalPlayer';
import 'tailwindcss/tailwind.css';
import {
  Box,
  Button,
  Container,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';
import moment from 'moment';

import 'tailwindcss/tailwind.css';

const Trainer = () => {
  const [startSession, setStartSession] = useState(false);
  const [difficulty, setDifficulty] = useState('Easy');
  const [startTime, setStartTime] = useState(null);
  const [timeSpent, setTimeSpent] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleStartSession = () => {
    setStartTime(new Date(Date.now()));
    setStartSession(true);
  };

  const handleEndSession = () => {
    const diff = Date.now() - startTime.getTime();
    const time = moment.utc(diff);
    setTimeSpent(time.format('m [minutes] s [seconds]'));
    setStartSession(false);
    onOpen();
  };

  const handleNewSession = () => {
    onClose();
  };

  return (
    <Container my={20}>
      <Stack spacing={4}>
        {startSession ? (
          <Box key="wordPrompt_container">
            <Stack spacing={8}>
              <WordPrompt difficulty={difficulty} />
              <Button
                colorScheme="purple"
                onClick={handleEndSession}
                fontSize="x-large"
              >
                End session
              </Button>
              <ExternalPlayer />
            </Stack>
          </Box>
        ) : (
          <>
            <Link href="/" passHref>
              <Button colorScheme="purple" variant="outline" fontSize="x-large">
                <a>Home</a>
              </Button>
            </Link>
            <Button
              colorScheme="purple"
              onClick={handleStartSession}
              fontSize="x-large"
            >
              Start
            </Button>
            <PreRap difficulty={difficulty} setDifficulty={setDifficulty} />
          </>
        )}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader display="flex" justifyContent="center">
              Session Ended
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody display="flex" justifyContent="center">
              <Stack>
                <Text fontSize="md">Session time: {timeSpent}</Text>
                <Text fontSize="md">Difficulty: {difficulty}</Text>
              </Stack>
            </ModalBody>
            <ModalFooter>
              <Link href="/" passHref>
                <Button colorScheme="gray" mr={3} onClick={onClose} isFullWidth>
                  <a>Exit</a>
                </Button>
              </Link>

              <Button
                colorScheme="purple"
                onClick={handleNewSession}
                isFullWidth
              >
                New Session
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Stack>
    </Container>
  );
};

export default Trainer;
