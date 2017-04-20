import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.prototype.$DG = require('2gis-maps')

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
