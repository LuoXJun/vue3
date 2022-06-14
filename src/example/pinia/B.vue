<template>
  <div>
    <div>B兄弟组件</div>
    <div>{{ store.name }}</div>
    <div>{{ store.getName }}</div>
    <div>{{ store.getSex }}</div>
  </div>
</template>

<script setup lang="ts">
import { baseStore } from '@/store'
const store = baseStore()
</script>

<style scoped></style>
