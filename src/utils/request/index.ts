import MuRequest from './request'
import { BASE_URL, TIME_OUT } from './config'
import { ElMessage } from 'element-plus'

interface ResultTypw {
  // 当前是 200 成功
  code: number
  data: any
  responseType?: string
  message?: string
}

const muRequest = new MuRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      return config
    },
    requestInterceptorCatch: (err) => {
      throw err
    },
    responseInterceptor: (res: ResultTypw) => {
      if (res?.code === 200) return res
      if (res?.responseType === 'blob') return res
      if (res.data && res.data.length > 0) {
        ElMessage.error(res.data)
      } else {
        ElMessage.error(res?.message)
      }

      throw res
    },
    responseInterceptorCatch: (err) => {
      console.log('响应失败的链接', err)
      ElMessage.error(err?.message ? err?.message : err?.data)
      throw err
    }
  }
})

export default muRequest
