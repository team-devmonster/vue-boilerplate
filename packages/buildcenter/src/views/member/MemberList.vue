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
import { PageTitle, SearchFilter, PETable } from '@bynd/ui/components'

const form$ = ref(null)

const defaultObject = {
  keyword: '',
  query: 'all',
}

const form = ref(defaultObject)
const schema = ref({
  keywordContainer: {
    label: '검색어',
    schema: {
      keyword: { type: 'InputText' },
      query: {
        type: 'Select',
        options: [{ label: '권한: 전체', value: 'all' }],
        class: 'w-[250px]',
      },
    },
  },
})
</script>
<style lang="scss" scoped></style>
