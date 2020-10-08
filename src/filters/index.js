import Vue from 'vue'
const moment = require('moment')

// Unix to human readable format
Vue.filter('time_converter', (time) => {
  return moment.unix(time).format('ddd MMM Do YYYY')
})
