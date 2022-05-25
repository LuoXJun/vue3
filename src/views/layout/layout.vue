<template>
  <router-view></router-view>
  <el-link
    v-for="item in target"
    :key="item.name"
    @click="
      router.push({
        path: item.path
      })
    "
  >
    {{ item.name }}
  </el-link>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { reactive } from 'vue'

const router = useRouter()
const routes = router.getRoutes()
const target = reactive<any[]>([])

routes.forEach((item: any) => {
  item.meta.parent == 'index' ? target.push(item) : ''
})
</script>

<style lang="scss">
.el-link {
  padding: 10px 20px;
  font-size: 16px;
  color: #000;
  display: block;
}
</style>
