import { ref } from 'vue'
import { ITableColumn, ITable } from '@/components/base-table/config/config'
const options = ref<ITable>({
  index: true,
  select: true,
  border: true
})
const tableColumn = ref<ITableColumn[]>([
  {
    label: 'name',
    property: 'name',
    options: {
      minWidth: 120
    }
  },
  {
    label: 'sex',
    property: 'sex'
  },
  {
    label: '操作',
    property: 'operation',
    slot: true,
    options: {
      fixed: 'right',
      align: 'center'
    }
  }
])

export { tableColumn, options }
