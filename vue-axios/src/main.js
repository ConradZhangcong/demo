import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import api from './http/index'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.prototype.$ajax = axios // 将axios挂载到Vue实例中的$ajax上面,在项目中的任何位置通过this.$http使用
// 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(api)

// Vue.use(Element, { size: 'small', zIndex: 3000 })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
