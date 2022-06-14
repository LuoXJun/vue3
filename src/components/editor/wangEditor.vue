<template>
  <div class="wangEditor">
    <Toolbar
      class="toolbar"
      :editor="editorRef"
      :default-config="toolbarConfig"
      :mode="mode"
    />
    <slot></slot>
    <Editor
      v-model="valueHtml"
      class="lxj-editor"
      :default-config="{ ...editorConfig, ...editorOptios }"
      :mode="mode"
      @on-created="handleCreated"
      @on-change="handleChange"
      @on-destroyed="handleDestroyed"
      @custom-paste="customPaste"
    />
  </div>
</template>

<script setup lang="ts">
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { onBeforeUnmount, ref, shallowRef, PropType } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { IDomEditor } from '@wangeditor/editor'
import {
  editorConfig,
  toolbarConfig,
  IEditor,
  IUploadImage
} from './config/config'
const emits = defineEmits(['getEditor'])
const props = defineProps({
  editorOptios: {
    type: Object as PropType<IEditor>,
    default: () => ({})
  },
  uploadImage: {
    type: Object as PropType<IUploadImage>,
    default: () => ({
      server: '/dev',
      fieldName: 'file',
      timeout: 60000
    })
  },
  // 自定义上传文件
  customInsert: {
    type: Function,
    default: (
      res: any,
      insertFn: (url: string, alt: string, href: string) => void
    ) => {
      // 从 res 中找到 url==地址 alt==描述 href=链接 ，然后插图图片
      insertFn(res.url, res.alt, res.href)
    }
  }
})

// 合并图片上传配置
if (editorConfig.MENU_CONF) {
  editorConfig.MENU_CONF['uploadImage'] = {
    server: props.uploadImage.server,
    fieldName: props.uploadImage.fieldName,
    customInsert: props.customInsert
  }
}

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()
// 内容 HTML
const valueHtml = ref('<div></div>')
const mode = 'default'

const handleCreated = (editor: IDomEditor) => {
  editorRef.value = editor // 记录 editor 实例
  emits('getEditor', editor)
}

const handleChange = (editor: IDomEditor) => {
  console.log('change:', editor.children)
}
const handleDestroyed = (editor: IDomEditor) => {
  console.log('destroyed', editor)
}
const customPaste = (
  editor: IDomEditor,
  event: any,
  callback: (value: boolean) => boolean
) => {
  console.log('ClipboardEvent 粘贴事件对象', event)
  // const html = event.clipboardData.getData('text/html') // 获取粘贴的 html
  // const text = event.clipboardData.getData('text/plain') // 获取粘贴的纯文本
  // const rtf = event.clipboardData.getData('text/rtf') // 获取 rtf 数据（如从 word wsp 复制粘贴）

  // 自定义插入内容
  // editor.insertText('xxx')

  // // 返回 false ，阻止默认粘贴行为
  // event.preventDefault()
  callback(false) // 返回值（注意，vue 事件的返回值，不能用 return）

  // 返回 true ，继续默认的粘贴行为
  // callback(true)
}

onBeforeUnmount(() => {
  if (editorRef.value == null) return
  editorRef.value.destroy()
})
</script>

<style lang="scss">
.wangEditor {
  height: 100%;
  background-color: #f5f5f5;
  .toolbar {
    box-shadow: 0 2px 10px rgb(0 0 0 / 12%);
  }
  .lxj-editor {
    height: calc(100% - 120px) !important;
    .w-e-text-container {
      width: 70vw;
      min-width: 900px;
      margin: 0 auto;
      margin-top: 20px;
      box-shadow: 0 2px 10px rgb(0 0 0 / 12%);
      min-height: 10px;
    }
  }
}
</style>
