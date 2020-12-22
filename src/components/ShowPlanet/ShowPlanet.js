import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { showPlanet } from '../../api/planet'

import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

// import Chart from 'chart.js'

import PlanetGraph from '../PlanetGraph/PlanetGraph'

const ShowPlanet = (props) => {
  const [planet, setPlanet] = useState(null)

  const { match } = props

  useEffect(() => {
    showPlanet(match.params.planetId)
      .then(res => {
        setPlanet(res.data.planet)
      })
      .catch(err => {
        console.log(err)
        // msgAlert({
        //   heading: 'Show Planet Failed',
        //   message: 'Error code: ' + err.message,
        //   variant: 'danger'
        // })
      })
  }, [])

  return (
    <div>
      {planet ? (
        <div>
          <Card key={planet._id} className="Card">
            <Card.Body>
              <Card.Title>
                {planet.pl_name}
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
            </Card.Body>
          </Card>
          <PlanetGraph
            name={planet.pl_name}
            orbit={planet.pl_orb}
            orbitPeriod={planet.pl_orbper}
            temp={planet.temp}
            radiusE={planet.pl_rade}
            massE={planet.pl_masse}
            discovered={planet.dis_year}
          />
          {/* <canvas
            id='planetChart'
            ref={this.chartRef}
          /> */}
        </div>
      ) : 'Loading...'}
    </div>
  )
}

export default withRouter(ShowPlanet)
