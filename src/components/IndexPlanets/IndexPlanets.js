import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { indexPlanets } from '../../api/planet'
import messages from '../Util/AutoDismissAlert/messages'
// import CardColumns from 'react-bootstrap/CardColumns'

import { SimpleGrid, Box, Button, Heading, Link } from '@chakra-ui/react'

class IndexPlanets extends Component {
  constructor () {
    super()
    this.state = {
      planets: null
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  componentDidMount () {
    const { msgAlert, user } = this.props

    indexPlanets(user)
      .then(res => {
        this.setState({ planets: res.data.planets })
      })

      .catch(error => {
        msgAlert({
          heading: 'Index Planets Failed with error: ' + error.message,
          message: messages.indexPlanetsFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    // const { user } = this.props
    let planetJsx
    if (!this.state.planets) {
      planetJsx = 'Loading...'
    } else if (this.state.planets.length === 0) {
      planetJsx = 'No planets to display :('
    } else {
      // console.log(this.state.planets)
      planetJsx = this.state.planets.map(planet => (

        <Box key={planet._id} borderWidth="1px" borderRadius="lg">
          <Box p="4">
            <Box>
              <Heading size="md">
                {planet.pl_name}
              </Heading>
            </Box>
            <Box mt={2}>
              <Link href={'#planets/' + planet._id}><Button variant="solid" color="blue">See More</Button></Link>
            </Box>
          </Box>
        </Box>

      ))
    }

    // else if (!user) {
    //   planetJsx = 'Log In to Planet Planets'
    // }

    return (
      <div>
        <Heading>All Planets</Heading>
        <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing={5}>
          {planetJsx}
        </SimpleGrid>
      </div>
    )
  }
}

export default withRouter(IndexPlanets)
