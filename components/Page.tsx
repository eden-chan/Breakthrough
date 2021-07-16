import { Button, Box, ChakraProvider, useColorMode } from "@chakra-ui/react";

export default function Page(props) {
    const { colorMode, toggleColorMode } = useColorMode();

    return (    
        <Box>
        <Button onClick={toggleColorMode}>
              {' '}
              Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
            </Button>
            {props.children}
        </Box>
    )
}