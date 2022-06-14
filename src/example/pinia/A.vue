<template>
  <div style="padding: 100px 0">
    <div>A兄弟组件</div>
    <div>
      <el-button @click="editName">修改名字</el-button>
      <el-button @click="editNameAge">修改名字和性别</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { baseStore } from '@/store/index'
const store = baseStore()

const editName = () => {
  // store.editName()
  store.name = '123'
}

const editNameAge = () => {
  // 对象形式
  // store.$patch({
  //   name: 'LXJ',
  //   sex: 'MEN'
  // })
  // 函数形式
  store.$patch((state) => {
    state.name = 'LXJ'
    state.sex = 'MEN'
  })
}
</script>

<style scoped></style>
