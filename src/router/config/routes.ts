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
      },
      {
        path: 'v-viewer',
        name: 'v-viewer',
        meta: {
          title: 'v-viewer',
          parent: 'index'
        },
        component: () => import('@/example/v-viewer/v-viewer.vue')
      },
      {
        path: 'mitt',
        name: 'mitt',
        meta: {
          title: 'mitt',
          parent: 'index'
        },
        component: () => import('@/example/mitt/base_mitt.vue')
      },
      {
        path: 'pinia',
        name: 'pinia',
        meta: {
          title: 'pinia',
          parent: 'index'
        },
        component: () => import('@/example/pinia/base_pinia.vue')
      },
      {
        path: 'baseList',
        name: 'baseList',
        meta: {
          title: 'baseList',
          parent: 'index'
        },
        component: () => import('@/example/baseList/base_list.vue')
      }
    ]
  }
]
