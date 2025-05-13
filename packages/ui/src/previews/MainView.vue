<template>
  <div>
    <h1 class="text-[48px]">Previews</h1>

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
  dateType: 'regDt',
  dateFrom: '',
  dateTo: '',
  query: 'name',
  keyword: '',
  useYn: 'all',
}
const form = ref(defaultObject)
const schema = ref({
  dateContainer: {
    label: '일자',
    schema: {
      dateType: {
        type: 'Select',
        options: [
          {
            value: 'regDt',
            label: '등록일',
          },
          {
            value: 'expStartDt',
            label: '노출 시작일',
          },
          {
            value: 'expEndDt',
            label: '노출 종료일',
          },
        ],
        optionLabel: 'label',
        optionValue: 'value',
      },
      dateFrom: {
        type: 'DatePicker',
      },
      dateTo: {
        type: 'DatePicker',
      },
    },
  },
  keywordContainer: {
    label: '검색어',
    schema: {
      query: { type: 'Select', options: [{ label: '배너명', value: 'name' }] },
      keyword: { type: 'InputText' },
    },
  },
  useContainer: {
    label: '사용여부',
    schema: {
      useYn: {
        type: 'RadioButton',
        labels: ['전체', '사용', '사용안함'],
        values: ['all', 'y', 'n'],
      },
    },
  },
})
</script>
