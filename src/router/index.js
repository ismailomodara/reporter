import Vue from 'vue'
import VueRouter from 'vue-router'

// const Home = () => import('~/pages/index.vue')
const Login = () => import('../pages/login.vue')

const ReportForm = () => import('../pages/report.vue')

const Dashboard = () => import('../pages/dashboard/index.vue')

const Reports = () => import('../pages/reports/index')
const Report = () => import('../pages/reports/id')

const Settings = () => import('../pages/settings/index')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      path: '/report',
      component: ReportForm
    },
    meta: {
      guest: true
    }
  },
  {
    path: '/report',
    name: 'report',
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
  },
  {
    path: '/dashboard',
    name: 'dashboard.index',
    component: Dashboard,
    meta: {
      guest: true,
      layout: 'app'
    }
  },
  {
    path: '/reports',
    name: 'reports.index',
    component: Reports,
    meta: {
      guest: true,
      layout: 'app'
    }
  },
  {
    path: '/reports/:id',
    name: 'reports.report',
    component: Report,
    meta: {
      guest: true,
      layout: 'app'
    }
  },
  {
    path: '/settings',
    name: 'settings.index',
    component: Settings,
    meta: {
      guest: true,
      layout: 'app'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
