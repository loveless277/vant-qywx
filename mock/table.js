import Mock from 'mockjs'
const List = []
const count = 50
// const data = Mock.mock({
//   'items|50': [{
//     id: '@increment',
//     title: '@sentence(10, 20)',
//     'status|1': ['published', 'draft', 'deleted'],
//     author: 'name',
//     display_time: '@datetime',
//     pageviews: '@integer(300, 5000)'
//   }]
// })
for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    name: '@first',
    title: '@title(5, 10)',
    'status|1': ['已审核', '未审核', '无需审核'],
    display_time: '@datetime',
    date: '@increment',
    pageviews: '@integer(300, 5000)'
  }))
}
export default [
  {
    url: '/table/list',
    type: 'get',
    response: config => {
      const { page = 1, limit = 10, sort } = config.query
      let mockList = List
      if (sort === '-id') {
        mockList = mockList.reverse()
      }
      const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
      return {
        code: 20000,
        data: {
          total: mockList.length,
          items: pageList
        }
      }
    }
  },
  {
    url: '/user/detail',
    type: 'get',
    response: config => {
      const { id } = config.query
      for (const user of List) {
        if (user.id === +id) {
          return {
            code: 20000,
            data: user
          }
        }
      }
    }
  }
]
