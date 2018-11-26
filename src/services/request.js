import axios from 'axios'
import { error } from 'utils/toast'
import { getItem } from 'utils/storage'

// 创建实例时设置配置的默认值
const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 1000,
  withCredentials: true // 允许添加cookie
})

// 添加响应拦截器
service.interceptors.response.use(res => {
    const { data } = res
    if (data && !data.result) { // 此处result字段根据接口习惯修改
    	error(res.data.message) // 此处message字段根据接口习惯修改
	}
	return res.data
}, function () { // 此处待完善
    error('请求出错,请联系客服')
})

/**
* 统一发送请求
*  config 请求参数
*/
function request(config) { 
	// 本地mock情况下取testUrl字段
    if (process.env.NODE_ENV === 'development' && getItem('isTest')) {
        config['method'] = 'get'
        config['url'] = window.location.origin + config['testUrl']
    }
    // 删除不用字段testUrl
    delete config['testUrl']
    // get请求时替换掉 字段data 为params
    if (config['method'] === 'get' || config['method'] === 'GET') {
	    config['params'] = config['data']
	    delete config['data']
    }
    return service(config)
}

export default request