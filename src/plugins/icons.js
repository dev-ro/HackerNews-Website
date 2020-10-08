import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBars,
  faArrowLeft,
  faArrowRight,
  faClock,
  faUser,
  faComments,
  faCrown
} from '@fortawesome/free-solid-svg-icons'

import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const icons = [
  faBars,
  faArrowLeft,
  faArrowRight,
  faClock,
  faUser,
  faFacebookF,
  faTwitter,
  faInstagram,
  faComments,
  faCrown
]

library.add(icons)

Vue.component('font-awesome-icon', FontAwesomeIcon)
