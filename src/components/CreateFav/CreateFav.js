import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { createFav } from '../../api/fav'
// import messages from '../AutoDismissAlert/messages'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class CreateFav extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      plName: this.props.plName
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
        this.setState({ title: 'asdfasdf' })
        console.log(error)
      })
  }

  render () {
    const { plName } = this.props
    const { title } = this.state
    // console.log(plName)

    return (
      <div>
        <Form onSubmit={this.onCreateFav}>
          <Form.Control
            value={title}
            name="title"
            onChange={this.handleChange}
          />
          <Form.Control
            value={plName}
            name="plName"
            onChange={this.handleChange}
          />
          <Button type="submit">Favourite</Button>
        </Form>
      </div>
    )
  }
}

export default withRouter(CreateFav)
