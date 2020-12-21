import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

// import { ChakraProvider } from '@chakra-ui/react'

import AuthenticatedRoute from './components/Util/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/Util/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/Auth/SignUp/SignUp'
import SignIn from './components/Auth/SignIn/SignIn'
import SignOut from './components/Auth/SignOut/SignOut'
import ChangePassword from './components/Auth/ChangePassword/ChangePassword'

import Randomizer from './components/Randomizer/Randomizer'
import IndexFavs from './components/IndexFavs/IndexFavs'
import User from './components/User/User'
import GuestSignIn from './components/Auth/SignIn/GuestSignIn'
import DeleteAllFavs from './components/Favs/DeleteFav/DeleteAllFavs'
import ShowFav from './components/Favs/ShowFav/ShowFav'
import ShowPlanet from './components/ShowPlanet/ShowPlanet'

class App extends Component {
  constructor () {
    super()
    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  deleteAlert = (id) => {
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter(msg => msg.id !== id) }
    })
  }

  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return { msgAlerts: [...state.msgAlerts, { heading, message, variant, id }] }
    })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        {/* <ChakraProvider>
          <App />
        </ChakraProvider> */}
        <Header user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
            deleteAlert={this.deleteAlert}
          />
        ))}
        <main className="container">

          <Route exact path='/' render={() => (
            <GuestSignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />

          <Route path='/random' render={() => (
            <Randomizer msgAlert={this.msgAlert} user={user} />
          )} />

          <AuthenticatedRoute user={user} path='/index-favs' render={() => (
            <IndexFavs msgAlert={this.msgAlert} user={user} />
          )} />

          <AuthenticatedRoute user={user} path='/favs/:favId' render={({ match }) => (
            <ShowFav msgAlert={this.msgAlert} user={user} match={match} />
          )} />

          <AuthenticatedRoute user={user} path='/planets/:planetId' render={({ match }) => (
            <ShowPlanet msgAlert={this.msgAlert} user={user} match={match} />
          )} />

          <AuthenticatedRoute user={user} path='/user' render={() => (
            <User user={user} />
          )} />

          <AuthenticatedRoute user={user} path='/delete-all-favs' render={() => (
            <DeleteAllFavs msgAlert={this.msgAlert} user={user} />
          )} />

          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
