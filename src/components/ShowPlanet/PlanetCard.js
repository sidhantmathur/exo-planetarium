import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

import PlanetGraph from '../PlanetGraph/PlanetGraph'

class PlanetCard extends Component {
  constructor () {
    super()

    this.state = {
      planet: ''
    }
  }

  render () {
    const { id, name, orbit, orbitPeriod, temp, radiusE, massE, discovered, facility, locale } = this.props

    return (
      <div>
        <Card key={id} className="Card">
          <Card.Body>
            <Card.Title>
              {name}
            </Card.Title>
            <ListGroup variant="flush">
              <ListGroupItem>Facility: {facility}</ListGroupItem>
              <ListGroupItem>Locale: {locale}</ListGroupItem>
              <ListGroupItem>Orbit: {orbit}</ListGroupItem>
              <ListGroupItem>Orbit period: {orbitPeriod}</ListGroupItem>
              <ListGroupItem>temp: {temp}</ListGroupItem>
              <ListGroupItem>radius: {radiusE + ' earths'}</ListGroupItem>
              <ListGroupItem>mass: {massE + ' earths'}</ListGroupItem>
              <ListGroupItem>discovered: {discovered}</ListGroupItem>
            </ListGroup>
          </Card.Body>
        </Card>
        <PlanetGraph
          name={name}
          orbit={orbit}
          orbitPeriod={orbitPeriod}
          temp={temp}
          radiusE={radiusE}
          massE={massE}
          discovered={discovered}
        />
      </div>
    )
  }
}

// const PlanetCard = (props) => {
//   const { id, name, orbit, orbitPeriod, temp, radiusE, massE, discovered, facility, locale } = this.props
//   return (
//     <div>
//       <Card key={id} className="Card">
//         <Card.Body>
//           <Card.Title>
//             {name} asdfkasdj n s asdoif
//           </Card.Title>
//           <ListGroup variant="flush">
//             <ListGroupItem>Facility: {facility}</ListGroupItem>
//             <ListGroupItem>Locale: {locale}</ListGroupItem>
//             <ListGroupItem>Orbit: {orbit}</ListGroupItem>
//             <ListGroupItem>Orbit period: {orbitPeriod}</ListGroupItem>
//             <ListGroupItem>temp: {temp}</ListGroupItem>
//             <ListGroupItem>radius: {radiusE + ' earths'}</ListGroupItem>
//             <ListGroupItem>mass: {massE + ' earths'}</ListGroupItem>
//             <ListGroupItem>discovered: {discovered}</ListGroupItem>
//           </ListGroup>
//         </Card.Body>
//       </Card>
//       <PlanetGraph
//         name={name}
//         orbit={orbit}
//         orbitPeriod={orbitPeriod}
//         temp={temp}
//         radiusE={radiusE}
//         massE={massE}
//         discovered={discovered}
//       />
//     </div>
//   )
// }

export default withRouter(PlanetCard)
