import { extendTheme } from '@chakra-ui/react' 

const config = {
    initalColorMode: "dark",
    useSystemColorMode: false
  }
  
const theme = extendTheme({ config });

export default theme;