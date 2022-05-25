import type { AxiosRequestConfig } from 'axios'

export interface MuRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: any) => any
  responseInterceptorCatch?: (error: any) => any
}

export interface MuRequestConfig extends AxiosRequestConfig {
  interceptors?: MuRequestInterceptors
  isLoading?: boolean
}
