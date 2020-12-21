import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
// import { showFav, deleteFav } from '../../api/favs'
import { showFav } from '../../../api/fav'

import Card from 'react-bootstrap/Card'

import ShowPlanetInline from '../../ShowPlanet/ShowPlanetInline'

const ShowFav = (props) => {
  const [fav, setFav] = useState(null)

  const { user, msgAlert, match } = props

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

  // const handleDelete = () => {
  //   deleteFav(user, match.params.favId)
  //     .then(() => {
  //       msgAlert({
  //         heading: 'Fav Deleted',
  //         message: 'Back to the list of favs',
  //         variant: 'success'
  //       })
  //     })
  //     .then(() => history.push('/index-favs'))
  //     .catch(err => {
  //       msgAlert({
  //         heading: 'Deletion Failed',
  //         message: 'Something went wrong: ' + err.message,
  //         variant: 'danger'
  //       })
  //     })
  // }

  return (
    <div>
      {fav ? (
        <div>
          <Card key={fav._id} className="Card">
            <Card.Body>
              <Card.Text>
                {fav.title}
                {fav.name}
              </Card.Text>
            </Card.Body>
          </Card>
          <ShowPlanetInline
            user={user}
            match={match}
            planetId={fav.name}
          />
        </div>
      ) : 'Loading...'}
    </div>
  )
}

export default withRouter(ShowFav)
