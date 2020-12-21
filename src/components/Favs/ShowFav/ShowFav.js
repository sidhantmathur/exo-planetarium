import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
// import { showFav, deleteFav } from '../../api/favs'
import { showFav } from '../../../api/fav'
import { showPlanet } from '../../../api/planet'

import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

const ShowFav = (props) => {
  // const [fav, setFav] = useState(null)
  const [fav, setFav] = useState(null)
  const [planet, setPlanet] = useState(null)

  const { user, msgAlert, match } = props

  useEffect(() => {
    showFav(user, match.params.favId)
      .then(res => {
        // console.log(res)
        setFav(res.data.fav)
      })
      .then(favChecker())
      // .then(console.log(fav))
      // .then(
      //   showPlanet(user, fav.name)
      //     .then(res => {
      //       console.log(res)
      //       setPlanet(res.data.planet)
      //     })
      // )
      .then(
        console.log(fav)
      )
      .catch(err => {
        msgAlert({
          heading: 'Show Fav Failed',
          message: 'Error code: ' + err.message,
          variant: 'danger'
        })
      })
  }, [])

  function favChecker () {
    if (fav) {
      console.log(fav, fav.name)
      showPlanet(fav.name)
        .then(res => {
          console.log(res)
          setPlanet(res.data.planet)
        })
    } else {
      console.log('nothing yet')
    }
  }

  if (fav) {
    console.log(fav)
    favChecker()
  }

  // useEffect(() => {
  //   if (fav) {
  //     console.log(fav)
  //     showPlanet(user, fav.name)
  //       .then(res => {
  //         console.log(res)
  //         setPlanet(res.data.planet)
  //       })
  //       .catch(err => {
  //         msgAlert({
  //           heading: 'Show Planet Failed',
  //           message: 'Error code: ' + err.message,
  //           variant: 'danger'
  //         })
  //       })
  //   } else {
  //     console.log(fav)
  //   }
  // }, [])

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

              {planet ? (
                <div>
                  <Card.Title>
                    {planet.name}
                  </Card.Title>
                  <ListGroup variant="flush">
                    <ListGroupItem>Orbit period:{}</ListGroupItem>
                    <ListGroupItem>Orbit:{planet.orbit}</ListGroupItem>
                    <ListGroupItem>Orbit period:{planet.orbit_period}</ListGroupItem>
                    <ListGroupItem>temp:{planet.temp}</ListGroupItem>
                    <ListGroupItem>radius: {planet.radius_e + ' earths'}</ListGroupItem>
                    <ListGroupItem>mass: {planet.mass_e + ' earths'}</ListGroupItem>
                    <ListGroupItem>density: {planet.density + 'g/cm cubed'}</ListGroupItem>
                    <ListGroupItem>discovered:{planet.discovered}</ListGroupItem>
                  </ListGroup>
                </div>
              ) : 'Loading...'}
            </Card.Body>
            <Card.Footer>Updated on {fav.createdAt.slice(0, -14)}</Card.Footer>
          </Card>
        </div>
      ) : 'Loading...'}
    </div>
  )
}

export default withRouter(ShowFav)
