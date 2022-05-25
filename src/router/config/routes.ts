import { RouteRecordRaw } from 'vue-router'
import routerReplace from '@/utils/tool/routerReplace'
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/:pathMatch(.*)',
    name: 'notFound',
    meta: {
      title: '404'
    },
    component: () => import('@/views/notFound/notFound.vue')
  },
  {
    path: '/',
    name: 'index',
    meta: {
      title: '主页'
    },
    component: routerReplace(() => import('@/views/layout/layout.vue')),
    children: [
      {
        path: 'wangEditor',
        name: 'wangEditor',
        meta: {
          title: 'wang富文本编辑器',
          parent: 'index'
        },
        component: () => import('@/example/EXwangEditor.vue')
      },
      {
        path: 'ElMessageBox',
        name: 'ElMessageBox',
        meta: {
          title: 'ElMessageBox',
          parent: 'index'
        },
        component: () => import('@/example/ElMessageBox.vue')
      },
      {
        path: 'baseForm',
        name: 'baseForm',
        meta: {
          title: 'baseForm',
          parent: 'index'
        },
        component: () => import('@/example/baseForm/baseForm.vue')
      },
      {
        path: 'baseTable',
        name: 'baseTable',
        meta: {
          title: 'baseTable',
          parent: 'index'
        },
        component: () => import('@/example/baseTable/baseTable.vue')
      },
      {
        path: 'baseUpload',
        name: 'baseUpload',
        meta: {
          title: 'baseUpload',
          parent: 'index'
        },
        component: () => import('@/example/baseUpload/baseUpload.vue')
      }
    ]
  }
]
