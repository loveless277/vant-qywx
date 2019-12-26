import { router } from '@/router'
import store from '@/store'

import routerModule from './router'
import storeModule from './store'

console.log(routerModule)
router.addRoutes(routerModule)

store.registerModule('frame', storeModule) // 引号里定义的是自己模块名
