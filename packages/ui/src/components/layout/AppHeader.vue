<template>
  <header class="fixed z-10 top-0 left-0 flex items-center min-w-[360px] w-full h-[80px] bg-[#fff]">
    <div class="flex items-center justify-end w-full h-full">
      <p class="mr-5 text-xs">{{ admin?.name }} 님</p>
      <button mat-button color="primary" class="text-xs tracking-tight h-full" @click="logout">
        로그아웃
      </button>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

const isAdmin = computed(() => true)
const admin = ref<Admin>({
  id: 1,
  loginId: 'test',
  name: 'test',
  lastLoginDt: '2025-04-02T03:17:40.000Z',
  adminAuthGroupId: 1,
  adminAuthGroupName: '슈퍼관리자',
})

const toggleAsideToggle = () => {}

const toggleCollapsed = () => {}

const logout = () => {}
</script>
