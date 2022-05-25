<template>
  <el-button type="primary" @click="router.push('/')">登录</el-button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
sessionStorage.setItem('token', '123')
</script>

<style scoped></style>
