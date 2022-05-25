import { defineAsyncComponent, h } from 'vue'
import { RouterView } from 'vue-router'

// 加载子路由时，不渲染父级内容
export default function RouterReplaceComp(component: any) {
  return {
    comp: component,
    name: 'routeReplaceSelf',
    computed: {
      // 获取当前页面组件，并将当前组件改为自己的组件
      currentPage(this: any): boolean {
        //获取当前路由包括其父级路由，最后一个是当前路由
        const curComp = this.$route.matched[this.$route.matched.length - 1]
        // 当前渲染页面
        const curPage = curComp.components.default.comp
        return curPage === component
      }
    },
    render(this: any) {
      // defineAsyncComponent 创建一个在需要时才会加载的异步组件
      // 若为真，渲染页面，否则渲染为routerView作为子级出口
      return this.currentPage
        ? h(defineAsyncComponent(component))
        : h(RouterView)
    }
  }
}
