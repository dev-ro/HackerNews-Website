import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import Home from '../views/Home.vue'

NProgress.configure({
  showSpinner: true
})

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Welcome To HackerNews Clone',
      description: ''
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: 'About Us',
      description: ''
    }
  },
  {
    path: '/top-stories',
    name: 'TopStories',
    component: () => import(/* webpackChunkName: "top-stories" */ '../views/TopStories.vue'),
    meta: {
      title: 'HackerNews Top Stories',
      description: ''
    }

  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: () => import(/* webpackChunkName: "jobs" */ '../views/jobs.vue'),
    meta: {
      title: 'Jobs',
      description: ''
    }
  }, {
    path: '/askhn/:id',
    name: 'Askhndetail',
    component: () => import(/* webpackChunkName: "askhnshow" */ '../components/show.vue')
  },
  {
    path: '/stories/:id',
    name: 'Story',
    component: () => import(/* webpackChunkName: "askhnshow" */ '../components/show.vue')
  },
  {
    path: '/users/:id',
    name: 'User',
    component: () => import(/* webpackChunkName: "askhnshow" */ '../components/showuser.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

export default router
