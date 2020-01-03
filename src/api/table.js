import request from '@/utils/mockReq'

export function getList(query) {
  return request({
    url: '/table/list',
    method: 'get',
    params: query
  })
}
