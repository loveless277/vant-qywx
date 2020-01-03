import Vue from 'vue'
import App from './App'
import { router } from './router'
import store from './store'

import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)

// element ui 表格
import { Table, TableColumn } from 'element-ui'

Vue.use(Table)
Vue.use(TableColumn)

import 'normalize.css/normalize.css'
import '@/styles/index.scss' // global css
import '@/icons' // icon
import '@/components/NavBar' // mynavbar
import '@/utils/echarts'

import '@/modules'

import wx from 'weixin-js-sdk'
Vue.prototype.wx = wx // 页面中可用this.wx 调用微信sdk接口

// import '@/utils/qywxAPI.js'

import { mockXHR } from '../mock'

import './plugins/element.js'
if (process.env.NODE_ENV === 'production') {
  mockXHR()
}

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
