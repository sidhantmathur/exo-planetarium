import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// import Card from 'react-bootstrap/Card'
// import ListGroup from 'react-bootstrap/ListGroup'
// import ListGroupItem from 'react-bootstrap/ListGroupItem'

import { SimpleGrid, Box, Table, Thead, Tbody, Tr, Th, Td, TableCaption, Heading } from '@chakra-ui/react'

import PlanetGraph from '../PlanetGraph/PlanetGraph'

class PlanetCard extends Component {
  constructor () {
    super()

    this.state = {
      planet: ''
    }
  }

  render () {
    const { id, name, orbit, orbitPeriod, temp, radiusE, massE, discovered, facility, locale } = this.props

    return (
      <SimpleGrid minChildWidth="120px" spacing="40px">
        <Box id={id}>
          <Heading fontSize="3xl">{name}</Heading>
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
                <Td>Facility</Td>
                <Td>{facility}</Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Td>Discovered</Td>
                <Td>{discovered}</Td>
                <Td>Year</Td>
              </Tr>
              <Tr>
                <Td>Locale</Td>
                <Td>{locale}</Td>
                <Td></Td>
              </Tr>
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
            </Tbody>
          </Table>

          {/* <Card.Body>
            <Card.Title>
              {name}
            </Card.Title>
            <ListGroup variant="flush">
              <ListGroupItem>Facility: {facility}</ListGroupItem>
              <ListGroupItem>Locale: {locale}</ListGroupItem>
              <ListGroupItem>Orbit: {orbit}</ListGroupItem>
              <ListGroupItem>Orbit period: {orbitPeriod}</ListGroupItem>
              <ListGroupItem>temp: {temp}</ListGroupItem>
              <ListGroupItem>radius: {radiusE + ' earths'}</ListGroupItem>
              <ListGroupItem>mass: {massE + ' earths'}</ListGroupItem>
              <ListGroupItem>discovered: {discovered}</ListGroupItem>
            </ListGroup>
          </Card.Body> */}
        </Box>
        <Box>
          <PlanetGraph
            name={name}
            orbit={orbit}
            orbitPeriod={orbitPeriod}
            temp={temp}
            radiusE={radiusE}
            massE={massE}
            discovered={discovered}
          />
        </Box>
      </SimpleGrid>
    )
  }
}

export default withRouter(PlanetCard)
