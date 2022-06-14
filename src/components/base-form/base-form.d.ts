// 允许的表单元素
type itemType =
  | 'input'
  | 'select'
  | 'password'
  | 'textarea'
  | 'radio'
  | 'checkbox'
  | 'slot'
  | 'date'
  | 'daterange'

interface Idate {
  valueFormat: string
  startPlaceholder?: string
  endPlaceholder?: string
  editable?: boolean
  rangeSeparator?: string
}

interface Iselect {
  // 是否可筛选
  filterable?: boolean
  //是否允许用户创建新条目， 只有当 filterable 设置为 true 时才会生效。
  allowCreate?: boolean
  multiple?: boolean
  // 多选时是否将选中值按文字的形式展示
  collapseTags?: boolean
  // 当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签。 要使用此属性，collapse-tags属性必须设定为 true
  collapseTagsTooltip?: boolean
  // multiple 属性设置为 true 时，代表多选场景下用户最多可以选择的项目数， 为 0 则不限制
  multipleLimit?: number
}

interface Iother {
  // input | textarea
  maxlength?: string | number
  // 是否显示切换密码图标
  showPassword?: boolean
  // 输入框行数，仅 type 为 'textarea' 时有效
  rows?: number | string
  // textarea 高度是否自适应，仅 type 为 'textarea' 时生效。 可以接受一个对象，比如: { minRows: 2, maxRows: 6 }
  autosize?: boolean | object
  // 是否显示输入字数统计，只在 type = "text" 或 type = "textarea" 时有效
  showWordLimit?: boolean
}

// 单个表单元素属性
export interface IformItem {
  // 通用
  prop: string | string[]
  value: string | number
  label: string
  type: itemType
  slotName: string
  labelWidth?: string
  placeholder?: string
  disabled?: boolean
  // 默认一行三列布局，可先layout传空再传入span控制每行占的列数
  span?: number
  rules?: object
  // 是否使用layout布局
  useLayout?: boolean

  // select | radio | checkbox
  options?: {
    label: string
    value: string | number
    border?: boolean
  }[]
  // 日期
  dateOptions?: Idate
  // select
  selectOpstions?: Iselect
  otherOptions?: Iother
}

export interface IForm {
  formItemList: IformItem[]
}
