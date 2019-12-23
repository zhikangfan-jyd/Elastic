import Vue from 'vue'
import VueRouter from 'vue-router'
import Find from '../views/Find.vue'
import Discover from '../components/Discover.vue'

Vue.use(VueRouter)

const children = [
  {
    path:'/all',
    name:'all',
    component: Discover
  },
  {
    path:'/elasticsearch',
    name:'elasticsearch',
    // component: () => import ('')
  },
  {
    path:'/logstash',
    name:'logstash',
    // component: () => import ('')
  },
  {
    path:'/kibana',
    name:'kibana',
    // component: () => import ('')
  },
  {
    path:'/beats',
    name:'beats',
    // component: () => import ('')
  },
  {
    path:'/job',
    name:'job',
    // component: () => import ('')
  },
  {
    path:'/dynamic',
    name:'dynamic',
    // component: () => import ('')
  },
  {
    path:'/activityII',
    name:'activityII',
    // component: () => import ('')
  },
  {
    path:'/daily',
    name:'daily',
    // component: () => import ('')
  }
];



const routes = [
  {
    path:'*',
    redirect (to) {
      if (to.path == '/') {
        return '/find'
      }
    }
  },
  {
    path: '/find',
    name: 'find',
    component: Find,
    children
  },
  {
    path: '/share',
    name: 'share',
    component: () => import('../views/Share.vue')
  },
  {
    path: '/article',
    name: 'article',
    component: () => import('../views/Article.vue')
  },
  {
    path: '/activity',
    name: 'activity',
    component: () => import('../views/Activity.vue')
  },
  {
    path: '/download',
    name: 'download',
    component: () => import('../views/Download.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
