// 路由自己对着自己写的相应页面自己搞

export default [
  {
    path: '/testIndex',
    name: 'testIndex',
    component: () => import('../view/testIndex'),
    meta: {
      title: '测试页'
    }
  },
  {
    path: '/comroom',
    name: 'comroom',
    component: () => import('../view/comroom'),
    meta: {
      title: '机房'
    }
  },
  {
    path: '/findCabinet',
    name: 'findCabinet',
    component: () => import('../view/findCabinet'),
    meta: {
      title: ''
    }
  },
  {
    path: '/cabinetDetail',
    name: 'cabinetDetail',
    component: () => import('../view/findCabinet/cabinetDetail'),
    meta: {
      title: ''
    }
  },
  {
    path: '/findEquip',
    name: 'findEquip',
    component: () => import('../view/findEquip'),
    meta: {
      title: ''
    }
  },
  {
    path: '/equipDetail',
    name: 'equipDetail',
    component: () => import('../view/findEquip/equipDetail'),
    meta: {
      title: ''
    }
  },
  {
    path: '/check',
    name: 'check',
    component: () => import('../view/check'),
    meta: {
      title: ''
    }
  },
  {
    path: '/myTask',
    name: 'myTask',
    component: () => import('../view/check/myTask'),
    meta: {
      title: ''
    }
  },
  {
    path: '/publish',
    name: 'publish',
    redirect: '/publish/normal',
    component: () => import('../view/check/publish'),
    meta: {
      title: ''
    },
    children: [
      {
        path: 'normal',
        name: 'normal',
        component: () => import('../view/check/normalPub')
      },
      {
        path: 'quarter',
        name: 'quarter',
        component: () => import('../view/check/quarterPub')
      }
    ]
  },
  {
    path: '/taskDetail',
    name: 'taskDetail',
    component: () => import('../view/check/taskDetail'),
    meta: {
      title: ''
    }
  }
]
