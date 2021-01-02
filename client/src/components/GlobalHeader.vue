<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light px-4" style="background-color: #e3f2fd;">
     <!-- justify-content-between -->
  <!-- <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4"> -->
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">新东莞培训机构教学管理系统</router-link>
      <!-- <ul class="list-inline mb-0">
        <li class="list-inline-item">
          <router-link to="/column/list" class="btn btn-outline-dark my-2">首页</router-link>
        </li>
        <li class="list-inline-item">
          <router-link to="/column/list" class="btn btn-outline-dark my-2">新闻</router-link>
        </li>
        <li class="list-inline-item">
          <router-link to="/column/list" class="btn btn-outline-dark my-2">培训信息</router-link>
        </li>
        <li class="list-inline-item">
          <router-link to="/column/list" class="btn btn-outline-dark my-2">联系我们</router-link>
        </li>
      </ul> -->
      <ul v-if="!user.isLogin" class="list-inline mb-0">
        <li class="list-inline-item">
          <router-link to="/login" class="btn btn-outline-dark my-2">登陆</router-link>
        </li>
        <li class="list-inline-item">
          <router-link to="/register" class="btn btn-outline-dark my-2">注册</router-link>
        </li>
      </ul>
      <ul v-else class="list-inline mb-0">
        <li class="list-inline-item">
          <!-- <a href="#" class="btn btn-outline-light my-2">你好 {{ user.name }}</a> -->
          <dropdown :title="`你好 ${user.name}`" style="color: black;">
            <dropdown-item><router-link to="/profile" class="dropdown-item">个人信息</router-link></dropdown-item>
            <dropdown-item :disabled="true"><a href="#" class="dropdown-item">编辑资料</a></dropdown-item>
            <dropdown-item><button @click="logout" class="dropdown-item">退出登录</button></dropdown-item>
          </dropdown>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import Dropdown from './Dropdown.vue'
import DropdownItem from './DropdownItem.vue'
export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}

export default defineComponent({
  name: 'GlobalHeader',
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  },
  components: {
    Dropdown,
    DropdownItem
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const logout = () => {
      router.push('/')
      store.commit('logout')
    }
    return {
      logout
    }
  }
})
</script>

<style>
</style>
