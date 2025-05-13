<template>
  <div class="min-w-[360px] bg-[#f5f7fa]">
    <AppHeader />
    <AppAsideMenu class="max-md:hidden" :class="{ hidden: collapsed }" />

    <div class="relative w-full">
      <section class="w-full h-[100dvh] mt-[80px] p-[20px]">
        <div
          class="w-full h-full content-wrapper min-height-full max-md:pl-0"
          :class="{ 'pl-[280px]': !collapsed }"
        >
          <router-view />
        </div>
      </section>
    </div>
    <AppFooter />
  </div>
</template>

<script lang="ts" setup>
import { AppHeader, AppAsideMenu, AppFooter } from '@bynd/ui/components'

const props = defineProps({
  collapsed: {
    type: Boolean,
    required: false,
  },
})
</script>
