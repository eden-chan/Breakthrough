import { Box } from '@chakra-ui/react';
import Link from 'next/link'
import { useColorMode, Button } from '@chakra-ui/react'

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box className="flex flex-col">
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
      <p className="text-center">Insert Landing Page Here</p> 
      <Link href="/trainer">
        <a>Trainer</a>
      </Link>
    </Box>
  )
}
