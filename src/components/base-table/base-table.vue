<template>
  <div class="base-table">
    <el-table
      :data="tableData"
      v-bind="options"
      :header-cell-style="headerCellStyle"
      :row-style="rowStyle"
      @select="select"
      @select-all="selectAll"
    >
      <el-table-column
        v-if="options.select"
        type="selection"
        width="80"
        label-class-name="checkAll"
      />
      <el-table-column
        v-if="options.index"
        type="index"
        width="60"
        label="序号"
      />
      <template v-for="item in tableColumn" :key="item.property">
        <el-table-column
          :label="item.label"
          :property="item.property"
          v-bind="item.options"
        >
          <template #default="scope">
            <template v-if="item.slot">
              <slot :name="item.property" :row="scope.row"></slot>
            </template>
            <template v-else>{{ scope.row[item.property] }}</template>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { ITableColumn, ITable, Ianykey } from './config/config'
const emits = defineEmits(['selected'])

defineProps({
  tableData: {
    type: Array as PropType<object[]>,
    default: () => [{}]
  },
  tableColumn: {
    type: Array as PropType<ITableColumn[]>,
    default: () => [{}]
  },
  options: {
    type: Object as PropType<ITable>,
    default: () => ({
      select: false,
      index: false,
      border: true
    })
  },
  headerCellStyle: {
    type: Function as PropType<
      (data: {
        row: any
        rowIndex: number
        column: any
        columnIndex: number
      }) => Ianykey
    >,
    default: () => ({})
  },
  rowStyle: {
    type: Function as PropType<
      (data: { row: any; rowIndex: number }) => Ianykey
    >,
    default: () => ({})
  }
})

// 单选时触发的事件
const select = (value: any) => {
  emits('selected', value)
}
// 全选时触发的事件
const selectAll = (value: any) => {
  emits('selected', value)
}
</script>

<style lang="scss">
.base-table {
  .checkAll {
    position: relative;
    text-align: left !important;
  }

  .checkAll > .el-checkbox::after {
    color: #909399;
    font-size: 13px;
    font-weight: bold;
    content: '全选';
    display: block;
    position: absolute;
    z-index: 1;
    left: 20px;
  }
}
</style>
