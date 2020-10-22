import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import App from './App.vue'
import '@/assets/css/variable.scss'
import 'element-ui/lib/theme-chalk/display.css'
import '@/assets/css/rp-icons.css'
import '@/assets/css/rp-design-system.scss'
import '@/assets/css/rp.scss'
import './mixins'
import './directives'
import './components/Base/components'
import router from './router'
import store from './store'
import './axios'

const ifInProduction = process.env.NODE_ENV === 'production'
Vue.config.productionTip = ifInProduction

Vue.config.devtools = !ifInProduction

Vue.use(ElementUI, { locale })

// router.beforeEach((to, from, next) => {
//   const authenticated = localStorage.getItem('chamber-token');
//   if (to.matched.some((record) => record.meta.requiresAuth) && !authenticated) {
//     next({ path: '/', query: { redirect: to.fullPath } });
//   } else if (to.matched.some((record) => record.meta.guest) && authenticated) {
//     next({ path: '/dashboard' });
//   } else {
//     next();
//   }
// });

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
