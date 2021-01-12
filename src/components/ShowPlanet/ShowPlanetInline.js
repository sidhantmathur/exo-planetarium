import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { showPlanet } from '../../api/planet'

import PlanetCard from './PlanetCard'

const ShowPlanet = (props) => {
  const [planet, setPlanet] = useState(null)

  const { planetId } = props

  useEffect(() => {
    showPlanet(planetId)
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
      ) : 'Loading...'}
    </div>
  )
}

export default withRouter(ShowPlanet)
