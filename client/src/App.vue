<template>
<div>
  <global-header :user="currentUser" v-if="currentRoute.name != 'Login' && currentRoute.name != 'Register'" />
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  <router-view></router-view>
  <!-- <column-list :list="list" /> -->
  <!-- <footer class="text-center py-4 text-secondary bg-light mt-auto">
    <small>
      <ul class="list-inline mb-0">
        <li class="list-inline-item">© CR（charleschr.xyz）版权所有</li>
      </ul>
    </small>
  </footer> -->
</div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import 'bootstrap/dist/css/bootstrap.min.css'
// import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
// const currentUser: UserProps = {
//   isLogin: false,
//   name: 'chr'
// }
// const testData: ColumnProps[] = [
//   {
//     id: 1,
//     title: 'test1',
//     description: '这是test1专栏',
//     avatar: 'https://cn.vuejs.org/images/logo.png'
//   },
//   {
//     id: 2,
//     title: 'test2',
//     description: '这是test2专栏',
//     avatar: ''
//   },
//   {
//     id: 3,
//     title: 'test2',
//     description: '这是test2专栏',
//     avatar: 'https://cn.vuejs.org/images/logo.png'
//   },
//   {
//     id: 4,
//     title: 'test2',
//     description: '这是test2专栏',
//     avatar: 'https://cn.vuejs.org/images/logo.png'
//   }
// ]
export default defineComponent({
  name: 'App',
  components: {
    // HelloWorld,
    // ColumnList,
    GlobalHeader
  },
  setup() {
    const router = useRouter()
    const store = useStore()
    const currentUser = computed(() => store.state.user)
    return {
      // list: testData,
      currentUser,
      currentRoute: router.currentRoute
    }
  }
})
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
