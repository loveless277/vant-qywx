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
    name: 'mine',
    component: () => import('./view/mine'),
    meta: {
      title: '我的信息'
    }
  }
]

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '')
})

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

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
