type Turl = string | ArrayBuffer | null | undefined

export const useStreamToBase64 = (data: Blob | Blob[]) => {
  return new Promise((resolve, reject) => {
    const arr: Turl[] = []
    let num = 0
    if (data instanceof Array) {
      data.forEach((item) => {
        const fileReader = new FileReader()
        fileReader.readAsDataURL(item)
        fileReader.onload = (e) => {
          num += 1
          arr.push(e.target?.result)
          if (data.length == num) {
            resolve(arr)
          }
        }
        fileReader.onerror = () => {
          reject('base64文件转换出错')
        }
      })
    } else {
      let url: Turl
      const fileReader = new FileReader()
      fileReader.readAsDataURL(data)

      fileReader.onload = (e) => {
        url = e.target?.result
        resolve(url)
      }

      fileReader.onerror = () => {
        reject('base64文件转换出错')
      }
    }
  })
}
