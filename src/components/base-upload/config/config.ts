// 文件上传限制
interface ILimit {
  // 单位b
  size: number
  type: string[] | 'both'
  //   限制上传个数，当上传个数达到限制数量时禁止添加文件
  numLimit: number
}
// 文件基本选项
interface IOptions {
  // formData.append时的名字，并非是文件名
  name: string
  //是否支持多选
  multiple: boolean
}
// 父组件传递地址列表格式
interface IList {
  name: string
  url: string
}

type TListType = 'picture-card' | 'picture' | 'text'

export type { ILimit, IOptions, IList, TListType }
