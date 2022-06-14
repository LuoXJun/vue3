<template>
  <div>
    <div>B兄弟组件</div>
    <el-button>传递事件</el-button>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount } from 'vue'
import _MITT from '@/utils/mitt/index'

_MITT.on('sendMsg', (value) => {
  console.log(value)
})

onBeforeUnmount(() => {
  _MITT.off('sendMSg')
})
</script>

<style scoped></style>
