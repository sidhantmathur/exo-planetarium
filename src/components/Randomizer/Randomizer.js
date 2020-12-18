import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { randPlanet } from '../../api/planet'
import Card from 'react-bootstrap/Card'

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

  return (
    <div>
      {planet ? (
        <div>
          <Card key={planet._id} className="mb-2 mt-2" style={{ width: '100%' }}>
            <Card.Body>
              <Card.Title>
                {planet.name}
              </Card.Title>
              <Card.Text>
                {planet.orbit}
                {planet.temp}
                {planet.discovered}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ) : 'Loading...'}
    </div>
  )
}

export default withRouter(RandomPlanet)
