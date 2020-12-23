import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signUp, signIn } from '../../../api/auth'
import messages from '../../Util/AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'

import { Button, FormLabel, Heading, Link } from '@chakra-ui/react'

import GuestSignIn from '../SignIn/GuestSignIn'

class SignUp extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignUp = event => {
    event.preventDefault()

    const { msgAlert, history, setUser } = this.props

    signUp(this.state)
      .then(() => signIn(this.state))
      .then(res => setUser(res.data.user))
      .then(() => msgAlert({
        heading: 'Sign Up Success',
        message: messages.signUpSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(error => {
        this.setState({ email: '', password: '', passwordConfirmation: '' })
        msgAlert({
          heading: 'Sign Up Failed with error: ' + error.message,
          message: messages.signUpFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { email, password, passwordConfirmation } = this.state
    const { msgAlert, setUser } = this.props

    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <Heading>Sign Up</Heading>
          <Form onSubmit={this.onSignUp}>
            <Form.Group controlId="email">
              <FormLabel>Email address</FormLabel>
              <Form.Control
                required
                type="email"
                name="email"
                value={email}
                placeholder="Enter email"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <FormLabel>Password</FormLabel>
              <Form.Control
                required
                name="password"
                value={password}
                type="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="passwordConfirmation">
              <FormLabel>Password Confirmation</FormLabel>
              <Form.Control
                required
                name="passwordConfirmation"
                value={passwordConfirmation}
                type="password"
                placeholder="Confirm Password"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button
              variant="solid"
              type="submit"
            >
              Submit
            </Button>
          </Form>
          <Link href="#sign-in"><Button variant="link" mt={2}>Sign In</Button></Link>
          <GuestSignIn msgAlert={msgAlert} setUser={setUser} />
        </div>
      </div>
    )
  }
}

export default withRouter(SignUp)
