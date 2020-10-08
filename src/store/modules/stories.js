/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const state = {
  stories: null,
  topstories: null,
  isLoadingaskhn: false
}
const getters = {
  getStories: state => state.stories,
  geTopStories: state => state.topstories,
  loadingStatusAskhn: state => state.isLoadingaskhn
}
const actions = {
  async fetchStories ({ commit, state }) {
    const data = []
    commit('loadingStatusaskhn', true)
    const response = await axios.get('askstories.json')
    response.data.forEach(element => {
      axios.get('/item/' + element + '.json')
        .then(result => {
          data.push(result.data)
        }).finally(res => {
          commit('loadingStatusaskhn', false)
        })
    })
    commit('setStories', data)
  },
  async fetchTopStories ({ commit, state }) {
    const data = []
    const response = await axios.get('/topstories.json')
    response.data.slice(0, 10).forEach(element => {
      axios.get('/item/' + element + '.json')
        .then(result => {
          data.push(result.data)
        })
    })
    console.log(data)
    commit('setTopStories', data)
  }
}
const mutations = {
  setStories (state, data) {
    state.stories = data
  },
  setTopStories (state, data) {
    state.topstories = data
  },
  loadingStatusaskhn (state, newloadingstatus) {
    state.isLoadingaskhn = newloadingstatus
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
