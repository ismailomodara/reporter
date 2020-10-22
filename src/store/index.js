import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'

Vue.use(Vuex)

const ifInProduction = process.env.NODE_ENV === 'production'

const store = new Vuex.Store({
  modules: {
    auth
  },
  strict: ifInProduction
})

export default store
