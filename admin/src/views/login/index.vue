<template>
  <div class="login-container">
    <a-row v-if="isLogin">
      <a-col :xs="0" :md="0" :sm="12" :lg="14" :xl="16"></a-col>
      <a-col :xs="24" :sm="24" :md="12" :lg="10" :xl="6">
        <div class="login-container-form">
          <div class="login-container-hello">hello!</div>
          <div class="login-container-title">欢迎来到 {{ title }}</div>
          <a-form :model="form" @submit="handleSubmit" @submit.prevent>
            <a-form-item>
              <a-input v-model:value="form.username" placeholder="Username">
                <template v-slot:prefix>
                  <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
                </template>
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input
                v-model:value="form.password"
                type="password"
                placeholder="Password"
              >
                <template v-slot:prefix>
                  <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
                </template>
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-button
                type="primary"
                html-type="submit"
                :disabled="form.username === '' || form.password === ''"
              >
                登录
              </a-button>
            </a-form-item>
            <a-form-item>
              <a-button type="default" @click="isLogin = false">
                无账号
              </a-button>
            </a-form-item>
          </a-form>
        </div>
      </a-col>
    </a-row>
    <a-row v-else>
      <a-col :xs="0" :md="0" :sm="12" :lg="14" :xl="16"></a-col>
      <a-col :xs="24" :sm="24" :md="12" :lg="10" :xl="6">
        <div class="login-container-form">
          <div class="login-container-hello">注册!</div>
          <div class="login-container-title">欢迎来到 {{ title }}</div>
          <a-form :model="registerForm">
            <a-form-item>
              <a-input
                v-model:value="registerForm.username"
                placeholder="用户名"
              >
                <template v-slot:prefix>
                  <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
                </template>
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input v-model:value="registerForm.name" placeholder="姓名">
                <template v-slot:prefix>
                  <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
                </template>
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input
                v-model:value="registerForm.phone"
                placeholder="联系方式"
              >
                <template v-slot:prefix>
                  <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
                </template>
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-select
                v-model:value="registerForm.role"
                style="width: 120px"
                ref="select"
                allowClear="true"
                placeholder="角色"
              >
                <a-select-option value="ADMIN">管理员</a-select-option>
                <a-select-option value="TEACHER">培训师</a-select-option>
                <a-select-option value="STUDENT">学生</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item>
              <a-input
                v-model:value="registerForm.password"
                type="password"
                placeholder="密码"
              >
                <template v-slot:prefix>
                  <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
                </template>
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-button
                type="primary"
                :disabled="
                  registerForm.username === '' || registerForm.password === ''
                "
                @click="submitRegister"
              >
                注册
              </a-button>
            </a-form-item>
          </a-form>
        </div>
      </a-col>
    </a-row>
    <!-- <div class="login-container-tips">
      基于vue{{ dependencies['vue'] }}
      + ant-design-vue
      {{ dependencies['ant-design-vue'] }}开发
    </div> -->
  </div>
</template>
<script>
  import { dependencies, devDependencies } from '*/package.json'
  import { mapActions, mapGetters } from 'vuex'
  import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
  import { register } from '@/api/user'
  import { message } from 'ant-design-vue'

  export default {
    name: 'Login',
    components: {
      UserOutlined,
      LockOutlined,
    },
    data() {
      return {
        form: {
          username: '',
          password: '',
        },
        registerForm: {
          username: '',
          name: '',
          email: '',
          role: undefined,
          password: '',
        },
        redirect: undefined,
        dependencies: dependencies,
        devDependencies: devDependencies,
        isLogin: true,
      }
    },
    computed: {
      ...mapGetters({
        logo: 'settings/logo',
        title: 'settings/title',
      }),
    },
    watch: {
      $route: {
        handler(route) {
          this.redirect = (route.query && route.query.redirect) || '/'
        },
        immediate: true,
      },
    },
    mounted() {
      this.form.username = 'admin'
      this.form.password = '123456'
      // setTimeout(() => {
      //   this.handleSubmit()
      // }, 3000)
    },
    methods: {
      ...mapActions({
        login: 'user/login',
      }),
      handleRoute() {
        return this.redirect === '/404' || this.redirect === '/403'
          ? '/'
          : this.redirect
      },
      async handleSubmit() {
        await this.login(this.form)
        await this.$router.push(this.handleRoute())
      },
      submitRegister() {
        console.log(this.registerForm)
        register(this.registerForm).then((response) => {
          message.success(response.message)
          this.registerForm = {
            username: '',
            name: '',
            email: '',
            role: undefined,
            password: '',
          }
          this.isLogin = true
        })
      },
    },
  }
</script>
<style lang="less">
  .login-container {
    height: 100vh;
    background: url('~@/assets/login_images/login_background.png');
    background-size: cover;
    &-form {
      width: calc(100% - 40px);
      height: 560px;
      // height: 380px;
      padding: 4vh;
      margin-top: calc((100vh - 380px) / 2);
      margin-right: 20px;
      margin-left: 20px;
      background: url('~@/assets/login_images/login_form.png');
      background-size: 100% 100%;
      border-radius: 10px;
      box-shadow: 0 2px 8px 0 rgba(7, 17, 27, 0.06);
    }
    &-hello {
      font-size: 32px;
      color: #fff;
    }
    &-title {
      margin-bottom: 30px;
      font-size: 20px;
      color: #fff;
    }
    &-tips {
      position: fixed;
      bottom: @vab-margin;
      width: 100%;
      height: 40px;
      color: rgba(255, 255, 255, 0.856);
      text-align: center;
    }
    .ant-input {
      width: 400px;
      height: 35px;
    }
    .ant-btn {
      width: 365px;
      height: 45px;
      border-radius: 99px;
    }
  }
</style>
