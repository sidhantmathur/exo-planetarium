import React, { useState, useEffect, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { showPlanet } from '../../api/planet'

import PlanetCardFull from './PlanetCardFull'

// import { useDisclosure } from '@chakra-ui/react'

const ShowPlanetFull = (props) => {
  const [planet, setPlanet] = useState(null)

  const { match, user } = props

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
    <Fragment>
      {planet ? (
        <PlanetCardFull
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
          starNum={planet.st_num}
          planNum={planet.pl_num}
          discM={planet.dis_met}
          radiusJ={planet.pl_radj}
          massJ={planet.pl_massj}
          spectrum={planet.spectype}
          stTemp={planet.st_temp}
          stRad={planet.st_rad}
          stMass={planet.st_mass}
          glat={planet.glat}
          glon={planet.glon}
          dist={planet.sy_dist}

          user={user}
        />
      ) : 'Loading...'}
    </Fragment>
  )
}

export default withRouter(ShowPlanetFull)
