import apiUrl from '../apiConfig'
import axios from 'axios'

export const indexPlanets = user => {
  return axios({
    url: apiUrl + '/planets',
    method: 'GET'
  })
}

// export const showPlanet = (user, planetId) => {
//   return axios({
//     url: apiUrl + '/planet/' + planetId,
//     method: 'GET'
//   })
// }

export const randPlanet = (user) => {
  return axios({
    url: apiUrl + '/planets-rand',
    method: 'GET'
  })
}
