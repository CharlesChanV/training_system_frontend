import { createApp } from 'vue'
// import { createStore } from 'vuex'
import App from './App.vue'
import { router } from './router'
import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

// const store = createStore({
//   state: {
//     count: 0
//   },
//   mutations: {
//     add(state) {
//       state.count++
//     }
//   }
// })
// console.log('store', store.state.count)
// store.commit('add')
// console.log('store', store.state.count)

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
