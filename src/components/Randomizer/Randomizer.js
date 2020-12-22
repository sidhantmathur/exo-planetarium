import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { randPlanet } from '../../api/planet'
// import { createFav } from '../../api/fav'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CreateFav from '../Favs/CreateFav/CreateFav'
import PlanetCard from '../ShowPlanet/PlanetCard'

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
          <PlanetCard
            id={planet._id}
            name={planet.pl_name}
            orbit={planet.pl_orb}
            orbitPeriod={planet.pl_orbper}
            temp={planet.pl_temp}
            radiusE={planet.pl_rade}
            massE={planet.pl_masse}
            discovered={planet.dis_year}
            facility={planet.dic_fac}
            locale={planet.dis_loc}
            habit={planet.habit}
          />
          <Card>
            <Button onClick={randomize}>Randomize</Button>
            <Button className="Button" variant="outline-info" href={'#planets/' + planet._id}>See More</Button>
            {(user) ? (
              <CreateFav
                user={user}
                plName={planet.pl_name}
                plId={planet._id}
              />
            ) : ''}
          </Card>
        </div>
      ) : 'Loading...'}
    </div>
  )
}

export default withRouter(RandomPlanet)
