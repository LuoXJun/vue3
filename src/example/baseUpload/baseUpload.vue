<template>
  <div class="base-upload">
    <base-upload-vue
      ref="uploadRef"
      :limit="limit"
      :list="list"
      :options="options"
      @remove="fileRemove"
      @upload="uploadFile"
    ></base-upload-vue>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import baseUploadVue from '@/components/base-upload/base-upload.vue'
import { ILimit, IOptions, IList } from '@/components/base-upload/config/config'

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
  multiple: true
}

const fileRemove = (file: any) => {
  //删除服务端数据
  uploadRef.value.deleteFile(file)
  list.value.splice(list.value.indexOf(file), 1)
  console.log(file)
}

// 上传
const uploadFile = (fileObj: any) => {
  console.log(fileObj)
  // // 构建上传文件数据
  // let formData = new FormData()
  // fileList.value.forEach((item) => {
  //   if (item.raw) {
  //     // 未上传服务端的文件  ===   父组件返回的服务端地址（无需再次上传）
  //     formData.append(
  //       props.options.name,
  //       new File(
  //         [item.raw],
  //         item.name.replace(/\s*/g, '').replace(/\(|\)/g, '')
  //       )
  //     )
  //   }
  // })
}
</script>

<style lang="scss"></style>
