/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const state = {
  jobs: null,
  isLoadingJobs: false
}
const getters = {
  getJobs: state => state.jobs,
  loadingStatus: state => state.isLoadingJobs
}
const actions = {
  async fetchJobs ({ commit, state }) {
    const data = []
    commit('loadingStatus', true)
    const response = await axios.get('jobstories.json')
    response.data.forEach(element => {
      axios.get('/item/' + element + '.json')
        .then(result => {
          data.push(result.data)
        }).finally(res => {
          commit('loadingStatus', false)
        })
    })
    commit('setJobs', data)
  }
}
const mutations = {
  setJobs (state, data) {
    state.jobs = data
  },
  loadingStatus (state, newloadingstatus) {
    state.isLoadingJobs = newloadingstatus
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
