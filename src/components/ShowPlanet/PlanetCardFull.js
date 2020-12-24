import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// import Card from 'react-bootstrap/Card'
// import ListGroup from 'react-bootstrap/ListGroup'
// import ListGroupItem from 'react-bootstrap/ListGroupItem'

// import { SimpleGrid, Box, Table, Thead, Tbody, Tr, Th, Td, TableCaption,
//   Heading, Badge, Button, Modal, ModalOverlay, ModalContent, ModalHeader,
//   ModalCloseButton, useDisclosure } from '@chakra-ui/react'

import { SimpleGrid, Box, Table, Thead, Tbody, Tr, Th, Td, TableCaption,
  Heading, Badge, Divider, Link, Button } from '@chakra-ui/react'

import PlanetGraph from '../PlanetGraph/PlanetGraph'
// import CreateFav from '../Favs/CreateFav/CreateFav'

class PlanetCardFull extends Component {
  constructor () {
    super()

    this.state = {
      planet: ''
    }
  }

  render () {
    const { id, name, orbit, orbitPeriod, temp,
      radiusE, massE, discovered, facility, locale, habit,
      starNum, planNum, discM, radiusJ, massJ,
      spectrum, stTemp, stRad, stMass, glat, glon, dist } = this.props
    // user, msgAlert } = this.props

    // const { isOpen, onOpen, onClose } = useDisclosure()

    return (
      <SimpleGrid columns={2} spacing={10}>
        <Box id={id}>
          {habit === 1 ? (<Badge colorScheme="green">Habitable</Badge>) : (<Badge colorScheme="red">UninHabitable</Badge>)}
          <Heading fontSize="3xl">{name}</Heading>
          <Box>
            <Table variant="striped">
              <Thead>
                <Tr>
                  <Th>Info Field</Th>
                  <Th>Data</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Discovery Facility</Td>
                  <Td>{facility}</Td>
                </Tr>
                <Tr>
                  <Td>Discovery Location</Td>
                  <Td>{locale}</Td>
                </Tr>
                <Tr>
                  <Td>Discovery Method</Td>
                  <Td>{discM}</Td>
                </Tr>
                <Tr>
                  <Td>Spectral Type</Td>
                  <Td>{spectrum}</Td>
                </Tr>
                <Tr>
                  <Td>Stars in System</Td>
                  <Td>{starNum}</Td>
                </Tr>
                <Tr>
                  <Td>Planets in System</Td>
                  <Td>{planNum}</Td>
                </Tr>
                <Tr>
                  <Td>Discovery Year</Td>
                  <Td>{discovered}</Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
          <PlanetGraph
            name={name}
            orbit={orbit}
            orbitPeriod={orbitPeriod}
            temp={temp}
            radiusE={radiusE}
            massE={massE}
            discovered={discovered}
            stRad={stRad}
            stMass={stMass}
          />

          {/* {(user) ? (
            <Fragment>
              <Button onClick={onOpen}>Save Planet</Button>

              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Save Planet</ModalHeader>
                  <ModalCloseButton />
                  <CreateFav
                    user={user}
                    plName={name}
                    plId={id}
                    msgAlert={msgAlert}
                    close={onClose}
                  />
                </ModalContent>
              </Modal>
            </Fragment>
          ) : ''} */}

        </Box>

        <Box>
          <Table variant="striped">
            <TableCaption>{name}</TableCaption>
            <Thead>
              <Tr>
                <Th>Info Field</Th>
                <Th>Data</Th>
                <Th>Units</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Orbit</Td>
                <Td>{orbit}</Td>
                <Td>AUs</Td>
              </Tr>
              <Tr>
                <Td>Orbit Period</Td>
                <Td>{orbitPeriod}</Td>
                <Td>Days</Td>
              </Tr>
              <Tr>
                <Td>Temperature</Td>
                <Td>{temp}</Td>
                <Td>K</Td>
              </Tr>
              <Tr>
                <Td>Radius</Td>
                <Td>{radiusE}</Td>
                <Td>Earths</Td>
              </Tr>
              <Tr>
                <Td>Mass</Td>
                <Td>{massE}</Td>
                <Td>Earths</Td>
              </Tr>
              <Tr>
                <Td>Radius</Td>
                <Td>{radiusJ}</Td>
                <Td>Jupiters</Td>
              </Tr>
              <Tr>
                <Td>Mass</Td>
                <Td>{massJ}</Td>
                <Td>Jupiters</Td>
              </Tr>
              <Tr>
                <Td>Stellar Temperature</Td>
                <Td>{stTemp}</Td>
                <Td>K</Td>
              </Tr>
              <Tr>
                <Td>Stellar Radius</Td>
                <Td>{stRad}</Td>
                <Td>Suns</Td>
              </Tr>
              <Tr>
                <Td>Stellar Mass</Td>
                <Td>{stMass}</Td>
                <Td>Suns</Td>
              </Tr>
              <Tr>
                <Td>Galactic Latitude</Td>
                <Td>{glat}</Td>
                <Td>Degrees</Td>
              </Tr>
              <Tr>
                <Td>Galactic Longitude</Td>
                <Td>{glon}</Td>
                <Td>Degrees</Td>
              </Tr>
              <Tr>
                <Td>Distance From Solar System</Td>
                <Td>{dist}</Td>
                <Td>Parsecs</Td>
              </Tr>
            </Tbody>
          </Table>
          <Divider />
          <Heading mb={3}>More Options</Heading>
          <Box mb={3}>
            <Link href='#definitions'>
              <Button size="md" colorScheme="teal" variant="solid">Column Definitions</Button>{' '}
            </Link>
          </Box>
          <Box>
            <Link href='#index-favs'>
              <Button size="md" colorScheme="green" variant="outline">Saved Planets</Button>{' '}
            </Link>
            <Link href='#random'>
              <Button size="md" colorScheme="purple" variant="outline">Randomizer</Button>{' '}
            </Link>
            <Link href='#search'>
              <Button size="md" colorScheme="blue" variant="outline">Search</Button>{' '}
            </Link>
          </Box>
        </Box>
      </SimpleGrid>
    )
  }
}

export default withRouter(PlanetCardFull)
