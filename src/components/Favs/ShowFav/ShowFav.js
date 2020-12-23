import React, { useState, useEffect, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { showFav, deleteFav } from '../../../api/fav'

import { Box, Button, Link, Heading } from '@chakra-ui/react'

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
        <Fragment>
          <Box><Heading size="lg">{fav.title}</Heading></Box>
          <Box key={fav._id}>
            <ShowPlanetInline
              user={user}
              match={match}
              planetId={fav.name}
            />
            <Box>
              <Link href={'#favs-update/' + fav._id}>
                <Button variant="solid" colorScheme="yellow" href={'#favs-update/' + fav._id}>Update Fav</Button>{' '}
              </Link>
              <Button variant="solid" colorScheme="red" onClick={handleDelete}>Delete Fav</Button>{' '}
              <Link href={'#planets/' + fav.name}>
                <Button variant="outline" colorScheme="blue">See More</Button>{' '}
              </Link>
            </Box>
          </Box>
        </Fragment>
      ) : 'Loading...'}
    </div>
  )
}

export default withRouter(ShowFav)
