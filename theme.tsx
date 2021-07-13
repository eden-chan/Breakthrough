import { extendTheme } from '@chakra-ui/react'

const config = {
  initalColorMode: "dark",
  useSystemColorMode: false,
  colors: {
    black: "#000",
    white: "#fff",
    primary: {
      main: "#5000CA", // Dark Blue
      dark: "#1A1A1A", // Black
    },
    secondary: {
      main: "#FEBE02" // Gold
    }
  }
}

const theme = extendTheme(config);

export default theme;