import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { randPlanet } from '../../api/planet'
// import { createFav } from '../../api/fav'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Button from 'react-bootstrap/Button'
import CreateFav from '../Favs/CreateFav/CreateFav'
import PlanetGraph from '../PlanetGraph/PlanetGraph'

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
        <div className='row'>
          <div className='col-6'>
            <Link to="/sign-in">Sign In</Link>
            <Card key={planet._id} className="mb-2 mt-2" style={{ width: '500px' }}>
              <Card.Body>
                <Card.Title>
                  {planet.name}
                </Card.Title>
                <ListGroup variant="flush">
                  <ListGroupItem>Facility:{planet.dic_fac}</ListGroupItem>
                  <ListGroupItem>Locale:{planet.dis_loc}</ListGroupItem>
                  <ListGroupItem>Orbit:{planet.pl_orb}</ListGroupItem>
                  <ListGroupItem>Orbit period:{planet.pl_orbper}</ListGroupItem>
                  <ListGroupItem>temp:{planet.temp}</ListGroupItem>
                  <ListGroupItem>radius: {planet.pl_rade + ' earths'}</ListGroupItem>
                  <ListGroupItem>mass: {planet.pl_masse + ' earths'}</ListGroupItem>
                  <ListGroupItem>discovered:{planet.dis_year}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Button onClick={randomize}>Randomize</Button>
                  <Button className="Button" variant="outline-info" href={'#planets/' + planet._id}>See More</Button>
                </Card.Body>
                {(user) ? (
                  <CreateFav
                    user={user}
                    plName={planet.pl_name}
                    plId={planet._id}
                  />
                ) : ''}
              </Card.Body>
            </Card>
          </div>
          <div className='col-6'>
            <PlanetGraph
              name={planet.pl_name}
              orbit={planet.pl_orb}
              orbitPeriod={planet.pl_orbper}
              temp={planet.temp}
              radiusE={planet.pl_rade}
              massE={planet.pl_masse}
              discovered={planet.dis_year}
            />
          </div>
        </div>
      ) : 'Loading...'}
    </div>
  )
}

export default withRouter(RandomPlanet)
