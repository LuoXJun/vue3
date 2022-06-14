import { AxiosRequestConfig } from 'axios'

export interface IbaseRequestConfig {
  requestIntercepter?: (config: AxiosRequestConfig) => AxiosRequestConfig
  responseIntercepter?: (res: any) => any
  requestIntercepterCatch?: (err: any) => any
  responseIntercepterCatch?: (err: any) => any
}

export interface IbaseInstanceConfig extends AxiosRequestConfig {
  interceptors?: IbaseRequestConfig
  isLoading?: boolean
}
