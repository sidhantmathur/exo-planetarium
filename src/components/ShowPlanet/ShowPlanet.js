import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { showPlanet } from '../../api/planet'

import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

const ShowPlanet = (props) => {
  const [planet, setPlanet] = useState(null)

  const { msgAlert, match } = props

  useEffect(() => {
    showPlanet(match.params.planetId)
      .then(res => {
        setPlanet(res.data.planet)
      })
      .catch(err => {
        msgAlert({
          heading: 'Show Planet Failed',
          message: 'Error code: ' + err.message,
          variant: 'danger'
        })
      })
  }, [])

  return (
    <div>
      {planet ? (
        <div>
          <Card key={planet._id} className="Card">
            <Card.Body>
              <Card.Title>
                {planet.name}
              </Card.Title>
              <ListGroup variant="flush">
                <ListGroupItem>Orbit period:{}</ListGroupItem>
                <ListGroupItem>Orbit:{planet.orbit}</ListGroupItem>
                <ListGroupItem>Orbit period:{planet.orbit_period}</ListGroupItem>
                <ListGroupItem>temp:{planet.temp}</ListGroupItem>
                <ListGroupItem>radius: {planet.radius_e + ' earths'}</ListGroupItem>
                <ListGroupItem>mass: {planet.mass_e + ' earths'}</ListGroupItem>
                <ListGroupItem>density: {planet.density + 'g/cm cubed'}</ListGroupItem>
                <ListGroupItem>discovered:{planet.discovered}</ListGroupItem>
              </ListGroup>
            </Card.Body>
          </Card>
        </div>
      ) : 'Loading...'}
    </div>
  )
}

export default withRouter(ShowPlanet)
