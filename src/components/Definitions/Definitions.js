import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import { Box, Table, Thead, Tbody, Tr, Th, Td, TableCaption,
  Heading, Divider, Link, Button } from '@chakra-ui/react'

class PlanetCardFull extends Component {
  constructor () {
    super()

    this.state = {
      planet: ''
    }
  }

  render () {
    return (
      <Fragment>
        <Box mb={5} mt={5}>
          <Heading fontSize="3xl">Column Definitions</Heading>
          <Box>
            <Table variant="striped">
              <TableCaption>Column Definitions</TableCaption>
              <Thead>
                <Tr>
                  <Th>Info Field</Th>
                  <Th>Units</Th>
                  <Td>Definition</Td>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Planet Name</Td>
                  <Td>N/A</Td>
                  <Td>Planet name most commonly used in the literature</Td>
                </Tr>
                <Tr>
                  <Td>Habitability</Td>
                  <Td>N/A</Td>
                  <Td>Planets likely to be habitable by humans</Td>
                </Tr>
                <Tr>
                  <Td>Discovery Facility</Td>
                  <Td>N/A</Td>
                  <Td>Name of facility of planet discovery observations</Td>
                </Tr>
                <Tr>
                  <Td>Discovery Locale</Td>
                  <Td>N/A</Td>
                  <Td>Location of observation of planet discovery (Ground or Space)</Td>
                </Tr>
                <Tr>
                  <Td>Discovery Method</Td>
                  <Td>N/A</Td>
                  <Td>Method by which the planet was first identified</Td>
                </Tr>
                <Tr>
                  <Td>Spectral Type</Td>
                  <Td>N/A</Td>
                  <Td>Classification of the star based on their spectral characteristics following the Morgan-Keenan system</Td>
                </Tr>
                <Tr>
                  <Td>Stars in System</Td>
                  <Td>N/A</Td>
                  <Td>Number of stars in the planetary system</Td>
                </Tr>
                <Tr>
                  <Td>Planets in System</Td>
                  <Td>N/A</Td>
                  <Td>Number of planets in the planetary system</Td>
                </Tr>
                <Tr>
                  <Td>Discovery Year</Td>
                  <Td>N/A</Td>
                  <Td>Year the planet was discovered</Td>
                </Tr>
                <Tr>
                  <Td>Orbit</Td>
                  <Td>AUs</Td>
                  <Td>The longest radius of an elliptic orbit, or, for exoplanets detected via gravitational microlensing or direct imaging, the projected separation in the plane of the sky</Td>
                </Tr>
                <Tr>
                  <Td>Orbit Period</Td>
                  <Td>Days</Td>
                  <Td>Time the planet takes to make a complete orbit around the host star or system</Td>
                </Tr>
                <Tr>
                  <Td>Temperature</Td>
                  <Td>K</Td>
                  <Td>The equilibrium temperature of the planet as modeled by a black body heated only by its host star, or for directly imaged planets, the effective temperature of the planet required to match the measured luminosity if the planet were a black body.</Td>
                </Tr>
                <Tr>
                  <Td>Radius</Td>
                  <Td>Earths</Td>
                  <Td>Length of a line segment from the center of the planet to its surface, measured in units of radius of the Earth</Td>
                </Tr>
                <Tr>
                  <Td>Mass</Td>
                  <Td>Earths</Td>
                  <Td>Amount of matter contained in the planet, measured in units of masses of the Earth</Td>
                </Tr>
                <Tr>
                  <Td>Radius</Td>
                  <Td>Jupiters</Td>
                  <Td>Length of a line segment from the center of the planet to its surface, measured in units of radius of Jupiter</Td>
                </Tr>
                <Tr>
                  <Td>Mass</Td>
                  <Td>Jupiters</Td>
                  <Td>Amount of matter contained in the planet, measured in units of masses of Jupiter</Td>
                </Tr>
                <Tr>
                  <Td>Stellar Temperature</Td>
                  <Td>K</Td>
                  <Td>Temperature of the star as modeled by a black body emitting the same total amount of electromagnetic radiation</Td>
                </Tr>
                <Tr>
                  <Td>Stellar Radius</Td>
                  <Td>Suns</Td>
                  <Td>Length of a line segment from the center of the star to its surface, measured in units of radius of the Sun</Td>
                </Tr>
                <Tr>
                  <Td>Stellar Mass</Td>
                  <Td>Suns</Td>
                  <Td>Amount of matter contained in the star, measured in units of masses of the Sun</Td>
                </Tr>
                <Tr>
                  <Td>Galactic Latitude</Td>
                  <Td>Degrees</Td>
                  <Td>Galactic latitude of the planetary system in units of decimal degrees</Td>
                </Tr>
                <Tr>
                  <Td>Galactic Longitude</Td>
                  <Td>Degrees</Td>
                  <Td>Galactic longitude of the planetary system in units of decimal degrees</Td>
                </Tr>
                <Tr>
                  <Td>Distance From Solar System</Td>
                  <Td>Parsecs</Td>
                  <Td>Distance to the planetary system in units of parsecs</Td>
                </Tr>
              </Tbody>
            </Table>
            <Divider />
            <Heading mb={3}>Back To</Heading>
            <Box>
              <Link href='#random'>
                <Button size="md" colorScheme="purple" variant="outline">Randomizer</Button>{' '}
              </Link>
              <Link href='#search'>
                <Button size="md" colorScheme="blue" variant="outline">Search</Button>{' '}
              </Link>
            </Box>
          </Box>
        </Box>
      </Fragment>
    )
  }
}

export default withRouter(PlanetCardFull)
