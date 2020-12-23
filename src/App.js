import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AuthenticatedRoute from './components/Util/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/Util/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/Auth/SignUp/SignUp'
import SignIn from './components/Auth/SignIn/SignIn'
import SignOut from './components/Auth/SignOut/SignOut'
import ChangePassword from './components/Auth/ChangePassword/ChangePassword'

import Randomizer from './components/Randomizer/Randomizer'
import IndexFavs from './components/Favs/IndexFavs/IndexFavs'
import User from './components/User/User'
// import GuestSignIn from './components/Auth/SignIn/GuestSignIn'
import DeleteAllFavs from './components/Favs/DeleteFav/DeleteAllFavs'
import ShowFav from './components/Favs/ShowFav/ShowFav'
// import ShowPlanet from './components/ShowPlanet/ShowPlanet'
import IndexPlanets from './components/IndexPlanets/IndexPlanets'
import SearchPlanets from './components/SearchPlanets/SearchPlanets'
// import Search2 from './components/SearchPlanets/Search2'
import UpdateFav from './components/Favs/UpdateFav/UpdateFav'
import ShowPlanetFull from './components/ShowPlanet/ShowPlanetFull'
// import Header3 from './components/Header/Header3'

// import ChHeader2 from './components/Header/ChHeader2'

import LandingPage from './components/LandingPage/LandingPage'

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
        <Header user={user} />
        {/* <Header3 /> */}

        {/* <ChHeader2 user={user} /> */}

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
            <Fragment>
              {/* <GuestSignIn msgAlert={this.msgAlert} setUser={this.setUser} />
              <Randomizer msgAlert={this.msgAlert} user={user} /> */}
              <LandingPage />
            </Fragment>
          )} />

          <Route path='/random' render={() => (
            <Randomizer msgAlert={this.msgAlert} user={user} />
          )} />

          <Route path='/search' render={() => (
            <SearchPlanets msgAlert={this.msgAlert} user={user} />
          )} />

          {/* <Route path='/search2' render={() => (
            <Search2 msgAlert={this.msgAlert} user={user} />
          )} /> */}

          <AuthenticatedRoute user={user} path='/index-favs' render={() => (
            <IndexFavs msgAlert={this.msgAlert} user={user} />
          )} />

          <AuthenticatedRoute user={user} path='/favs/:favId' render={({ match, history }) => (
            <ShowFav msgAlert={this.msgAlert} user={user} match={match} history={history}/>
          )} />

          <AuthenticatedRoute user={user} path='/favs-update/:favId' render={({ match, history }) => (
            <UpdateFav msgAlert={this.msgAlert} user={user} match={match} history={history}/>
          )} />

          <Route user={user} path='/planets-index' render={() => (
            <IndexPlanets msgAlert={this.msgAlert} user={user} />
          )} />

          <Route user={user} path='/planets/:planetId' render={({ match }) => (
            <ShowPlanetFull msgAlert={this.msgAlert} user={user} match={match} />
          )} />

          {/* <Route user={user} path='/planets-full/:planetId' render={({ match }) => (
            <ShowPlanetFull msgAlert={this.msgAlert} user={user} match={match} />
          )} /> */}

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
