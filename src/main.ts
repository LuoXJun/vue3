import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import { createPinia } from 'pinia'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { Boot } from '@wangeditor/editor'
import attachmentModule from '@wangeditor/plugin-upload-attachment'
// 注册上传插件，在页面中注册会导致页面刷新后重复注册的问题
Boot.registerModule(attachmentModule)
const app = createApp(App)

const store = createPinia()

app.use(ElementPlus, {
  locale: zhCn
})
app.use(store)
app.use(router)

app.mount('#app')
