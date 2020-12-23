import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import {
  Box,
  Heading,
  Button,
  Link,
  Image,
  Center,
  SimpleGrid,
  Flex
} from '@chakra-ui/react'

class LandingPage extends Component {
  constructor () {
    super()

    this.state = {
      user: ''
    }
  }

  render () {
    const { user } = this.props

    return (
      <Fragment>
        <Center h="75vh">
          <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={10}>
            <Flex align="center" justify="center" direction="column">
              <Heading size="3xl" fontWeight="bold">Exoplanets</Heading>
              <Heading size="lg" fontWeight="normal" mt={3}>Check out our neighbours!</Heading>
              <Box mt={5}>
                <Link href='#search'>
                  <Button size="lg" colorScheme="blue" variant="outline">Search</Button>{' '}
                </Link>
                <Link href='#random'>
                  <Button size="lg" colorScheme="purple" variant="outline">Random</Button>{' '}
                </Link>
              </Box>
              {(!user) ? (
                <Box my={3}>
                  <Link href='#sign-up'>
                    <Button size="lg" colorScheme="green" variant="solid">Create an Account</Button>{' '}
                  </Link>
                </Box>
              ) : (
                <Box my={3}>
                  <Link href='#index-favs'>
                    <Button size="lg" colorScheme="teal" variant="solid">Saved Planets</Button>{' '}
                  </Link>
                </Box>
              )}
            </Flex>
            <Box>
              <Image src="https://images.unsplash.com/photo-1464802686167-b939a6910659?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2833&q=80" rounded="1rem" />
            </Box>
          </SimpleGrid>
        </Center>

        {/* <Flex
          align="center"
          justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
          direction={{ base: 'column-reverse', md: 'row' }}
          minH="75vh"
        >
          <Stack
            spacing={4}
            w={{ base: '80%', md: '40%' }}
          >
            <Heading
              size="xl"
              fontWeight="bold"
              color="primary.800"
            >
            Exo-Planetarium
            </Heading>
            <Heading
              size="md"
              fontWeight="normal"
            >
            View all the known exoplanets in the galaxy!
            </Heading>
            <Button size="md">
              Create your account now
            </Button>
          </Stack>
          <Box w={{ base: '100%', sm: '80%', md: '60%' }}>
            <Image src="https://cdn.spacetelescope.org/archives/images/screen/heic1209a.jpg" size="100%" rounded="1rem" shadow="2xl" />
          </Box>
        </Flex> */}
      </Fragment>
    )
  }
}

// LandingPage.propTypes = {
//   title: PropTypes.string,
//   subtitle: PropTypes.string,
//   image: PropTypes.string,
//   ctaText: PropTypes.string,
//   ctaLink: PropTypes.string
// }

LandingPage.defaultProps = {
  title: 'React landing page with Chakra UI',
  subtitle:
    'This is the subheader section where you describe the basic benefits of your product',
  image: 'https://source.unsplash.com/collection/404339/800x600',
  ctaText: 'Create your account now',
  ctaLink: '/signup'
}

export default withRouter(LandingPage)

// <Fragment>
//   <Flex
//     mt={5}
//     align="center"
//     justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
//     direction={{ base: 'column-reverse', md: 'row' }}
//     px={8}
//     mb={16}
//   >
//     <Box p="4" bg="red.400">
//       <Heading as="h1" size="2xl">
//         The Exo-Planetarium
//       </Heading>
//     </Box>
//     <Spacer />
//     <Box p="4" bg="green.400">
//       Image
//     </Box>
//   </Flex>
// </Fragment>
