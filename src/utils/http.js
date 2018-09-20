/*
*http.js主要处理axios请求全局带参数，解决sign签名问题
*/
import axios from 'axios'
import qs from 'qs'

// axios请求拦截器
axios.interceptors.request.use(
  config => {
    if (config.method === 'get') {
      config.params = {

      }
    } else if (config.method === 'post') {
      config.data = qs.stringify({

      })
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// axios响应拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default axios
