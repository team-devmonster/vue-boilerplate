<template>
  <Panel
    toggleable
    :pt="{
      header: '!border-b-[1px] !border-[#d1d5db]',
    }"
  >
    <template #header>
      <div class="flex items-center gap-2">
        <i class="fa-solid fa-filter"></i>
        <span>검색 필터</span>
      </div>
    </template>
    <template #footer>
      <div class="w-full max-w-lg mx-auto">
        <div class="flex items-center justify-center gap-2">
          <Button class="block w-full h-auto py-2 !text-sm" @click="$emit('search')">검색</Button>
          <Button
            severity="secondary"
            class="block w-full h-auto py-2 !text-sm"
            @click="$emit('reset')"
            >초기화</Button
          >
        </div>
      </div>
    </template>
    <slot />
  </Panel>
</template>

<script lang="ts" setup>
const emit = defineEmits(['search', 'reset'])
</script>
