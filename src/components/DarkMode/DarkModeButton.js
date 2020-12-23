import React from 'react'

import { Button, DarkMode, useColorMode } from '@chakra-ui/react'

const DarkModeButton = (props) => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <DarkMode>
      <Button variant="outline" colorScheme="white" onClick={toggleColorMode}>
      Toggle {colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}
      </Button>
    </DarkMode>
  )
}

export default (DarkModeButton)
