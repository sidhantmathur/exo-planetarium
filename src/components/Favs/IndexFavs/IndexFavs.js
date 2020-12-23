import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { indexFavs } from '../../../api/fav'
import messages from '../../Util/AutoDismissAlert/messages'
// import Button from 'react-bootstrap/Button'
// import CardColumns from 'react-bootstrap/CardColumns'

import { Heading, Box, Button, SimpleGrid, Link } from '@chakra-ui/react'

class IndexFavs extends Component {
  constructor () {
    super()
    this.state = {
      favs: null
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  componentDidMount () {
    const { msgAlert, user } = this.props

    indexFavs(user)
      .then(res => {
        this.setState({ favs: res.data.favs })
      })

      .catch(error => {
        msgAlert({
          heading: 'Index Favs Failed with error: ' + error.message,
          message: messages.indexFavsFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { user } = this.props
    let favJsx
    if (!this.state.favs) {
      favJsx = 'Loading...'
    } else if (this.state.favs.length === 0) {
      favJsx = 'No favs to display :('
    } else if (!user) {
      favJsx = 'Log In to Fav Planets'
    } else {
      console.log(this.state.favs)
      favJsx = this.state.favs.map(fav => (
        <Box key={fav._id} borderWidth="1px" borderRadius="lg">
          <Box p="4">
            <Box>
              <Heading size="md">
                {fav.title}
              </Heading>
            </Box>
            <Box>Updated on {fav.createdAt.slice(0, -14)}</Box>
            <Link href={'#favs/' + fav._id}><Button variant="solid" color="blue">See More</Button></Link>
          </Box>
        </Box>
      ))
    }

    return (
      <div>
        <Heading mb={3} mt={3}>Saved Planets</Heading>
        <SimpleGrid columns={3} spacing={5}>
          {favJsx}
        </SimpleGrid>

      </div>
    )
  }
}

export default withRouter(IndexFavs)
