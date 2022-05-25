<template>
  <div style="text-align: center">
    <el-button @click="test">useMessageBox</el-button>
  </div>
</template>

<script setup lang="ts">
import { useMessageBox } from '@/hooks/useMessageBox'
import { ElMessage } from 'element-plus'

const test = () => {
  useMessageBox()
    .then((res) => {
      console.log(res)
      ElMessage.success('操作成功')
    })
    .catch(() => {
      ElMessage.info('取消操作')
    })
}
</script>

<style scoped></style>
