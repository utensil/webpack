require('bootstrap/dist/css/bootstrap.css')
require('tether/dist/css/tether.min.css')
require('script!jquery/dist/jquery.min.js')
require('script!tether/dist/js/tether.min.js')
require('script!bootstrap/dist/js/bootstrap.min.js')
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
// import { modal } from 'vueboot'

Vue.use(VueResource)
Vue.use(Vuex)
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
