<template>
  <div class="base-pagination">
    <el-pagination
      :current-page="pageInfo.currentPage"
      :page-size="pageInfo.pageSize"
      :page-sizes="pageSizes"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @update:current-page="handleCurrentChange($event)"
      @update:page-size="handleSizeChange($event)"
    />
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { IPageInfo } from './config/config'
const emits = defineEmits(['update:pageInfo'])
const props = defineProps({
  pageInfo: {
    type: Object as PropType<IPageInfo>,
    default: () => ({
      pageSize: 10,
      currentPage: 1
    })
  },
  total: {
    type: Number,
    default: () => 0
  },
  pageSizes: {
    type: Array as PropType<number[]>,
    default: () => [10, 20, 40, 50]
  }
})

const handleCurrentChange = (val: number) => {
  emits('update:pageInfo', { ...props.pageInfo, currentPage: val })
}
const handleSizeChange = (val: number) => {
  emits('update:pageInfo', { ...props.pageInfo, pageSize: val })
}
</script>

<style lang="scss" scoped>
.base-pagination {
  .el-pagination {
    justify-content: flex-end;
    padding: 10px 20px;
  }
}
</style>
