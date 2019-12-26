import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '*',
    redirect: '/index'
  },
  {
    name: 'index',
    component: () => import('./view/index'),
    meta: {
      title: '应用中心'
    }
  },
  {
    name: 'user',
    component: () => import('./view/user'),
    meta: {
      title: '会员中心'
    }
  }
]

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '')
})

const router = new Router({ routes })

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title
  if (title) {
    document.title = title
  }
  next()
})

export {
  router
}

// export const asyncRouter = []
// router.addRoutes(asyncRouter)
