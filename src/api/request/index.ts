import { ElMessage } from 'element-plus'
import BaseRequest from './base_request'
import { TIME_OUT, BASE_URL } from './config/index'

const request = new BaseRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  isLoading: true,
  interceptors: {
    requestIntercepter: (config) => {
      console.log('实例请求拦截', config)
      return config
    },

    requestIntercepterCatch: (err) => {
      console.log('实例请求拦截错误', err)
      if (err.request) {
        ElMessage.error(err.request)
      }
      throw new Error(err)
    },

    responseIntercepter: (res) => {
      console.log('实例响应拦截', res)
      if (res.data.code == 200) {
        ElMessage.success(res.data.message)
      } else {
        ElMessage.warning(res.data.message)
      }
      return res
    },

    responseIntercepterCatch: (err) => {
      console.log('实例响应拦截错误', err)
      if (err.response) {
        ElMessage.error(
          err.response.data?.message
            ? err.response.data?.message
            : err.response.data
        )
      } else {
        ElMessage.error(err.message ? err.message : err.data)
      }
      throw new Error(err)
    }
  }
})

export default request
