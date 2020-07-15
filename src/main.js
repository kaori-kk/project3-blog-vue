import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

const authData = localStorage.getItem('auth')

new Vue({
  router,
  store,
  data: {
    auth: authData ? JSON.parse(authData) : {}
  },
  render: h => h(App)
}).$mount('#app')
