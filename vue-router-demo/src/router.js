import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'Home',
    component: () => import('components/home')
  },
  {
    path: '/management',
    name: 'Management',
    component: () => import('views/layout'),
    children: [
      {
        path: '/project',
        name: 'Project',
        component: () => import(/* webpackChunkName: "Workbench" */ 'views/backend/workbench'),
        meta: {
          login: true
        }
      },
      {
        path: '/workbench',
        name: 'Workbench',
        component: () => import(/* webpackChunkName: "abc" */ 'views/backend/workbench'),
        meta: {
          login: true
        }
      },
      {
        path: '/doc',
        name: 'Doc',
        component: () => import(/* webpackChunkName: "abc" */ 'views/backend/doc')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('components/login')
  },
  {
    path: '*',
    redirect: '/'
  }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((item) => item.meta.login)) {
    let info = router.app.$local.fetch('miaov')
    if (info.login) {
      next()
    } else {
      router.push({
        path: '/login',
        query: {
          redirect: to.path.slice(1)
        }
      })
    }
  } else {
    next()
  }
  // if (to.meta.login) {
  //   next()
  // } else {
  //   router.push('/')
  // }
})

export default router
