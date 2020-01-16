import request from '@/utils/mockReq'

export function getList(query) {
  return request({
    url: '/table/list',
    method: 'get',
    params: query
  })
}

export function getDevice(query) {
  return request({
    url: '/table/device',
    method: 'get',
    params: query
  })
}

export function getCabinet(query) {
  return request({
    url: '/table/cabinet',
    method: 'get',
    params: query
  })
}

export function getLog(query) {
  return request({
    url: '/table/log',
    method: 'get',
    params: query
  })
}
