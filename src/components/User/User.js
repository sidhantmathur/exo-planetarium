import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

import { v4 as uuid } from 'uuid'

class User extends Component {
  constructor () {
    super()

    this.state = {
    }
  }

  clearUser = () => this.setState({ user: null })

  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return { msgAlerts: [...state.msgAlerts, { heading, message, variant, id }] }
    })
  }

  render () {
    const { user } = this.props
    return (
      <Fragment>
        <h1>{user.email}&apos;s Settings</h1>
        <Button variant="info" href='#index-favs'>See Fav Planets</Button>{' '}
        <Button variant="warning" href='#change-password'>Change Password</Button>{' '}
        <Button variant="danger" href='#sign-out'>Sign Out</Button>{' '}
        <Button variant="danger" href='#delete-all-favs'>Delete All Favourites</Button>{' '}
        <Button variant="info" href='#planets-index'>See All Planets</Button>
      </Fragment>
    )
  }
}

export default withRouter(User)
