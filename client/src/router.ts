import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'
import HelloWorld from './components/HelloWorld.vue'
import ColumnDetail from './views/ColumnDetail.vue'
import News from './views/News.vue'
import CourseDetail from './views/CourseDetail.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import ColumnList from './components/ColumnList.vue'
import Profile from './views/Profile.vue'
import store from './store'
const routerHistory = createWebHashHistory()
export const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/column/detail/:id',
      name: 'ColumnDetail',
      component: ColumnDetail
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/column/list',
      name: 'ColumnList',
      component: ColumnList
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/courseDetail',
      name: 'CourseDetail',
      component: CourseDetail
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
// router.beforeEach((to, from, next) => {
//   if (to.name !== 'login' && to.name !== '/' && !store.state.user.isLogin) {
//     next({ name: 'Login' })
//   } else {
//     next()
//   }
// })
