<template>
  <div class="base-upload">
    <base-upload-vue
      ref="uploadRef"
      :limit="limit"
      :list="list"
      :options="options"
      @remove="fileRemove"
      @auto-upload="autoUpload"
    >
      <span class="el-button el-button--primary">上传文件</span>
      <template #uploadBtn="scope">
        <el-button type="primary" @click="upload(scope.formData)">
          批量上传
        </el-button>
      </template>
    </base-upload-vue>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import baseUploadVue from '@/components/base-upload/base-upload.vue'
import { ILimit, IOptions, IList } from '@/components/base-upload/config/config'
import type { UploadUserFile } from 'element-plus'

const uploadRef = ref()
const limit: ILimit = {
  size: 5 * 1024 * 1024,
  type: 'both',
  numLimit: 5
}
const list = ref<IList[]>([
  {
    name: '123',
    url: 'https://img0.baidu.com/it/u=512340543,3139277133&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281'
  },
  {
    name: '555',
    url: 'https://img1.baidu.com/it/u=3384796346,381674655&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500'
  }
])

const options: IOptions = {
  name: 'file',
  autoUpload: true,
  multiple: true
}

const fileRemove = (file: any) => {
  //删除服务端数据
  uploadRef.value.deleteFile(file)
  list.value.splice(list.value.indexOf(file), 1)
  console.log(file)
}

const autoUpload = (file: UploadUserFile) => {
  // 每次添加文件后在此调用单文件上传接口
  console.log(file)
}

const upload = (value: any) => {
  console.log(value)
}
</script>

<style scoped></style>
