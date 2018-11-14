import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'login',
    component: () => import('@/pages/index/components/login.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/pages/index/components/register.vue'),
    meta: {
      title: '注册'
    }
  }
  ]
})
