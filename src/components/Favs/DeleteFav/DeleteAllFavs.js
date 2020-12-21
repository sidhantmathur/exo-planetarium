import { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { deleteAllFavs } from '../../../api/fav'
import messages from '../../Util/AutoDismissAlert/messages'

class DeleteAllFavs extends Component {
  componentDidMount () {
    const { msgAlert, history, user } = this.props

    deleteAllFavs(user)
      .finally(() => msgAlert({
        heading: 'Deleted All Favs',
        messagE: messages.deleteAllFavsSuccess,
        variant: 'success'
      }))
      .finally(() => history.push('/user'))
  }

  render () {
    return ''
  }
}

export default withRouter(DeleteAllFavs)
