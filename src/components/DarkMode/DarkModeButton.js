import React from 'react'

import { IconButton, DarkMode, useColorMode, useColorModeValue } from '@chakra-ui/react'

import { FaMoon, FaSun } from 'react-icons/fa'

const DarkModeButton = (props) => {
  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  return (
    <DarkMode>
      <IconButton
        size="md"
        fontSize="lg"
        aria-label={`Switch to ${text} mode`}
        variant="ghost"
        color="current"
        marginLeft="2"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        {...props}
      />
    </DarkMode>
  )
}

export default (DarkModeButton)
