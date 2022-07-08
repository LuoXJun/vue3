import { RouteRecordRaw, RouterView } from 'vue-router'
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)',
    redirect: '/404'
  },
  {
    path: '/404',
    name: 'notFound',
    component: () => import('@/views/notFound/notfound.vue')
  },
  {
    path: '/',
    name: 'index',
    redirect: '/layout',
    meta: {
      title: 'index'
    },
    component: RouterView,
    children: [
      {
        path: 'layout',
        name: 'layout',
        meta: {
          title: 'layout',
          parent: 'index'
        },
        component: () => import('@/views/layout/layout.vue')
      },
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
