import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  // scrollBehavior (to, from, savedPosition) {
  // 点击浏览的前进后退 或者切换导航时触发
  // console.log(to)
  // console.log(from)
  // console.log(savedPosition) // 前进后退时 记录xy
  // 前进后退时记录滚动条的位置
  // if (savedPosition) {
  //   return savedPosition
  // } else {
  //   return {
  //     x: 0,
  //     y: 0
  //   }
  // }
  // 锚点
  // if (to.hash) {
  //   return {
  //     selector: to.hash
  //   }
  // }
  // },
  routes: [{
    path: '/',
    component: () => import('views/dashboard.vue'),
    redirect: '/home',
    meta: {
      title: '首页'
    },
    children: [{
      path: 'home',
      name: 'home',
      component: () => import('views/home.vue'),
      meta: {
        title: '首页'
      }
    },
    {
      path: 'document',
      name: 'document',
      component: () => import('views/document.vue'),
      beforeEnter: (to, from, next) => {
        next()
      },
      meta: {
        title: '文档'
      }
    },
    {
      path: 'about',
      name: 'about',
      component: () => import('views/about.vue'),
      meta: {
        title: '关于我们'
      }
    }
    ]
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
    component: () => import('views/404.vue'),
    meta: {
      title: '404'
    }
    // redirect: '/home'
    // redirect: '{path: "/home"}'
    // redirect: '{name: "home"}'
    // redirect: (to) => {
    //   // to是目标路由对象
    //   return '/home'
    // }
  }
  ]
})

router.beforeEach((to, from, next) => {
  // console.log('beforeEach')
  // if (to.meta.login) {
  //   next('/login')
  // }else {
  //   next()
  // }
  next()
})

router.afterEach((to, from) => {
  // console.log('afterEach')
  if (to.meta.title) {
    window.document.title = to.meta.title
  } else {
    window.document.title = 'demo'
  }
})

export default router
