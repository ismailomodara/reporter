import Vue from 'vue'
import VueRouter from 'vue-router'

// const Home = () => import('~/pages/index.vue')
const Login = () => import('@/pages/login.vue')

const ReportForm = () => import('@/pages/report.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: ReportForm,
    meta: {
      guest: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      guest: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
