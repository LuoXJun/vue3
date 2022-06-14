<!-- 类表格列表 -->
<template>
  <div class="base-list-class">
    <div class="base-list-title">
      <slot name="title"></slot>
    </div>
    <div class="base-list-container">
      <el-row>
        <el-row
          v-for="item in list"
          :key="item.label"
          class="base-list-box"
          :style="{ width: 100 / item.group + '%' }"
        >
          <el-col :span="item.span * item.group">
            <span>{{ item.label }}</span>
          </el-col>
          <el-col :span="24 - item.span * item.group">
            <span>{{ item.value }}</span>
          </el-col>
        </el-row>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
type IList = {
  label: string
  value: string
  // label长度
  span: number
  /**一行显示几组数据*/
  group: number
}
defineProps({
  list: {
    type: Array as PropType<IList[]>,
    default: () => [
      { label: 'testLabel', value: 'testValue', span: 4, group: 1 }
    ]
  }
})
</script>

<style lang="scss" scoped>
.base-list-class {
  margin: 20px 0;

  .base-list-container {
    border: 1px solid #caced1;
    border-bottom: 0;
    border-right: 0;

    .base-list-box {
      display: inline-flex;
      border-bottom: 1px solid #caced1;

      > .el-col {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        box-sizing: border-box;
        border-right: 1px solid #caced1;

        > span {
          line-height: 26px;
        }
      }

      > .el-col:first-child {
        background-color: #f3f7fd;
        text-align: center;
      }
    }
  }
}
</style>
