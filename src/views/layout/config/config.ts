import { IformItem } from '@/components/base-form/base-form'
import { ref } from 'vue'
const formItemList = ref<IformItem[]>([
  {
    slotName: 'name',
    label: '姓名',
    value: 'name',
    type: 'input',
    clearable: true,
    placeholder: '请选择123',
    span: 8
  },
  {
    slotName: 'select',
    label: 'select',
    value: 'select',
    type: 'select',
    placeholder: '测试动态select',
    span: 8,
    options: []
  },
  {
    slotName: 'radio',
    label: '单选',
    value: 'radio',
    type: 'radio',
    placeholder: '请选择123',
    options: [
      {
        label: 'af',
        value: 123
      },
      {
        label: 'asd',
        value: 45
      }
    ]
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
