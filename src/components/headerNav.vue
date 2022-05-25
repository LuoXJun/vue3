<template>
  <div class="header-nav">
    <el-breadcrumb :separator-icon="ArrowRight">
      <template v-for="item in route.matched" :key="item.path">
        <el-breadcrumb-item v-if="item.meta.title">
          {{ item.meta.title }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
<style lang="scss" scoped>
.header-nav {
  display: flex;
  align-items: center;

  .el-breadcrumb {
    padding: 20px 0;
  }

  .logout {
    flex: 1;
    text-align: right;
    cursor: pointer;
  }
}
</style>
