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
  Text,
} from "@chakra-ui/react";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container>
      <Grid templateColumns="repeat(2, 1fr)">
        <GridItem>
          <VStack>
            <Heading as="h1" size="xl">
              Find your Voice
            </Heading>

            <Text fontSize="xs">(xs) In love with React & Next</Text>
            <Link href="/trainer">
              <a>Start Session</a>
            </Link>
          </VStack>
        </GridItem>
        <GridItem>
          <Button onClick={toggleColorMode}>
            Toggle {colorMode === "light" ? "Dark" : "Light"}
          </Button>
          <p className="text-center">Insert Landing Page Here</p>
        </GridItem>
      </Grid>
    </Container>
  );
}
