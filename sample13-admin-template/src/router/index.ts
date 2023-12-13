import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'
import { Layout, getParentLayout } from '@/utils/routerHelper'
import { useI18n } from '@/hooks/web/useI18n'

const { t } = useI18n()

export const constantRouterMap: AppRouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard/analysis',
    name: 'Root',
    meta: {
      hidden: true
    }
  },
  {
    path: '/redirect',
    component: Layout,
    name: 'Redirect',
    children: [
      {
        path: '/redirect/:path(.*)',
        name: 'Redirect',
        component: () => import('@/views/Redirect/Redirect.vue'),
        meta: {}
      }
    ],
    meta: {
      hidden: true,
      noTagsView: true
    }
  },
  {
    path: '/login',
    component: () => import('@/views/Login/Login.vue'),
    name: 'Login',
    meta: {
      hidden: true,
      title: t('router.login'),
      noTagsView: true
    }
  },
  {
    path: '/404',
    component: () => import('@/views/Error/404.vue'),
    name: 'NoFind',
    meta: {
      hidden: true,
      title: '404',
      noTagsView: true
    }
  }
]

export const asyncRouterMap: AppRouteRecordRaw[] = [
  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard/analysis',
    name: 'Dashboard',
    meta: {
      title: t('router.dashboard'),
      icon: 'ant-design:dashboard-filled',
      alwaysShow: true
    },
    children: [
      {
        path: 'analysis',
        component: () => import('@/views/Dashboard/Analysis.vue'),
        name: 'Analysis',
        meta: {
          title: t('router.analysis'),
          noCache: true,
          affix: true
        }
      }
    ]
  },
  {
    path: '/components',
    component: Layout,
    name: 'ComponentsDemo',
    meta: {
      title: t('router.component'),
      icon: 'bx:bxs-component',
      alwaysShow: true
    },
    children: [
      {
        path: 'form',
        component: getParentLayout(),
        redirect: '/components/form/default-form',
        name: 'Form',
        meta: {
          title: t('router.form'),
          alwaysShow: true
        },
        children: [
          {
            path: 'use-form',
            component: () => import('@/views/Components/Form/UseFormDemo.vue'),
            name: 'UseForm',
            meta: {
              title: 'UseForm'
            }
          }
        ]
      },
      {
        path: 'image-viewer',
        component: () => import('@/views/Components/ImageViewer.vue'),
        name: 'ImageViewer',
        meta: {
          title: t('router.imageViewer')
        }
      }
    ]
  },

  {
    path: '/mynew-page1',
    component: Layout,
    redirect: '/error/404',
    name: 'MyNewPage1',
    meta: {
      title: t('router.myNewPage1'),
      icon: 'ci:error',
      alwaysShow: true
    },
    children: [
      {
        path: 'mynew-page1',
        component: () => import('@/views/MyNewPage1.vue'),
        name: 'MyNewPage1',
        meta: {
          title: '追加機能01-A'
        }
      }
    ]
  },
  {
    path: '/error',
    component: Layout,
    redirect: '/error/404',
    name: 'Error',
    meta: {
      title: t('router.errorPage'),
      icon: 'ci:error',
      alwaysShow: true
    },
    children: [
      {
        path: '404-demo',
        component: () => import('@/views/Error/404.vue'),
        name: '404Demo',
        meta: {
          title: '404'
        }
      },
      {
        path: '403-demo',
        component: () => import('@/views/Error/403.vue'),
        name: '403Demo',
        meta: {
          title: '403'
        }
      },
      {
        path: '500-demo',
        component: () => import('@/views/Error/500.vue'),
        name: '500Demo',
        meta: {
          title: '500'
        }
      }
    ]
  }
  // {
  //   path: '/authorization',
  //   component: Layout,
  //   redirect: '/authorization/user',
  //   name: 'Authorization',
  //   meta: {
  //     title: t('router.authorization'),
  //     icon: 'eos-icons:role-binding',
  //     alwaysShow: true
  //   },
  //   children: [
  //     {
  //       path: 'department',
  //       component: () => import('@/views/Authorization/Department/Department.vue'),
  //       name: 'Department',
  //       meta: {
  //         title: t('router.department')
  //       }
  //     },
  //     {
  //       path: 'user',
  //       component: () => import('@/views/Authorization/User/User.vue'),
  //       name: 'User',
  //       meta: {
  //         title: t('router.user')
  //       }
  //     },
  //     {
  //       path: 'menu',
  //       component: () => import('@/views/Authorization/Menu/Menu.vue'),
  //       name: 'Menu',
  //       meta: {
  //         title: t('router.menuManagement')
  //       }
  //     },
  //     {
  //       path: 'role',
  //       component: () => import('@/views/Authorization/Role/Role.vue'),
  //       name: 'Role',
  //       meta: {
  //         title: t('router.role')
  //       }
  //     }
  //   ]
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  strict: true,
  routes: constantRouterMap as RouteRecordRaw[],
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export const resetRouter = (): void => {
  const resetWhiteNameList = ['Redirect', 'Login', 'NoFind', 'Root']
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name && !resetWhiteNameList.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

export const setupRouter = (app: App<Element>) => {
  app.use(router)
}

export default router
