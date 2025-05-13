<template>
  <Form>
    <table class="w-full my-[10px]">
      <tr v-for="(row, index) in schema" class="h-[56px]">
        <th
          class="w-[150px] p-[10px] border-[1px] border-[#e5e7eb] font-[400] text-xs bg-gray-100 text-left"
        >
          {{ row.label }}
        </th>
        <td class="p-[10px] border-[1px] border-[#e5e7eb]">
          <div class="flex w-full gap-2" v-if="row.schema">
            <template v-for="(c, name) in row.schema">
              <component
                v-if="c.type !== 'RadioButton'"
                v-model="modelValue[name]"
                class="flex-1 w-full"
                size="small"
                :is="PrimeVue[c.type]"
                v-bind="getAttrs(c)"
              />

              <div v-else-if="c.type === 'RadioButton'" class="flex flex-wrap gap-4">
                <div v-for="(label, index) in c.labels" class="flex items-center gap-2">
                  <RadioButton
                    v-model="modelValue[name]"
                    :inputId="`${name}-${index}`"
                    :value="c.values[index]"
                  />
                  <label :for="`${name}-${index}`" class="cursor-pointer">{{ label }}</label>
                </div>
              </div>
            </template>
          </div>
        </td>
      </tr>
    </table>
  </Form>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import * as PrimeVue from 'primevue'
import _cloneDeep from 'lodash.clonedeep'

const props = defineProps({
  schema: {
    type: Object,
    required: true,
  },
  modelValue: {
    type: Object,
    required: true,
  },
})

const modelValue = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})

const getAttrs = (c: any) => {
  let attrs = _cloneDeep(c)
  if (c.type === 'DatePicker') {
    attrs = {
      ...c,
      showIcon: true,
      fluid: true,
      iconDisplay: 'input',
    }
  } else if (c.type === 'Select') {
    attrs = {
      ...c,
      optionLabel: 'label',
      optionValue: 'value',
    }
  }
  return attrs
}

const ucfirst = (str: string): string => {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const getComponentName = (type: string) => ucfirst(type)
</script>
