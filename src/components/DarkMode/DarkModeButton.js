import React from 'react'

import { Button, DarkMode, useColorMode } from '@chakra-ui/react'

const DarkModeButton = (props) => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <DarkMode>
      <Button variant="outline" colorScheme="black" onClick={toggleColorMode}>
      Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </DarkMode>
  )
}

export default (DarkModeButton)
