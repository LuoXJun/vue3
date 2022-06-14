<template>
  <div class="me-card">
    <el-card :shadow="shadow" class="box-card">
      <template #header>
        <div class="card-header">
          <span :style="style">{{ title }}</span>
        </div>
      </template>
      <slot></slot>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
type TShadow = 'hover' | 'always' | 'never'
defineProps({
  title: {
    type: String,
    default: null
  },
  style: {
    type: Object as PropType<any>,
    default: () => ({
      color: '#000'
    })
  },
  shadow: {
    type: String as PropType<TShadow>,
    default: () => 'never'
  }
})
</script>

<style lang="scss" scoped>
.me-card {
  margin-bottom: 20px;
}
.card-header {
  color: #2183d8;
}
</style>
