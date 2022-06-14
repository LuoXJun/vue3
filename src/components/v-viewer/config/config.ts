type Tnum = 0 | 1 | 2 | 3 | 4
/**
 * click:自定义点击事件
 * 可用的内置键
 * “zoomIn”、“zoomOut”、“oneToOne”、“reset”、
 * “prev”、“play”、“next”、“rotateLeft”、
 * “rotateRight”、“flipHorizontal”、“flipVertical”。
 * 尺寸size："small", "medium" (default) and "large".
 */
interface Ishow {
  show: boolean | Tnum
  size: string
  click: () => void
}
export interface Ioptions {
  /**
   * 是否启用背景
   * */
  backdrop?: string | boolean
  /**
   * 是否显示右上角控制全屏的按钮
   * */
  button?: boolean
  /**
   * 开启行内模式，若关闭则组件将全屏遮罩（嵌入body）
   * */
  inline?: boolean
  /**
   *   是否显示导航条
   * */
  navbar?: boolean
  /**
   * 自定义组件类名
   * */
  className?: string
  /**
   * 定义初始化加载的图片索引 default ：0
   * */
  initialViewIndex?: number
  /**
   * 自动播放时的间隔时间 default:5000
   * */
  interval?: number
  /**
   * 启用键盘支持（全屏模式下有效）
   * */
  keyboard?: boolean
  loop?: boolean
  /**
   * inline模式下有效 default:minWidth:200,minHeight:100
   * */
  minWidth?: number
  minHeight?: number
  /**
   * 是否可拖动,旋转,翻转,缩放,缩放时显示比例,滚动滚轮时的缩放比例
   * */
  movable?: boolean
  rotatable?: boolean
  scalable?: boolean
  zoomable?: boolean
  tooltip?: boolean
  zIndex?: number
  zIndexInline?: number
  zoomRatio?: number
  minZoomRatio?: number
  maxZoomRatio?: number
  /**
   * 控制图片列表中单个图片的显示和隐藏
   * (image)=>boolean===参数image实例
   * */
  filter?: (image: any) => boolean
  /**
   * 选择将容器嵌入到哪里,默认body（line：false）时生效
   * */
  container?: HTMLElement | string
  /**
   * o | false 不显示图片名字
   * 1 | true | Array | Function显示名字
   * 2 大于768像素是显示
   * 3 大于992时显示
   * 4 大于1200时显示
   * Function 自定义当前图片名称===函数有两个参数image:图片元素，imageData:图片自身属性
   * 数字和函数==数字表示是否启用,函数表示内容
   * */
  title?: boolean | Tnum | (() => string) | [Tnum, () => string]
  /**
   * 工具条
   * 0 false 1 true
   * 2 大于768像素是显示
   * 3 大于992时显示
   * 4 大于1200时显示
   * {key:boolean | Tnum 指定工具显示隐藏}
   * {key:string}自定义工具大小
   * { key: () => void }自定义工具点击事件
   * */
  toolbar?:
    | boolean
    | Tnum
    | { key: boolean | Tnum }
    | { key: string }
    | { key: () => void }
    | { key: Ishow }

  /**
   * 参数为图像实例，返回地址需要是有效地址，或者返回图像自身拥有的属性，例如:alt
   * */
  url?: (image: any) => void
}
