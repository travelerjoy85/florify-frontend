import superagent from 'superagent'
import { API_HOST } from './config'

class Api {

  // For user login
  requestLogIn = (email, password) => {
    return superagent
    .post(`${API_HOST}/auth/sessions`)
    .send({ email, password })
    .set('Accept', 'application/json')
  }

  // For user signup
  requestSignUp = (signUpObj) => {
    return superagent
    .post(`${API_HOST}/auth/users`)
    .send({
      email: signUpObj.email,
      phone: signUpObj.phone,
      password: signUpObj.password
    })
    .set('Accept', 'application/json')
  }

  // For user logout
  requestLogOut = (token) => {
    return superagent
    .delete(`${API_HOST}/auth/sessions`)
    .send({token})
    .set('Authorization', `token ${token}`)
    .set('Accept', 'application/json')
  }

  // Return the latest basic info on all plantes, match with endpoints
  getPlantCards = (token) => {
    return superagent
    .get(`${API_HOST}/plants`)
    .set('Authorization', `token ${localStorage.token}`)
    .set('Content-Type', 'application/json')
  }

  // Return single plant card with 4 charts on the page, waiting for endpoints
  // id here is plant ID, not userId, figure out a way to access plantId
  getPlantDetail = (id) => {
    console.log(localStorage.token)
    return superagent
    .get(`${API_HOST}/plants/${id}`)
    .set('Authorization', `token ${localStorage.token}`)
  }

  // For loggedin user to delete plant card
  deletePlantCard = (id) => {
    return superagent
    .delete(`${API_HOST}/plants/${id}`)
    .set('Authorization', `token ${localStorage.token}`)
  }

  // Get the loggedin user profile
  getMe = (token) => {
    return superagent
    .get(`${API_HOST}/auth/me`)
    .send({token})
    .set('Authorization', `token ${token}`)
    .set('Accept', 'application/json')
    .then(profile => {
      return JSON.parse(profile.text);
    })
  }

  // For loggedin user to post a new plant card
  postPlantCard = (plant) => {
    return this.getMe(localStorage.token)
    .then((profile) => {
      return superagent
      .post(`${API_HOST}/plants`)
      .send({
        // Match with the sql table
        nickname: plant.nickname,
        name: plant.name,
        description: plant.description,
        maxtemp: plant.maxtemp,
        mintemp: plant.mintemp,
        maxph: plant.maxph,
        minph: plant.minph,
        maxhum: plant.maxhum,
        minhum: plant.minhum,
        maxlux: plant.maxlux,
        minlux: plant.minlux
      })
      .set('Authorization', `token ${localStorage.token}`)
      .set('Accept', 'application/json')
    })
  }
}

export default new Api();
