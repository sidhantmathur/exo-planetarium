import React from 'react'
import Alert from 'react-bootstrap/Alert'

// import { chakra } from '@chakra-ui/react'

import './AutoDismissAlert.scss'

class AutoDismissAlert extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      show: true
    }
    this.timeout = null
  }

  componentDidMount () {
    this.timeout = setTimeout(() => {
      this.handleClose()
    }, 5000)
  }

  componentWillUnmount () {
    clearTimeout(this.timeout)
  }

  handleClose = () => this.setState({ show: false })

  render () {
    const { variant, heading, message, deleteAlert, id } = this.props

    // Delete this alert after the fade animation time (300 ms by default)
    if (!this.state.show) {
      setTimeout(() => {
        deleteAlert(id)
      }, 300)
    }

    return (
      <chakra.Alert
        dismissible
        // bg="green.200"
        show={this.state.show}
        variant={variant}
        onClose={this.handleClose}
      >
        <div className="container">
          <Alert.Heading>
            {heading}
          </Alert.Heading>
          {/* <AlertIcon /> */}
          <p className="alert-body">{message}</p>
        </div>
      </chakra.Alert>
    )
  }
}

export default AutoDismissAlert
