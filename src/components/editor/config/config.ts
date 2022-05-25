import { IEditorConfig, IToolbarConfig } from '@wangeditor/editor'
const toolbarConfig: Partial<IToolbarConfig> = {
  insertKeys: {
    index: 23, // 自定义插入的位置(图片上传后面)
    keys: ['uploadAttachment'] // “上传附件”菜单
  }
}

const editorConfig: Partial<IEditorConfig> = {
  placeholder: '文本正文...',
  MENU_CONF: {
    uploadImage: {
      onBeforeUpload(file: any) {
        // file 选中的文件
        // 1. return file 或者 new 一个 file ，接下来将上传
        // 2. return false ，不上传这个 file
        return file
      },
      // 上传进度的回调函数
      onProgress(progress: number) {
        // progress 是 0-100 的数字
        console.log('progress', progress)
      },
      // 单个文件上传成功之后
      onSuccess(file: File, res: any) {
        console.log(`${file.name} 上传成功`, res)
      },
      // 单个文件上传失败
      onFailed(file: File, res: any) {
        console.log(`${file.name} 上传失败`, res)
      },
      // 上传错误，或者触发 timeout 超时
      onError(file: File, err: any, res: any) {
        console.log(`${file.name} 上传出错`, err, res)
      }
    }
  },
  // 在编辑器中，点击选中“附件”节点时，要弹出的菜单
  hoverbarKeys: {
    attachment: {
      menuKeys: ['downloadAttachment'] // “下载附件”菜单
    }
  }
}
export interface IEditor {
  readOnly?: boolean
  autoFocus?: boolean
  scroll?: boolean
  // 编辑器最大输入长度
  maxLength?: number
  MENU_CONF?: {
    // 修改默认字体颜色===会覆盖掉原有颜色集合
    color?: {
      colors: string[]
    }
    // 修改默认背景颜色===会覆盖掉原有颜色集合
    bgColor?: {
      colors: string[]
    }
    fontSize?: {
      fontSizeList: string[]
    }
    fontFamily?: {
      fontFamilyList: string[] | { name: string; value: string }
    }
    lineHeight?: {
      lineHeightList: string[]
    }
    emotion?: {
      emotions: any[]
    }
  }
}

export interface IUploadImage {
  server: string
  fieldName: string
  timeout: number
  // 大小限制
  maxFileSize?: number
  // 数量限制
  maxNumberOfFiles?: number
  allowedFileTypes?: string[] | []
  // 自定义上传参数，参数会被添加到 formData 中
  meta?: {
    token?: string
  }
  // 是否将meta中的参数拼接到地址中默认false
  metaWithUrl?: boolean
  // 自定义增加 http  header
  headers?: {
    Accept: string
  }
  // 跨域是否传递cookie,默认false
  withCredentials: boolean
}
export { toolbarConfig, editorConfig }
