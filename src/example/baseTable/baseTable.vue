<template>
  <div class="baseTable">
    <baseTableVue
      :table-data="tableData"
      :table-column="tableColumn"
      :options="options"
      :header-cell-style="headerCellStyle"
      :row-style="rowStyle"
      @selected="selected"
    >
      <template #operation="scope">
        <el-button type="text" @click="edit(scope.row)">编辑</el-button>
        <el-button type="text">删除</el-button>
      </template>
    </baseTableVue>
  </div>
</template>

<script setup lang="ts">
import baseTableVue from '@/components/base-table/base-table.vue'
import { tableColumn, options } from './config/config'

const tableData = [
  {
    name: 'lxj',
    sex: '男',
    operation: 'operation'
  },
  {
    name: 'lj',
    sex: 'men',
    operation: 'operation'
  }
]
const selected = (value: any) => {
  console.log('选中的对象', value)
}
const edit = (row: any) => {
  console.log(row)
}
const headerCellStyle = ({ row, column, rowIndex, columnIndex }: any) => {
  // 表头背景色更改
  if (rowIndex == 0) return { color: '', backgroundColor: '#909090' }
}
const rowStyle = ({ row, rowIndex }: any) => {
  // 表头背景色更改 === 使用fixed的行不会被修改
  if (row.name == 'lxj') return { color: 'red', background: '#909090' }
}
</script>

<style scoped></style>
