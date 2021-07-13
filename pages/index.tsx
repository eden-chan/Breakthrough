import Link from "next/link";
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
  Text, Flex,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons'


import Image from 'next/image'
import singer from '../public/singer.svg';
import rapper from '../public/rapper.svg';


export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Grid templateColumns="repeat(2, 1fr)">
      <GridItem colSpan={2}>
        {/* Nav Bar */}
        <Box w="100%" h='20vh' />
      </GridItem>
      <GridItem>
        {/* Main Section */}
        <Box h='60vh'>
          <Box>
            <Heading as="h1" >
              Find your Voice
            </Heading>
          </Box>
          <Box>
            <Text fontSize="lg"> | About </Text>
            <Text fontSize="md"> Breakthrough empowers individuals to become more articulate through freestyle rap  </Text>
          </Box>
          <Link href="/trainer" passHref>
            <Button colorScheme='yellow'>Start Session <ArrowForwardIcon /></Button>
          </Link>
        </Box>
      </GridItem>
      <GridItem>
        <Image src={rapper} alt="Singer" />
      </GridItem>
      <GridItem colSpan={2}>
        {/* Footer */}
        <Box h='20vh'></Box>
      </GridItem>
    </Grid>
  );
}
