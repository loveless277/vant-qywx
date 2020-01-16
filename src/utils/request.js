import axios from 'axios'
// import { Message } from 'element-ui'
// import store from '@/store'
// import { buildpara, validMD5 } from '@/utils/deel-data'
// import { getToken, getUsername, removeUsername, removeToken } from '@/utils/auth'

const service = axios.create({
  baseURL: 'http://192.168.10.231:8888/',
  url: '/common',
  method: 'post',
  timeout: 5000, // request timeout
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
service.interceptors.request.use(
  config => {
    // do something before request is sent
    // console.log(store.getters)
    // debugger
    // const flag = config.url.indexOf('common')
    // // console.log(flag)
    // if (flag !== -1) {
    //   const username = getUsername()
    //   const tokenVal = getToken()
    //   const str = username + tokenVal + config.exec + JSON.stringify(config.data)
    //   // console.log(tokenVal)
    //   var _data = buildpara(config.exec, JSON.stringify(config.data), username, validMD5(str))
    //   config.params = _data
    console.log(config)
    // } else {
    //   config.params = config.data
    // }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)
service.interceptors.response.use(
  response => {
    const res = response.data
    // if (res.code !== 200) {
    //   if (res.code === 600) {
    //     removeToken()
    //     removeUsername()
    //     Message({
    //       message: '用户登录状态失效，请重新登录！',
    //       type: 'warning',
    //       duration: 3 * 1000
    //     })
    //     const interval = window.setInterval(() => {
    //       location.hash = '/login'
    //       window.clearInterval(interval)
    //     }, 3000)
    //   } else {
    //     Message({
    //       message: res.message || 'Error',
    //       type: 'error',
    //       duration: 5 * 1000
    //     })
    //     return Promise.reject(new Error(res.message || 'Error'))
    //   }
    // } else {
    return res
    // }
  },
  error => {
    console.log('err' + error) // for debug
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error)
  }
)

export default service
