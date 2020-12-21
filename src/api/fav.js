import apiUrl from '../apiConfig'
import axios from 'axios'

export const createFav = (form, user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/favs',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: {
      fav: {
        title: form.title,
        name: form.plName
      }
    }
  })
}

export const indexFavs = user => {
  return axios({
    url: apiUrl + '/favs-user',
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const indexAllFavs = user => {
  return axios({
    url: apiUrl + '/favs',
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const showFav = (user, favId) => {
  return axios({
    url: apiUrl + '/favs/' + favId,
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const deleteFav = (user, favId) => {
  return axios({
    url: apiUrl + '/favs/' + favId,
    method: 'DELETE',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const updateFav = (user, form, favId) => {
  return axios({
    url: apiUrl + '/favs/' + favId,
    method: 'PATCH',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: {
      fav: {
        title: form.title
      }
    }
  })
}

export const deleteAllFavs = (user) => {
  return axios({
    url: apiUrl + '/favs-del-all',
    method: 'DELETE',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}
