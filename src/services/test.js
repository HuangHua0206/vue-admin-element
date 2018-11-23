import request from 'services/request'

// test
export function getList(data) {
  return request({
  	testUrl: '/static/json/test.json',
    url: `/static/json/test.json`,
    method: 'get',
    data
  })
}
