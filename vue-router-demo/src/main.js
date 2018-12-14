import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Utile from './lib/utils'

import './assets/css/app.css'

Vue.config.productionTip = false

Vue.use(Utile)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
