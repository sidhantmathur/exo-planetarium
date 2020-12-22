import React, { useState, useEffect, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { randPlanet } from '../../api/planet'
// import { createFav } from '../../api/fav'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CreateFav from '../Favs/CreateFav/CreateFav'
import PlanetCard from '../ShowPlanet/PlanetCard'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'

const RandomPlanet = (props) => {
  const [planet, setPlanet] = useState(null)
  const { user, msgAlert, match } = props
  useEffect(() => {
    randPlanet(user, match.params.planetId)
      .then(res => {
        setPlanet(res.data.planet)
      })
      .catch(err => {
        msgAlert({
          heading: 'Show Planet Failed',
          message: 'Error code: ' + err.message,
          variant: 'danger'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'Deletion Failed',
          message: 'Something went wrong: ' + err.message,
          variant: 'danger'
        })
      })
  }, [])

  function randomize () {
    randPlanet(user, match.params.planetId)
      .then(res => {
        setPlanet(res.data.planet)
      })
      .catch(err => {
        msgAlert({
          heading: 'Show Planet Failed',
          message: 'Error code: ' + err.message,
          variant: 'danger'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'Deletion Failed',
          message: 'Something went wrong: ' + err.message,
          variant: 'danger'
        })
      })
    console.log(planet)
  }
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div>
      {planet ? (
        <div>
          <PlanetCard
            id={planet._id}
            name={planet.pl_name}
            orbit={planet.pl_orb}
            orbitPeriod={planet.pl_orbper}
            temp={planet.pl_temp}
            radiusE={planet.pl_rade}
            massE={planet.pl_masse}
            discovered={planet.dis_year}
            facility={planet.dic_fac}
            locale={planet.dis_loc}
            habit={planet.habit}
          />
          <Card>
            <Button onClick={randomize}>Randomize</Button>
            <Button className="Button" variant="outline-info" href={'#planets/' + planet._id}>See More</Button>
            {(user) ? (
              <Fragment>
                <Button onClick={onOpen}>Open Modal</Button>

                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Save this Planet</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <CreateFav
                        user={user}
                        plName={planet.pl_name}
                        plId={planet._id}
                      />
                    </ModalBody>

                    <ModalFooter>
                      <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                      </Button>
                      <Button variant="ghost">Secondary Action</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </Fragment>
            ) : ''}
          </Card>
        </div>
      ) : 'Loading...'}
    </div>
  )
}

export default withRouter(RandomPlanet)
