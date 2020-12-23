import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
// import Button from 'react-bootstrap/Button'

import { Button, Box, Link, Heading, SimpleGrid } from '@chakra-ui/react'

import { v4 as uuid } from 'uuid'

class User extends Component {
  constructor () {
    super()

    this.state = {
    }
  }

  clearUser = () => this.setState({ user: null })

  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return { msgAlerts: [...state.msgAlerts, { heading, message, variant, id }] }
    })
  }

  render () {
    const { user } = this.props

    return (
      <Fragment>
        <Heading size="xl">{user.email}&apos;s Settings</Heading>

        <SimpleGrid columns="3">
          <Box my={3}>
            <Heading size="md" mb={3}>Planets</Heading>
            <Link href='#index-favs'>
              <Button size="md" colorScheme="teal" variant="solid">Saved Planets</Button>{' '}
            </Link>
            <Link href='#planets-index'>
              <Button size="md" colorScheme="blue" variant="solid">All Planets</Button>{' '}
            </Link>
          </Box>
          <Box my={3}>
            <Heading size="md" mb={3}>Account</Heading>
            <Link href='#sign-out'>
              <Button size="md" colorScheme="red" variant="solid">Sign Out</Button>{' '}
            </Link>
            <Link href='#change-password'>
              <Button size="md" colorScheme="yellow" variant="solid">Change Password</Button>{' '}
            </Link>
          </Box>
          <Box my={3}>
            <Heading size="md" mb={3}>Danger Zone</Heading>
            <Link href='#delete-all-favs'>
              <Button size="md" colorScheme="red" variant="solid">Delete All Saved Planets</Button>{' '}
            </Link>
          </Box>
        </SimpleGrid>
      </Fragment>
    )
  }
}

export default withRouter(User)
