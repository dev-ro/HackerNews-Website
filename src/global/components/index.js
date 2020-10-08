import Vue from 'vue'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

// Components
import TitleHeading from '@/components/_titleheading'
import TimeAndUserDetail from '@/components/_timeanduser.vue'
import TopStoriesWidget from '@/widgets/TopStories.vue'

// Title Heading Components
Vue.component('title-heading', TitleHeading)
// Time and user Detail
Vue.component('time-n-user', TimeAndUserDetail)
// Loading Overlay
Vue.component('loading', Loading)

// Top 10 Stories
Vue.component('top-stories', TopStoriesWidget)
