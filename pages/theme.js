import { extendTheme } from '@chakra-ui/react' 

const config = {
    initalColorMode: "dark",
    useSystemColorMode: false,
    colors: {
        prim_dark: "#1A1A1A",
        prim_main: "#5000CA",
        seco_main: "#FEBE02",
    }
  }
  
const theme = extendTheme( config );

export default theme;