import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login'),
    hidden: true,
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/403'),
    hidden: true,
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404'),
    hidden: true,
  },
]
export const asyncRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    meta: {
      title: '首页',
      icon: 'home-4-line',
      affix: true,
    },
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('@/views/index'),
        meta: {
          title: '首页',
          icon: 'home-4-line',
          affix: true,
        },
      },
    ],
  },
  {
    path: '/trainer',
    component: Layout,
    redirect: '/trainer/table',
    alwaysShow: true,
    meta: {
      title: '培训师管理',
      icon: 'home-4-line',
    },
    children: [
      {
        path: 'table',
        name: 'TrainerTable',
        component: () => import('@/views/trainer/table'),
        meta: {
          title: '培训师列表',
          icon: 'home-4-line',
        },
      },
      {
        path: 'add',
        name: 'TrainerAdd',
        component: () => import('@/views/trainer/add'),
        meta: {
          title: '新增培训师',
          icon: 'home-4-line',
        },
      },
    ],
  },
  {
    path: '/student',
    component: Layout,
    redirect: '/student/table',
    alwaysShow: true,
    meta: {
      title: '学员管理',
      icon: 'home-4-line',
    },
    children: [
      {
        path: 'table',
        name: 'StudentTable',
        component: () => import('@/views/student/table'),
        meta: {
          title: '学员列表',
          icon: 'home-4-line',
        },
      },
      {
        path: 'add',
        name: 'StudentAdd',
        component: () => import('@/views/student/add'),
        meta: {
          title: '新增学员',
          icon: 'home-4-line',
        },
      },
    ],
  },
  {
    path: '/trainingCourse',
    component: Layout,
    redirect: '/trainingCourse/table',
    alwaysShow: true,
    meta: {
      title: '课程管理',
      icon: 'home-4-line',
    },
    children: [
      {
        path: 'table',
        name: 'TrainingCourseTable',
        component: () => import('@/views/trainingCourse/table'),
        meta: {
          title: '课程列表',
          icon: 'home-4-line',
        },
      },
      {
        path: 'add',
        name: 'TrainingCourseAdd',
        component: () => import('@/views/trainingCourse/add'),
        meta: {
          title: '新增课程',
          icon: 'home-4-line',
        },
      },
    ],
  },
  {
    path: '/trainingInformation',
    component: Layout,
    redirect: '/trainingInformation/table',
    alwaysShow: true,
    meta: {
      title: '培训信息管理',
      icon: 'home-4-line',
    },
    children: [
      {
        path: 'table',
        name: 'TrainingInformationTable',
        component: () => import('@/views/trainingInformation/table'),
        meta: {
          title: '培训信息列表',
          icon: 'home-4-line',
        },
      },
    ],
  },
  {
    path: '/news',
    component: Layout,
    redirect: '/news/table',
    alwaysShow: true,
    meta: {
      title: '新闻管理',
      icon: 'home-4-line',
    },
    children: [
      {
        path: 'table',
        name: 'NewsTable',
        component: () => import('@/views/news/table'),
        meta: {
          title: '新闻列表',
          icon: 'home-4-line',
        },
      },
    ],
  },
  {
    path: '/trainingClass',
    component: Layout,
    redirect: '/trainingClass/table',
    alwaysShow: true,
    meta: {
      title: '培训班管理',
      icon: 'home-4-line',
    },
    children: [
      {
        path: 'table',
        name: 'TrainingClassTable',
        component: () => import('@/views/trainingClass/table'),
        meta: {
          title: '培训班列表',
          icon: 'home-4-line',
        },
      },
    ],
  },
  {
    path: '/vab',
    component: Layout,
    redirect: '/vab/table',
    alwaysShow: true,
    meta: {
      title: '组件',
      icon: 'apps-line',
    },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/vab/table'),
        meta: {
          title: '表格',
          icon: 'table-2',
        },
      },
      {
        path: 'icon',
        name: 'Icon',
        component: () => import('@/views/vab/icon'),
        meta: {
          title: '图标',
          icon: 'remixicon-line',
        },
      },
    ],
  },
  {
    path: '/user',
    component: Layout,
    redirect: '/user/profile',
    meta: {
      title: '个人信息',
      icon: 'test-tube-line',
    },
    children: [
      {
        path: 'profile',
        name: 'ProfileIndex',
        component: () => import('@/views/user/profile'),
        meta: {
          title: '个人信息',
          icon: 'test-tube-line',
        },
      },
    ],
  },
  {
    path: '/test',
    component: Layout,
    redirect: '/test/test',
    meta: {
      title: '动态路由测试',
      icon: 'test-tube-line',
    },
    children: [
      {
        path: 'test',
        name: 'Test',
        component: () => import('@/views/test'),
        meta: {
          title: '动态路由测试',
          icon: 'test-tube-line',
        },
      },
    ],
  },
  {
    path: '/error',
    name: 'Error',
    component: Layout,
    redirect: '/error/403',
    meta: {
      title: '错误页',
      icon: 'error-warning-line',
    },
    children: [
      {
        path: '403',
        name: 'Error403',
        component: () => import('@/views/403'),
        meta: {
          title: '403',
          icon: 'error-warning-line',
        },
      },
      {
        path: '404',
        name: 'Error404',
        component: () => import('@/views/404'),
        meta: {
          title: '404',
          icon: 'error-warning-line',
        },
      },
    ],
  },
  {
    path: '/*',
    redirect: '/404',
    hidden: true,
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
})

export default router
