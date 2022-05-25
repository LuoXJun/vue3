import { IformItem } from '@/components/base-form/base-form'
import { ref } from 'vue'
const formItemList = ref<IformItem[]>([
  {
    slotName: 'input',
    label: 'input',
    value: 'input',
    type: 'input',
    placeholder: 'input',
    span: 8,
    rules: [{ required: true, message: '必填项', trigger: 'blur' }]
  },
  {
    slotName: 'select',
    label: 'select',
    value: 'select',
    type: 'select',
    placeholder: 'select',
    span: 8,
    options: []
  },
  {
    slotName: 'date',
    label: 'date',
    value: 'date',
    type: 'date',
    placeholder: 'date',
    span: 8,
    dateOptions: {
      valueFormat: 'YYYY-MM-DD HH:mm:ss'
    }
  },
  {
    slotName: 'daterange',
    label: 'daterange',
    value: 'daterange',
    type: 'daterange',
    span: 8,
    dateOptions: {
      valueFormat: 'YYYY-MM-DD HH:mm:ss',
      startPlaceholder: '开始时间',
      endPlaceholder: '结束时间'
    }
  },
  {
    slotName: 'radio',
    label: 'radio',
    value: 'radio',
    type: 'radio',
    span: 8,
    options: [
      {
        label: 'radio1',
        value: 123
      },
      {
        label: 'radio2',
        value: 234
      }
    ]
  },
  {
    slotName: 'checkbox',
    label: 'checkbox',
    value: 'checkbox',
    type: 'checkbox',
    span: 8,
    options: [
      {
        label: 'checkbox1',
        value: 123,
        border: true
      },
      {
        label: 'checkbox2',
        value: 234,
        border: true
      }
    ]
  },
  {
    slotName: 'textarea',
    label: 'textarea',
    value: 'textarea',
    type: 'textarea',
    useLayout: false,
    span: 24
  },
  {
    slotName: 'myInput',
    label: 'slot',
    value: 'myInput',
    type: 'slot'
  }
])

setTimeout(() => {
  formItemList.value[1].options = [
    {
      label: 'test',
      value: 123
    }
  ]
}, 5000)

export { formItemList }
