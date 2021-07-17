import { ChakraProvider } from '@chakra-ui/react';
import Page from '../components/Page'
import theme from '../theme'
import 'tailwindcss/tailwind.css'

// Chakra-UI Global Extending Theme Colours


function MyApp({ Component, pageProps }) {
  
  return (
    <ChakraProvider theme={theme}>
      <Page>
      <Component {...pageProps} />
      </Page>
    </ChakraProvider>
  )


}

export default MyApp
