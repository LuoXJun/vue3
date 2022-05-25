<!-- 在当前组件递归渲染数据 -->
<template>
  <template v-for="(item, index) in list" :key="index">
    <!-- 含有子级 -->
    <el-sub-menu v-if="item.children" :index="parentPath + item.path">
      <template #title>
        <el-icon>
          <component :is="item.meta?.icon" />
        </el-icon>
        <span style="padding-left: 10px; box-sizing: border-box">
          {{ item.meta.title }}
        </span>
      </template>
      <leftMenuComponent
        :list="item.children"
        :parent-path="parentPath + item.path + '/'"
      ></leftMenuComponent>
    </el-sub-menu>
    <!-- 不含子级 -->
    <el-menu-item v-else-if="item.meta?.menu" :index="parentPath + item.path">
      <el-icon>
        <component :is="item.meta?.icon" />
      </el-icon>
      <span style="padding-left: 10px; box-sizing: border-box">
        {{ item.meta.title }}
      </span>
    </el-menu-item>
  </template>
</template>
<script setup lang="ts">
// 不想再路由中将路径写成/a/b/c的形式，需要在递归时带上父级路径
defineProps({
  list: {
    type: Object,
    default: null
  },
  parentPath: {
    type: String,
    default: null
  }
})
</script>
