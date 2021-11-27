import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
// import Chartkik from 'vue-chartkick'
import Chart from 'chart.js'

import VueChartkick from 'vue-chartkick'
// import 'chartkick/chart.js'

import { VueSpinners } from '@saeris/vue-spinners'

import router from '@/router'
import { dollarFilter } from '@/filter'
import { percentFilter } from '@/filter'

Vue.use(VueSpinners)
// Vue.use(VueChartkick)
Vue.use(VueChartkick.use(Chart))

Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percentFilter)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
