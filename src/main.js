import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import router from './router.js'
import store from './store'
import App from './App.vue'

import './style.scss'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

Vue.mixin({
  filters: {
    date (value) {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return (new Date(value)).toLocaleDateString("en-US", options)
    },
  }
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
