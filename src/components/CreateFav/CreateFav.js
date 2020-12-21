import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { createFav } from '../../api/fav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const CreateFav = (props) => {
  const [planet, name] = useState([])
  const { user, msgAlert } = props

  function favourite () {
    console.log(user, name)
    createFav(user, name, planet.title)
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
  }

  return (
    <div>
      {planet ? (
        <Form onSubmit={favourite}>
          <Form.Control
            readOnly
            value='asdfasdf'
            name="title"
          />
          <Form.Control
            readOnly
            value={name}
            name="name"
          />
          <Button type="submit">Favourite</Button>
        </Form>
      ) : 'Loading...'}
    </div>
  )
}

export default withRouter(CreateFav)
