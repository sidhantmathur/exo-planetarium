import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { showFav, deleteFav } from '../../../api/fav'

import { Box, Button, Link } from '@chakra-ui/react'

import ShowPlanetInline from '../../ShowPlanet/ShowPlanetInline'

const ShowFav = (props) => {
  const [fav, setFav] = useState(null)

  const { user, msgAlert, match, history } = props

  useEffect(() => {
    showFav(user, match.params.favId)
      .then(res => {
        setFav(res.data.fav)
      })
      .catch(err => {
        msgAlert({
          heading: 'Show Fav Failed',
          message: 'Error code: ' + err.message,
          variant: 'danger'
        })
      })
  }, [])

  const handleDelete = () => {
    deleteFav(user, match.params.favId)
      .then(() => {
        msgAlert({
          heading: 'Fav Deleted',
          message: 'Back to the list of favs',
          variant: 'success'
        })
      })
      .then(() => history.push('/index-favs'))
      .catch(err => {
        msgAlert({
          heading: 'Deletion Failed',
          message: 'Something went wrong: ' + err.message,
          variant: 'danger'
        })
      })
  }

  return (
    <div>
      {fav ? (
        <Box key={fav._id}>
          <ShowPlanetInline
            user={user}
            match={match}
            planetId={fav.name}
          />
          <Box>
            <Link href={'#favs-update/' + fav._id} color="blue">
              <Button variant="solid" href={'#favs-update/' + fav._id}>Update Fav</Button>{' '}
            </Link>
            <Button variant="solid" onClick={handleDelete}>Delete Fav</Button>{' '}
            <Link href={'#planets/' + fav.name} color="blue">
              <Button variant="outline">See More</Button>{' '}
            </Link>
          </Box>
        </Box>
      ) : 'Loading...'}
    </div>
  )
}

export default withRouter(ShowFav)
