<template>
  <footer></footer>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { usePageStore } from '@bynd/buildcenter/stores'

const pageStore = usePageStore()

const collapsed = computed(() => pageStore.collapsed)
</script>
