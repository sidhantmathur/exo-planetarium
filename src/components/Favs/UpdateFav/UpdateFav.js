import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { showFav, updateFav } from '../../../api/fav'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const UpdateFav = (props) => {
  const [fav, setFav] = useState({ favTitle: '' })
  const [updated, setUpdated] = useState(false)
  const { user, msgAlert, match, history } = props

  useEffect(() => {
    console.log('you reached update comp')
    // show request
    showFav(user, match.params.favId)
      .then(res => setFav(res.data.fav))
      // .then(() => msgAlert({
      //   heading: 'Fav Show Success',
      //   message: 'Check it out',
      //   variant: 'success'
      // }))
      .catch(err => msgAlert({
        heading: 'Fav Show failed',
        message: 'Error: ' + err.message,
        variant: 'danger'
      }))
  }, [])

  const handleChange = (event) => {
    const updatedField = { [event.target.name]: event.target.value }
    setFav(oldFav => {
      const updatedFav = { ...oldFav, ...updatedField }
      return updatedFav
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    updateFav(user, fav, match.params.favId)
      .then(() => setUpdated(true))
      .then(() => msgAlert({
        heading: 'Update successful',
        message: 'Nice work',
        variant: 'success'
      }))
      .then(() => history.push('/index-favs'))
      .catch(err => msgAlert({
        heading: 'Update failed',
        message: 'Error Code: ' + err.message,
        variant: 'danger'
      }))
  }

  if (updated) {
    return (
      <Redirect to={`/favs/${match.params.favId}`} />
    )
  }

  return (
    <React.Fragment>
      <h1>Update Fav Information</h1>
      <Form onSubmit={handleSubmit}>

        <Form.Group controlId="fav">
          <Form.Label>Fav Title</Form.Label>
          <Form.Control
            placeholder="Fav"
            value={fav.favTitle}
            onChange={handleChange}
            name="title"
          />
        </Form.Group>

        <Button variant='primary' type="submit">Update Fav</Button>
      </Form>
    </React.Fragment>
  )
}

export default UpdateFav
