<template>
  <div class="vViewer">
    <vViewerVue
      :images="images"
      :thumbnail="thumbnail"
      :options="options"
      @init="init"
    />
  </div>
  <div>
    <!-- 参数表示是否循环 -->
    <el-button @click="Vviewer.prev(false)">上一张</el-button>
    <el-button @click="Vviewer.next(false)">下一张</el-button>
    <!-- 非行内模式下有效 -->
    <el-button @click="Vviewer.show(true)">显示</el-button>
    <el-button @click="Vviewer.hide(true)">隐藏</el-button>
    <el-button @click="Vviewer.view(1)">渲染第二张</el-button>
    <el-button @click="Vviewer.play()">播放</el-button>
    <el-button @click="Vviewer.stop()">停止</el-button>
    <el-button @click="Vviewer.full()">全屏</el-button>
    <el-button @click="Vviewer.exit()">退出全屏</el-button>
    <el-button @click="Vviewer.tooltip()">显示当前缩放百分比</el-button>
    <el-button @click="Vviewer.toggle()">原图/适应</el-button>
    <el-button @click="Vviewer.reset()">重置</el-button>
    <el-button @click="Vviewer.update()">更新视图</el-button>
    <el-button @click="Vviewer.destroy()">销毁实例</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import vViewerVue from '@/components/v-viewer/v-viewer.vue'
import { Ioptions } from '@/components/v-viewer/config/config'
import img from '@/assets/imgs/678556.jpg'
import img2 from '@/assets/imgs/1024249.jpg'
import img3 from '@/assets/imgs/1117304.png'
const Vviewer = ref()
const thumbnail = ref([
  { ipageNo: 123, url: img },
  { ipageNo: 234, url: img2 }
])
const images = ref([
  { name: 'img1', url: img },
  { name: 'img2', url: img2 },
  { name: 'img3', url: img3 }
])
const options = ref<Ioptions>({
  keyboard: true,
  zIndex: 9999,
  inline: true,
  navbar: true,
  backdrop: 'rgba(0, 0, 0, 80%)',
  button: true,
  className: 'myName',
  filter: (image) => {
    if (image.name == 'img') return false
    return true
  },
  title: [
    1,
    () => {
      return '自定义的图片名字'
    }
  ],
  url: (image) => {
    if (image.name == 'img2') return img3
  }
})

const init = (viewer: any) => {
  Vviewer.value = viewer
}
</script>

<style lang="scss" scoped></style>
