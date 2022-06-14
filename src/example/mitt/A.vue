<template>
  <div style="padding: 100px 0">
    <div>A兄弟组件</div>
    <el-button @click="send">传递事件</el-button>
  </div>
</template>

<script setup lang="ts">
import _MITT from '@/utils/mitt/index'

const send = () => {
  _MITT.emit('sendMsg', '我是A组件传来的值')
}
</script>

<style scoped></style>
