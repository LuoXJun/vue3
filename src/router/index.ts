import { createRouter, createWebHistory } from 'vue-router'
// 默认使用路由
import { routes } from './config/routes'

const router = createRouter({
  history: createWebHistory(),
  routes
})

// const whiteList = ['/login']

// router.beforeEach((to, from, next) => {
//   const token = sessionStorage.getItem('token')
//   if (token) {
//     next()
//   } else {
//     if (whiteList.indexOf(to.path) !== -1) {
//       next()
//     } else {
//       router.replace('/login')
//     }
//   }
// })
export default router
