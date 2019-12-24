import Vue from 'vue'
import VueRouter from 'vue-router'
import Find from '../views/Find.vue'
import Discover from '../components/Discover.vue'
import New from '../components/New.vue';
Vue.use(VueRouter)
const childrenII = [
  {
    path:'new',
    name:'new',
    component: New
  },
  {
    path:'recommend',
    name:'recommend',
    component: () => import ('../components/Recommend.vue')
  },
  {
    path:'hot',
    name:'hot',
    component: () => import ('../components/Hot.vue')
  },
  {
    path:'reply',
    name:'reply',
    component: () => import ('../components/Reply.vue')
  }
];
const children = [
  {
    path:'all',
    name:'all',
    component: Discover,
    redirect:'all/new',
    children:childrenII
  },
  {
    path:'elasticsearch',
    name:'elasticsearch',
    // component: () => import ('')
  },
  {
    path:'logstash',
    name:'logstash',
    // component: () => import ('')
  },
  {
    path:'kibana',
    name:'kibana',
    // component: () => import ('')
  },
  {
    path:'beats',
    name:'beats',
    // component: () => import ('')
  },
  {
    path:'job',
    name:'job',
    // component: () => import ('')
  },
  {
    path:'dynamic',
    name:'dynamic',
    // component: () => import ('')
  },
  {
    path:'activityII',
    name:'activityII',
    // component: () => import ('')
  },
  {
    path:'daily',
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
    redirect:'/find/all',
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
  linkActiveClass:'active',
  linkExactActiveClass:'exact-active',
  base: process.env.BASE_URL,
  routes
})

export default router
