<!-- 在当前组件递归渲染数据 -->
<template>
  <el-menu
    :default-active="currentRoute.path"
    class="el-menu-vertical-demo"
    mode="vertical"
    router
    :collapse="isCollapse"
    unique-opened
    background-color="#3b3a48"
    text-color="#fff"
  >
    <leftMenuComponent :list="renderList" :parent-path="parentPath" />
  </el-menu>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import leftMenuComponent from '@/components/leftMenuComponent.vue'

defineProps({
  isCollapse: {
    type: Boolean,
    default: false
  }
})

// 当前路由
const currentRoute = useRoute()
console.log(currentRoute)

console.log(useRouter().getRoutes())

// 获取需要显示在菜单的路由
const routes = useRouter().options.routes
const layout = routes.filter((item: any) => {
  return item.name == 'layout'
})
const renderList = layout[0].children

const parentPath = '/'
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
}
</style>
