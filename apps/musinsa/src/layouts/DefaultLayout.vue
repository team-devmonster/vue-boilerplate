<template>
  <div class="min-w-[360px]">
    <AppHeader />
    <AppAsideMenu class="max-md:hidden" :class="{ hidden: collapsed }" />

    <div class="relative w-full bg-[##F1F1F5]">
      <section class="w-full h-[100dvh] mt-[80px] p-[20px] bg-[#f5f7fa]">
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
import { AppHeader, AppFooter } from "@bynd/ui/components";
import { AppAsideMenu } from "@app/components/";

const props = defineProps({
  collapsed: {
    type: Boolean,
    required: false,
  },
});
</script>
