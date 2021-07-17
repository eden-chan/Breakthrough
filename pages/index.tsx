import Link from 'next/link';
import {
  useColorMode,
  Button,
  Container,
  Grid,
  GridItem,
  Box,
  Stack,
  VStack,
  Heading,
  Text,
  Flex,
  Spacer,
  useColorModeValue,
  Center,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

import Image from 'next/image';
import singer from '../public/singer.svg';
import rapper from '../public/rapper.svg';

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue('white', 'primary.dark');
  return (
    // Body
    <Box bg={bg}>
      <Grid templateColumns="repeat(2, 1fr)">
        <GridItem colSpan={2}>
          {/* Nav Bar */}
          <Box w="100%" h="20vh">
            <Button onClick={toggleColorMode}>
              {' '}
              Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
            </Button>
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          {/* Main Section */}
          <Flex direction="column" h="60vh" w="100%" px="5rem">
            <Box py="2rem">
              <Heading as="h1" size="4xl">
                Find your Voice
              </Heading>
            </Box>
            <Box pb="2rem">
              <Text fontSize="lg"> | About </Text>
              <Text fontSize="md">
                {' '}
                Breakthrough empowers individuals to become more articulate by
                developing their ability to freestyle rap{' '}
              </Text>
            </Box>
            <Box>
              <Link href="/trainer" passHref>
                <Box
                  as="button"
                  borderRadius="md"
                  bg="#FEBE02"
                  color="#1A1A1A"
                  h="150%"
                  w="50%"
                >
                  <Center>
                    <Text fontSize="2xl">
                      Start a Session <ArrowForwardIcon />
                    </Text>{' '}
                  </Center>
                </Box>
              </Link>
            </Box>
          </Flex>
        </GridItem>
        <GridItem colSpan={1}>
          <Image src={rapper} alt="Singer" />
        </GridItem>
        <GridItem colSpan={2}>
          {/* Footer */}
          <Box h="20vh"></Box>
        </GridItem>
      </Grid>
    </Box>
  );
}
