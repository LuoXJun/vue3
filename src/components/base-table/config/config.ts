export interface ITable {
  border?: boolean
  select?: boolean
  index?: boolean
}
export interface Ianykey {
  [key: string | number]: string
}
export interface ITableColumn {
  // 同时是使用的slot插槽名称
  property: string
  label: string
  slot?: boolean
  options?: {
    align?: 'center' | 'left' | 'right'
    minWidth?: number | string
    width?: number | string
    height?: number
    fixed?: 'left' | 'right'
    //   当内容过长被隐藏时显示
    showOverflowTooltip?: boolean
  }
}
