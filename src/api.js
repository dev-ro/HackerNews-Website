// import NProgress from 'nprogress'

window.axios = require('axios')

window.axios.defaults.baseURL = process.env.VUE_APP_BASE_URL

// window.axios.interceptors.request.use(config => {
//   NProgress.start()
//   return config
// })

// window.axios.interceptors.response.use(response => {
//   NProgress.done()
//   return response
// })
