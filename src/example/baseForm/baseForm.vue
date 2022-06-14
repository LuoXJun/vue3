<template>
  <!-- 搜索栏常用一行三列布局 -->
  <div>
    <baseCardVue title="搜索">
      <baseFormVue
        ref="baseFormRef"
        v-model="modelValue"
        :form-item-list="formItemList"
      >
        <template #myInput>
          <el-input
            v-model="modelValue.myInput"
            type="text"
            clearable
            placeholder="myInput"
          />
        </template>
        <template #footer>
          <div class="button-group">
            <el-button type="primary" @click="searchData()">查询</el-button>
            <el-button type="primary" @click="reset(modelValue, ['checkbox'])">
              重置
            </el-button>
          </div>
        </template>
      </baseFormVue>
    </baseCardVue>
    <paginationVue v-model:pageInfo="pageInfo" :total="total" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import baseFormVue from '@/components/base-form/baseForm.vue'
import baseCardVue from '@/components/base-card/baseCard.vue'
import paginationVue from '@/components/pagination/pagination.vue'
import { formItemList } from './config/config'
import { getListApi } from '@/api/test/index'
const baseFormRef = ref()
const modelValue = ref({
  myInput: 123
})
const total = ref(20)
const pageInfo = ref({
  pageSize: 10,
  currentPage: 1
})

const searchData = async () => {
  baseFormRef.value.validate().then((res: boolean) => {
    console.log(res)
    console.log({ ...modelValue.value, ...pageInfo.value })
  })

  // 测试封装的请求
  const data = await getListApi({
    pageIndex: 1,
    pageSize: 10
  })
  console.log(data)
}

// 重置
const reset = (form: any, exclude: string[]) => {
  baseFormRef.value.reset(form, exclude)
}

watch(pageInfo, () => {
  searchData()
})
</script>

<style scoped></style>
