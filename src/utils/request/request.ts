import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { MuRequestConfig, MuRequestInterceptors } from './type'

class MuRequest {
  instance: AxiosInstance
  // 当前实例拦截器
  interceptors?: MuRequestInterceptors

  constructor(config: MuRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // 基础响应拦截
    this.addResponse()

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 基础请求拦截
    this.addRequest()
  }

  // 添加所有的实例化都有的拦截器方法
  private addRequest() {
    this.instance.interceptors.request.use(
      (config: MuRequestConfig) => {
        const token = sessionStorage.getItem('token')
        if (token && config.headers) {
          config.headers.Authorization = token
        }
        return config
      },
      (err) => {
        throw err
      }
    )
  }
  private addResponse() {
    this.instance.interceptors.response.use(
      (res) => {
        if (res.request.responseType == 'blob') {
          const { headers, data } = res
          const size = Number(headers['content-length']) / 1000
          let name = res.headers['content-disposition'] ?? ''
          if (name) {
            const arr = name.split('filename=')
            name = arr.pop() ?? ''
            name = name.replace(/"|'/g, '')
          }

          return {
            responseType: 'blob',
            size,
            name,
            data
          }
        }

        return res
      },
      (err) => {
        throw err.response
      }
    )
  }

  request<T = any>(config: MuRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // 每个请求也可以有自己的拦截器
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      this.instance.request<any, T>(config).then(
        (res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          resolve(res)
        },
        (err) => {
          reject(err)
        }
      )
    })
  }

  get<T = any>(url: string, data: object = {}, config: MuRequestConfig = {}) {
    return this.request<T>({
      url: url,
      method: 'GET',
      params: data,
      ...config
    })
  }
  delete<T = any>(
    url: string,
    data: object = {},
    config: MuRequestConfig = {}
  ) {
    return this.request<T>({
      url: url,
      method: 'delete',
      params: data,
      ...config
    })
  }

  post<T = any>(url: string, data: object = {}, config: MuRequestConfig = {}) {
    return this.request<T>({
      url: url,
      method: 'POST',
      data: data,
      ...config
    })
  }

  download<T = any>(
    url: string,
    data: object = {},
    config: MuRequestConfig = {}
  ) {
    return this.request<T>({
      url: url,
      method: 'GET',
      params: data,
      responseType: 'blob',
      ...config
    })
  }
}

export default MuRequest
