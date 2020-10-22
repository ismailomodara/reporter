import Vue from 'vue'

import AppLayout from '../../layouts/app.vue'
import DefaultLayout from '../../layouts/default.vue'

import PageHeader from './PageHeader'

Vue.component('app-layout', AppLayout)
Vue.component('default-layout', DefaultLayout)

Vue.component('page-header', PageHeader)
