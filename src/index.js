import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

import App from './App'
import { HashRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

const appJsx = (
  <ChakraProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </ChakraProvider>
)

ReactDOM.render(appJsx, document.getElementById('root'))
