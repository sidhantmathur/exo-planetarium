import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import DarkModeButton from '../DarkMode/DarkModeButton'

import { Link, HStack, Heading } from '@chakra-ui/react'

const authenticatedOptions = (
  <Fragment>
    {/*
    <Link href="#change-password">Change Password</Link>
    <Link href="#sign-out">Sign Out</Link>
    */}
    <Link href="#index-favs">Saved</Link>
    <Link href="#user">User</Link>

  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Link href="#sign-up">Sign Up</Link>
    <Link href="#sign-in">Sign In</Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    {/* <Link href="#/">Home</Link> */}
    <Link href="#search">Search</Link>
    <Link href="#random">Random</Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg="primary" variant="dark" expand="md">
    <Link href="#">
      <Heading size="md" fontWeight="normal">
      Exo-Planetarium
      </Heading>
    </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <HStack spacing="15px">
          {/* { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>} */}
          { alwaysOptions }
          { user ? authenticatedOptions : unauthenticatedOptions }
          <DarkModeButton />
        </HStack>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
