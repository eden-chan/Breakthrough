import { extendTheme } from '@chakra-ui/react' 

const config = {
    initalColorMode: "dark",
    useSystemColorMode: false,
    colors: {
      primary: {
        main: "#5000CA", 
        dark: "#1A1A1A",
      },
      secondary: {
        main: "#FEBE02"
      }
       
        
    }
  }
  
const theme = extendTheme( config );

export default theme;