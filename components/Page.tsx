import { ChakraProvider, Box, Button, useColorMode } from "@chakra-ui/react";

const Page = ({ children }) => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box w="100%" h="100vh" bg={colorMode === 'light' ? 'white' : 'primary.dark'} >
            <Box h="20vh" w="100%" top="0">
            <Button onClick={toggleColorMode}>
                Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
            </Button>
            </Box>
            {children}
        </Box >
    );
}

export default Page;