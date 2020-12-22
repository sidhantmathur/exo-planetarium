import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { createFav } from '../../../api/fav'
// import messages from '../AutoDismissAlert/messages'
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

    const { user } = this.props

    createFav(this.state, user)
      .then(() => console.log('fav success'))
      .catch(error => {
        this.setState({ title: '' })
        console.log(error)
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
            <FormLabel>Save As: </FormLabel>
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
          <Button onClick={this.onCreateFav} mt={2}>Favourite</Button>
        </Form>
      </ModalBody>
    )
  }
}

export default withRouter(CreateFav)
