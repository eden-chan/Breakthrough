import { ChakraProvider, Box, Button, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const Page = ({ children }) => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box w="100%" h="100vh" bg={colorMode === 'light' ? 'white' : 'primary.dark'} >
            <Box h="20vh" w="100%" top="0">
            <Button onClick={toggleColorMode}>
                 {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
            </Button>
            </Box>
            {children}
        </Box >
    );
}

export default Page;