import apiUrl from '../apiConfig'
import axios from 'axios'

export const indexPlanets = () => {
  return axios({
    url: apiUrl + '/planets',
    method: 'GET'
  })
}

export const showPlanet = (planetId) => {
  return axios({
    url: apiUrl + '/planets/' + planetId,
    method: 'GET'
  })
}

export const randPlanet = () => {
  return axios({
    url: apiUrl + '/planets-rand',
    method: 'GET'
  })
}
