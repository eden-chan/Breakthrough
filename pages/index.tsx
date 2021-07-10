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

import Image from 'next/image'
import singer from '../public/singer.svg';
import rapper from '../public/rapper.svg';


export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW="xl">
      <Grid templateColumns="repeat(2, 1fr)">
        <GridItem>
          <VStack spacing="12px">
            <Box>
              <Heading as="h1" size="xl">
                Find your Voice
              </Heading>
            </Box>
            <Box>
              <Text fontSize="md"> | About </Text>
              <Text fontSize="xs"> Breakthrough empowers individuals to become more articulate through freestyle rap  </Text>
            </Box>
            <Link href="/trainer" passHref>
              <Button>
                Start Session
              </Button>
            </Link>
          </VStack>
        </GridItem>
        <GridItem>
          <Button onClick={toggleColorMode}>
            Toggle {colorMode === "light" ? "Dark" : "Light"}
          </Button>
          <Image src={rapper} alt="Singer" />
        </GridItem>
      </Grid>
    </Container>
  );
}
