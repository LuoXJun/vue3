<template>
  <div class="wangEditor">
    <wang-editor-vue @get-editor="getEditor">
      <div>
        <el-button type="primary" @click="insertText()">插入文本</el-button>
        <el-button type="primary" @click="insertHtml()">插入html</el-button>
        <el-button disabled @click="handleTab()">按下tab行为</el-button>
        <el-button type="primary" @click="getHtml()">获取html</el-button>
      </div>
    </wang-editor-vue>
  </div>
</template>

<script setup lang="ts">
import wangEditorVue from '@/components/editor/wangEditor.vue'
import { IDomEditor } from '@wangeditor/editor'
import { shallowRef } from 'vue'
const editorRef = shallowRef()

const getEditor = (editor: IDomEditor) => {
  editorRef.value = editor
}

const insertText = () => {
  editorRef.value.insertText('123')
}
const insertHtml = () => {
  editorRef.value.dangerouslyInsertHtml('<a>我是a标签渲染出来的</a>')
}
const handleTab = () => {
  editorRef.value.handleTab = () => {
    console.log(123)
  }
}
const getHtml = () => {
  console.log(editorRef.value.getHtml())
}
</script>

<style lang="scss" scoped>
.wangEditor {
  box-sizing: border-box;
}
</style>
