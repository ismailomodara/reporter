import axios from 'axios'

export default {
  states () {
    return axios({ url: 'states', baseURL: 'http://locationsng-api.herokuapp.com/api/v1/' })
  },

  lgas (state) {
    return axios({ url: `${state}/lgas`, baseURL: 'http://locationsng-api.herokuapp.com/api/v1/states/' })
  }
}
