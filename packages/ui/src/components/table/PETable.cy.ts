import { ref } from 'vue'
import PETable from './PETable.vue'

describe('PETable', () => {
  it('should must with table header', () => {
    cy.mount(PETable, {
      props: {
        modelValue: ref({
          dateType: 'regDt',
          dateFrom: '',
          dateTo: '',
          query: 'name',
          keyword: '',
          useYn: 'all',
        }),
        schema: {
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
          }
        }
      }
    })
    cy.get('th').contains('일자')
  })
})