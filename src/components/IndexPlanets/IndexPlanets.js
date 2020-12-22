import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { indexPlanets } from '../../api/planet'
import messages from '../Util/AutoDismissAlert/messages'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardColumns from 'react-bootstrap/CardColumns'

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
    const { user } = this.props
    let planetJsx
    if (!this.state.planets) {
      planetJsx = 'Loading...'
    } else if (this.state.planets.length === 0) {
      planetJsx = 'No planets to display :('
    } else if (!user) {
      planetJsx = 'Log In to Planet Planets'
    } else {
      console.log(this.state.planets)
      planetJsx = this.state.planets.map(planet => (

        <Card key={planet._id} className="Card">
          <Card.Body>
            <Card.Text>
              {planet.title}
              {planet.name}
            </Card.Text>
            <Button className="Button" variant="outline-info" href={'#planets/' + planet._id}>See More</Button>
          </Card.Body>
        </Card>
      ))
    }

    return (
      <div>
        <h1 className="display-2 text-dark">All Planets</h1>
        <CardColumns>
          {planetJsx}
        </CardColumns>

      </div>
    )
  }
}

export default withRouter(IndexPlanets)