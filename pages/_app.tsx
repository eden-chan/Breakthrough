import { ChakraProvider } from "@chakra-ui/react";
import theme from '../theme'
import 'tailwindcss/tailwind.css'

// Chakra-UI Global Extending Theme Colours


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )


}

export default MyApp
