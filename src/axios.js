import router from './router'

window.axios = require('axios')

window.axios.defaults.baseURL = process.env.VUE_APP_API

window.axios.interceptors.request.use(
  (config) => {
    if (!config.headers.Authorization) {
      const token = localStorage.getItem('reporter-token')

      if (token) {
        // eslint-disable-next-line no-param-reassign
        config.headers.Authorization = `Bearer ${token}`
      }
    }

    return config
  },
  (error) => Promise.reject(error)
)

window.axios.interceptors.response.use(
  (response) =>
  // Return a successful response back to the calling service
    // eslint-disable-next-line implicit-arrow-linebreak
    response, (error) => {
    // Return any error which is not due to authentication back to the calling service
    if (error.response.status !== 401) {
      return new Promise((resolve, reject) => {
        reject(error)
      })
    }

    // Logout user if token has expired
    if (
      error.response.status === 401 ||
          error.response.message === 'Unauthenticated.'
    ) {
      localStorage.removeItem('chamber-token')
      localStorage.removeItem('chamber-user')
      if (router.history.current.name !== 'login') {
        router.push({ name: 'login' })
      }
      return true
    }
    return true
  }
)
