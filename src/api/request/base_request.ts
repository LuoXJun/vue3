import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'
import { ElLoading } from 'element-plus'
import { IbaseRequestConfig, IbaseInstanceConfig } from './base_type'

class BaseRequest {
  // 实例对象
  instance: AxiosInstance
  //   实例拦截器
  interceptors?: IbaseRequestConfig
  // 接受实例化的loading对象
  loading: any
  // 是否显示加载
  isLoading: boolean

  constructor(config: IbaseInstanceConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.isLoading = config.isLoading ?? true

    this.commonResponseInterceptor()

    // 使用传递的请求拦截
    this.instance.interceptors.request.use(
      this.interceptors?.requestIntercepter,
      this.interceptors?.requestIntercepterCatch
    )

    // 使用传递的响应拦截
    this.instance.interceptors.response.use(
      this.interceptors?.responseIntercepter,
      this.interceptors?.responseIntercepterCatch
    )

    this.commonRequestInterceptor()
  }

  // 共有拦截器
  private commonRequestInterceptor = () => {
    this.instance.interceptors.request.use(
      (config: IbaseInstanceConfig) => {
        console.log('公共请求拦截', config)
        // add token
        const token = sessionStorage.getItem('token')
        if (token && config.headers) {
          config.headers.Authorization = token
        }
        return config
      },
      (err) => {
        console.log('公共请求拦截错误', err)
        return Promise.reject(err)
      }
    )
  }

  // 共有响应拦截
  private commonResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        console.log('公共响应拦截', res)
        this.loading?.close()
        if (res.request.responseType == 'blob') {
          const size = res.headers['content-length']
          let name = res.headers['content-disposition'] ?? ''
          if (name) {
            const arr = name.split('filename=')
            name = arr.pop() ?? ''
          }

          return {
            responseType: 'blob',
            size,
            name,
            data: res.data,
            config: res.config,
            status: res.status,
            statusText: res.statusText,
            headers: res.headers
          }
        }

        return res
      },
      (err) => {
        console.log('公共响应拦截错误', err)
        this.loading?.close()
        return Promise.reject(err)
      }
    )
  }

  // 实例化每个请求的拦截
  request<T>(config: IbaseInstanceConfig): Promise<T> {
    console.log('每个请求拦截的参数', config)

    // 发送请求时控制是否显示加载框
    config.isLoading = config.isLoading ?? true
    if (config.isLoading) {
      // 发起请求时调用加载
      if (this.isLoading) {
        this.loading = ElLoading.service({
          lock: true,
          text: 'Loading',
          background: 'rgba(0, 0, 0, 0.7)'
        })
      }
    }
    return new Promise((resolve, reject) => {
      // 若无需单独配置拦截器，可直接使用实例自带请求
      if (config.interceptors?.requestIntercepter) {
        console.log('每个请求的拦截', config)
        config = config.interceptors.requestIntercepter(config)
      }
      this.instance.request<any, T>(config).then(
        (res) => {
          if (config.interceptors?.responseIntercepter) {
            console.log('每个响应的拦截', config)
            res = config.interceptors.responseIntercepter(res)
          }
          resolve(res)
        },
        (err) => {
          reject(err)
        }
      )
    })
  }

  post<T = any>(
    url: string,
    data: object = {},
    config: IbaseInstanceConfig = {}
  ) {
    return this.request<T>({
      url,
      method: 'POST',
      data,
      ...config
    })
  }

  get<T = any>(
    url: string,
    data: object = {},
    config: IbaseInstanceConfig = {}
  ) {
    return this.request<T>({
      url,
      method: 'GET',
      params: data,
      ...config
    })
  }

  delete<T = any>(
    url: string,
    data: object = {},
    config: IbaseInstanceConfig = {}
  ) {
    return this.request<T>({
      url,
      method: 'delete',
      params: data,
      ...config
    })
  }

  blob<T = any>(
    url: string,
    data: object = {},
    config: IbaseInstanceConfig = {}
  ) {
    return this.request<T>({
      url,
      method: 'GET',
      params: data,
      responseType: 'blob',
      ...config
    })
  }
}
export default BaseRequest
