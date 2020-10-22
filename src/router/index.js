import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import('../pages/index.vue');
const Login = () => import('../pages/login.vue');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      guest: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      guest: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
