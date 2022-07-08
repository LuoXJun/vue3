<template>
  <div class="base-v-viewer">
    <div v-if="images.length > 0">
      <div class="v-main">
        <viewer
          :images="images"
          :options="options"
          @inited="getInit"
          @ready="ready"
          @pre="pre"
        >
          <img
            v-for="item in images"
            :key="item.name"
            width="100%"
            height="500"
            :name="item.name"
            :src="item.url"
          />
        </viewer>
      </div>
    </div>
    <div v-else style="text-align: center; font-size: 24px">暂无数据</div>
  </div>
</template>

<script setup lang="ts">
import { ref, PropType } from 'vue'
import { component as viewer } from 'v-viewer'
import 'viewerjs/dist/viewer.css'
const emits = defineEmits(['init'])
interface Iimages {
  name: string
  url: string
}
defineProps({
  // 渲染的图片列表
  images: {
    type: Array as PropType<Iimages[]>,
    default: () => []
  },
  options: {
    type: Object,
    default: () => ({})
  }
})
const initObject = ref()

// 初始化图片加载器，获取实例对象
const getInit = (e: any) => {
  initObject.value = e
  emits('init', e)
}
const pre = (e: any) => {
  console.log(e)
}
// 初始化完成的事件
const ready = (e: any) => {
  console.log(e)
}

// 实例方法
</script>

<style lang="scss"></style>
