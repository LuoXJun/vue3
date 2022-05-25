import { ElMessageBox } from 'element-plus'
type MessageType = 'success' | 'warning' | 'error' | 'info'
export const useMessageBox = (
  prompt = '是否确认删除当前数据',
  title = '警告',
  type: MessageType = 'warning'
) => {
  return ElMessageBox.confirm(prompt, title, {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type
  })
}
