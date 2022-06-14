import { saveAs } from 'file-saver'
import JSZip from 'jszip'
interface Iimg {
  name: string
  url: string
}
const zipFile = (imgs: Iimg[], identification: string) => {
  const zip = new JSZip() // 实例化zip
  const img = zip.folder('imgs') // zip包内的文件夹名字
  imgs.forEach((item) => {
    // imgs是含有图片的数据数组(去掉地址前面的标识==base64之前)
    const basePic = item.url.replace(identification, '') // 生成base64图片数据
    img!.file(item.name, basePic, { base64: true }) // 将图片文件加入到zip包内
  })
  zip
    .generateAsync({ type: 'blob' }) // zip下载
    .then(function (content) {
      saveAs(content, 'images.zip') // zip下载后的名字
    })
}
export { zipFile }
