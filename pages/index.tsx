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
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

import Image from 'next/image';
import singer from '../public/singer.svg';
import rapper from '../public/rapper.svg';

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Grid templateColumns="repeat(2, 1fr)">
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
              <Button borderRadius="md" bg="#FEBE02" color="#1A1A1A" p="40px">
                <Text fontSize="18px">
                  Start a Session <ArrowForwardIcon />
                </Text>{' '}
              </Button>
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
  );
}
