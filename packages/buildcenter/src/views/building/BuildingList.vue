<template>
  <div>
    <PageTitle />

    <SearchFilter>
      <PETable ref="form$" :schema="schema" v-model="form" />
    </SearchFilter>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { PageTitle, SearchFilter, PETable } from '@/components'

const form$ = ref(null)

const defaultObject = {
  dateType: 'regDt',
  dateFrom: '',
  dateTo: '',
  keyword: '',
}
</script>