<template>
  <div calss="base-list-class">
    <baseList :list="list" />
  </div>
</template>

<script setup lang="ts">
import baseList from '@/components/base_list/base_list.vue'
const list = [
  { label: 'title', value: 'content', group: 1, span: 4 },
  { label: 'title', value: 'content', group: 2, span: 4 },
  { label: 'title', value: 'content', group: 2, span: 4 },
  { label: 'title', value: 'content', group: 3, span: 4 },
  { label: 'title', value: 'content', group: 3, span: 4 },
  { label: 'title', value: 'content', group: 3, span: 4 }
]
</script>

<style scoped></style>
