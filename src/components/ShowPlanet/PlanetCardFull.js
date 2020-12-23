import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// import Card from 'react-bootstrap/Card'
// import ListGroup from 'react-bootstrap/ListGroup'
// import ListGroupItem from 'react-bootstrap/ListGroupItem'

import { SimpleGrid, Box, Table, Thead, Tbody, Tr, Th, Td, TableCaption, Heading, Badge, Stat, StatLabel, StatNumber, StatHelpText } from '@chakra-ui/react'

import PlanetGraph from '../PlanetGraph/PlanetGraph'

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
          />

          <Stat>
            <StatLabel>Discovered from {locale} at</StatLabel>
            <StatNumber>{facility}</StatNumber>
            <StatHelpText>{discovered}</StatHelpText>
          </Stat>

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
                <Td>Stellar Mas</Td>
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
        </Box>
      </SimpleGrid>
    )
  }
}

export default withRouter(PlanetCardFull)
