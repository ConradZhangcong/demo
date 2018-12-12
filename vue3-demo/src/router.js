import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'dashboard',
    component: () => import('views/dashboard.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('views/home.vue'),
    meta: {
      title: '文档'
    }
  },
  {
    path: '/document',
    name: 'document',
    component: () => import('views/document.vue'),
    meta: {
      title: '文档'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('views/about.vue'),
    meta: {
      title: '关于我们'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('views/login.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '*',
    redirect: '/404'
  }
  ]
})
