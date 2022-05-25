import request from '@/utils/request/index'

export const loginApi = (data: any) => {
  return request.post('/', data)
}
