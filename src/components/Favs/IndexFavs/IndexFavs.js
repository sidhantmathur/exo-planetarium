import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { indexFavs } from '../../../api/fav'
import messages from '../../Util/AutoDismissAlert/messages'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardColumns from 'react-bootstrap/CardColumns'

class IndexFavs extends Component {
  constructor () {
    super()
    this.state = {
      favs: null
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  componentDidMount () {
    const { msgAlert, user } = this.props

    indexFavs(user)
      .then(res => {
        this.setState({ favs: res.data.favs })
      })

      .catch(error => {
        msgAlert({
          heading: 'Index Favs Failed with error: ' + error.message,
          message: messages.indexFavsFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { user } = this.props
    let favJsx
    if (!this.state.favs) {
      favJsx = 'Loading...'
    } else if (this.state.favs.length === 0) {
      favJsx = 'No favs to display :('
    } else if (!user) {
      favJsx = 'Log In to Fav Planets'
    } else {
      console.log(this.state.favs)
      favJsx = this.state.favs.map(fav => (

        <Card key={fav._id} className="Card">
          <Card.Body>
            <Card.Text>
              {fav.title}
            </Card.Text>
            <Button className="Button" variant="outline-info" href={'#favs/' + fav._id}>See More</Button>
          </Card.Body>
          <Card.Footer>Updated on {fav.createdAt.slice(0, -14)}</Card.Footer>
        </Card>
      ))
    }

    return (
      <div>
        <h1 className="display-2 text-dark">Fav Planets</h1>
        <CardColumns>
          {favJsx}
        </CardColumns>

      </div>
    )
  }
}

export default withRouter(IndexFavs)
