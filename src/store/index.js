import Vue from 'vue'
import Vuex from 'vuex'

// Modules files goes here
import Jobs from './modules/jobs'
import Stories from './modules/stories'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Jobs,
    Stories
  }
})
