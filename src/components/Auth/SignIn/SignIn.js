import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signIn } from '../../../api/auth'
import messages from '../../Util/AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'

import { Button, FormLabel, Heading, Link } from '@chakra-ui/react'

import GuestSignIn from './GuestSignIn'

import '../authStyles.scss'

class SignIn extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignIn = event => {
    event.preventDefault()

    const { msgAlert, history, setUser } = this.props

    signIn(this.state)
      .then(res => setUser(res.data.user))
      .then(() => msgAlert({
        heading: 'Welcome back!',
        message: messages.signInSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(error => {
        this.setState({ email: '', password: '' })
        msgAlert({
          heading: 'Sign In Failed with error: ' + error.message,
          message: messages.signInFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { email, password } = this.state

    const { msgAlert, setUser } = this.props

    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <Heading>Sign In</Heading>
          <form onSubmit={this.onSignIn}>
            <Form.Group controlId="email">
              <FormLabel>Email Address:</FormLabel>
              <Form.Control
                required
                type="email"
                name="email"
                value={email}
                placeholder="Enter Email"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <FormLabel>Password:</FormLabel>
              <Form.Control
                required
                name="password"
                value={password}
                type="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button
              variant="solid"
              type="submit"
            >
              Sign In
            </Button>
          </form>
          <Link href="#sign-up"><Button variant="link">Sign Up</Button></Link>
          <GuestSignIn msgAlert={msgAlert} setUser={setUser} />
        </div>
      </div>
    )
  }
}

export default withRouter(SignIn)
