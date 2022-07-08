<template>
  <div class="base-upload">
    <el-upload
      ref="upload"
      :auto-upload="false"
      class="upload-demo"
      action="#"
      :list-type="listType"
      :on-change="fileListChange"
      :on-remove="fileRemove"
      :before-remove="beforeRemove"
      :multiple="options.multiple"
      :file-list="fileList"
      :on-preview="preview"
    >
      <el-button type="primary" link>选择文件</el-button>
    </el-upload>
  </div>
  <el-dialog v-model="fileDialogVisiable" width="80%" append-to-body top="0vh">
    <iframe :src="src" width="100%" height="700px" frameborder="0"></iframe>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, PropType } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import type { UploadProps, UploadUserFile } from 'element-plus'
import { ILimit, IOptions, IList, TListType } from './config/config'
const emits = defineEmits(['remove', 'upload'])
const props = defineProps({
  // 后端返回的图片地址（用于回显并点击预览）
  list: {
    type: Array as PropType<IList[]>,
    default: () => []
  },
  limit: {
    type: Object as PropType<ILimit>,
    required: true,
    default: () => ({
      numLimit: 100,
      size: 5 * 1024 * 1024, //5m
      type: 'both'
    })
  },
  options: {
    type: Object as PropType<IOptions>,
    default: () => ({
      name: 'file',
      autoUpload: false,
      multiple: true
    })
  },
  listType: {
    type: String as PropType<TListType>,
    default: 'text'
  }
})
const fileList = ref<UploadUserFile[]>([])
// 判断传入文件数量是否超过限制
if (props.list.length > props.limit.numLimit!) {
  ElMessage.error('获取的文件数量超出文件列表长度长度限制')
}
// 合并文件列表
fileList.value.push(...props.list)
const fileDialogVisiable = ref(false)
const src = ref<string>()

// 函数

// 文件上传限制
const fileListChange: UploadProps['onChange'] = (file, list) => {
  // 限制上传大小
  let size = file.size
  if (size! > props.limit.size) {
    list.splice(list.indexOf(file), 1)
    return ElMessage.warning(
      `上传文件大小不能超过${props.limit.size / 1024 / 1024}M`
    )
  }

  // 限制上传类型
  if (props.limit.type != 'both') {
    let type = props.limit.type
    let fileType = file.name
      .substring(file.name.lastIndexOf('.') + 1)
      .toLowerCase()
    if (type.indexOf(fileType) == -1) {
      list.splice(list.indexOf(file), 1)
      ElMessage.warning(`请上传${type}格式的文件`)
    }
  }

  //   限制上传数量
  if (list.length > props.limit.numLimit!) {
    ElMessage.error('文件列表长度超出限制')
    list.pop()
  }

  // 每次添加文件都返回该文件给父组件处理
  emits('upload', { file, list })
}

const beforeRemove: UploadProps['beforeRemove'] = (file) => {
  return new Promise((res) => {
    ElMessageBox.confirm('是否确定删除当前文件', '警告', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
      .then(() => {
        // raw不存在则说明是父组件传递的地址,返回对象给父组件（父组件需要请求服务端删除服务端数据）
        if (!file.raw) return emits('remove', file)
        ElMessage.success('删除成功')
        res(true)
      })
      .catch(() => {
        ElMessage.info('取消删除')
      })
  })
}

// 删除
const fileRemove: UploadProps['onRemove'] = () => {
  console.log('文件删除成功')
}

// 预览
const preview: UploadProps['onPreview'] = (file) => {
  let url
  // 处理后端返回的文件地址和本地上传的文件地址
  if (file.raw) {
    url = window.URL.createObjectURL(file.raw)
  } else {
    url = file.url
  }
  src.value = url
  fileDialogVisiable.value = true
}

// 点击删除后传递当前file给父组件，父组件在服务端删除该文件，删除成功后调用该方法删除列表中的该文件
const deleteFile = (file: UploadUserFile) => {
  fileList.value.splice(fileList.value.indexOf(file), 1)
}

defineExpose({ deleteFile })
</script>

<style lang="scss"></style>
