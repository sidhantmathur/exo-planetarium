import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { createFav } from '../../../api/fav'
import messages from '../../Util/AutoDismissAlert/messages'
// import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import { ModalBody, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'

class CreateFav extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      plName: this.props.plId
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onCreateFav = event => {
    event.preventDefault()

    const { user, msgAlert, close } = this.props

    createFav(this.state, user)
      .then(() => msgAlert({
        heading: 'Create Fav Success',
        message: messages.createFavSuccess,
        variant: 'success'
      }))
      .then(() => close())
      .catch(error => {
        this.setState({ title: '' })
        msgAlert({
          heading: 'Fav Creation Failed with error: ' + error.message,
          message: messages.createFavFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { plId } = this.props
    const { title } = this.state

    // console.log(plName)

    return (
      <ModalBody>
        <Form>
          {/* <Form.Control
            value={title}
            name="title"
            onChange={this.handleChange}
          /> */}
          <FormControl>
            <FormLabel>Name: </FormLabel>
            <Input
              placeholder="Cool System"
              value={title}
              name="title"
              onChange={this.handleChange} />
          </FormControl>

          <Form.Control
            value={plId}
            type="hidden"
            name="plName"
            onChange={this.handleChange}
          />
          <Button onClick={this.onCreateFav} mt={2}>Save</Button>
        </Form>
      </ModalBody>
    )
  }
}

export default withRouter(CreateFav)
