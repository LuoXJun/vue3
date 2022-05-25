<template>
  <div class="wangEditor">
    <wang-editor-vue @get-editor="getEditor" />
  </div>
</template>

<script setup lang="ts">
import wangEditorVue from '@/components/editor/wangEditor.vue'
import { IDomEditor } from '@wangeditor/editor'
import { shallowRef } from 'vue'
const editorRef = shallowRef()

const getEditor = (editor: IDomEditor) => {
  editorRef.value = editor
  console.log(editorRef)
  setTimeout(() => {
    editorRef.value.insertText('<p>123</p>')
  }, 1000)

  console.log(editorRef.value.getHtml())
}
</script>

<style lang="scss" scoped>
.wangEditor {
  box-sizing: border-box;
}
</style>
