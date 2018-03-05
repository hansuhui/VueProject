// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ES6Promise from 'es6-promise'

ES6Promise.polyfill()

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://222.122.202.220'
axios.defaults.headers.post['Content-Type'] = 'application/json'
Vue.prototype.$axios = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
