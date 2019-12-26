// 路由自己对着自己写的相应页面自己搞

export default [
  { path: '/testIndex',
    name: 'testIndex',
    component: () => import('../view/testIndex'),
    meta: {
      title: '测试页'
    }
  },
  { path: '/comroom',
    name: 'comroom',
    component: () => import('../view/comroom'),
    meta: {
      title: '机房页'
    }}
]
