import { ElLoading } from 'element-plus'
export const useLoading = (callback: () => void) => {
  const loading = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)'
  })
  try {
    callback()
  } finally {
    loading.close()
  }
}
