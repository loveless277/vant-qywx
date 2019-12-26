import request from '@/utils/mockReq'

export function getList(params) {
  return request({
    url: '/table/list',
    method: 'get',
    params
  })
}
