import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { randPlanet } from '../../api/planet'
// import { createFav } from '../../api/fav'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Button from 'react-bootstrap/Button'
import CreateFav from '../Favs/CreateFav/CreateFav'

const RandomPlanet = (props) => {
  const [planet, setPlanet] = useState(null)
  const { user, msgAlert, match } = props
  useEffect(() => {
    randPlanet(user, match.params.planetId)
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
      .catch(err => {
        msgAlert({
          heading: 'Deletion Failed',
          message: 'Something went wrong: ' + err.message,
          variant: 'danger'
        })
      })
  }, [])

  function randomize () {
    randPlanet(user, match.params.planetId)
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
      .catch(err => {
        msgAlert({
          heading: 'Deletion Failed',
          message: 'Something went wrong: ' + err.message,
          variant: 'danger'
        })
      })
    console.log(planet)
  }

  return (
    <div>
      {planet ? (
        <div>
          <Link to="/sign-in">Sign In</Link>
          <Card key={planet._id} className="mb-2 mt-2" style={{ width: '500px' }}>
            <Card.Body>
              <Card.Title>
                {planet.name}
              </Card.Title>
              <ListGroup variant="flush">
                <ListGroupItem>Orbit:{planet.orbit}</ListGroupItem>
                <ListGroupItem>Orbit period:{planet.orbit_period}</ListGroupItem>
                <ListGroupItem>temp:{planet.temp}</ListGroupItem>
                <ListGroupItem>radius: {planet.radius_e + ' earths'}</ListGroupItem>
                <ListGroupItem>mass: {planet.mass_e + ' earths'}</ListGroupItem>
                <ListGroupItem>density: {planet.density + 'g/cm cubed'}</ListGroupItem>
                <ListGroupItem>discovered:{planet.discovered}</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Button onClick={randomize}>Randomize</Button>
              </Card.Body>
              {(user) ? (
                <CreateFav
                  user={user}
                  plName={planet.name}
                  plId={planet._id}
                />
              ) : ''}
            </Card.Body>
          </Card>
        </div>
      ) : 'Loading...'}
    </div>
  )
}

export default withRouter(RandomPlanet)
