import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('../views/Form.vue')
  },
  {
    path: '/advert',
    name: 'advert',
    component: () => import('../views/Advert.vue')
  },
  {
    path: '/upload',
    name: 'upload',
    component: () => import('../views/Upload.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
