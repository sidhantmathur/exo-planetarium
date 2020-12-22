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
        <Box>
          <Box key={fav._id}>
            <Link href={'#favs-update/' + fav._id} color="teal.500">
              <Button size="md" colorScheme="teal" variant="solid" href={'#favs-update/' + fav._id}>Update Fav</Button>
            </Link>
            <Button size="md" colorScheme="red" variant="solid" onClick={handleDelete}>Delete Fav</Button>
          </Box>
          <ShowPlanetInline
            user={user}
            match={match}
            planetId={fav.name}
          />
        </Box>
      ) : 'Loading...'}
    </div>
  )
}

export default withRouter(ShowFav)
