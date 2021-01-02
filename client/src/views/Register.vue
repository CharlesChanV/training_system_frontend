<template>
  <!-- <validate-form @form-submit="onFormSubmit">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">邮箱</label>
      <ValidateInput type="text" placeholder="hello world" :rules="emailRules" v-model="emailVal" class="twe" />
      {{emailVal}}
    </div>
    <div class="mb-3">
      <label class="form-label">密码</label>
      <ValidateInput type="password" placeholder="password" v-model="passwordVal" :rules="passwordRules" />
    </div>
    <template #submit>
      <span class="btn btn-danger">登录</span>
    </template>
    <template v-slot:submit>
      <span class="btn btn-danger">Submit</span>
    </template>
  </validate-form> -->
  <!-- <el-input placeholder="请输入内容"></el-input> -->
  <div class="site-wrapper site-page--login">
    <div class="site-content__wrapper">
      <div class="site-content">
        <div class="brand-info">
          <h2 class="brand-info__text">注册入口</h2>
          <p class="brand-info__intro">新东莞培训机构</p>
        </div>
        <div class="login-main">
          <h3 class="login-title">用户注册</h3>
          <el-form :model="formVal" :ref="dataFormDom" :rules="rules" @keyup.enter="onFormSubmit()" status-icon>
            <el-form-item prop="username">
              <el-input v-model="formVal.username" placeholder="用户名/账号"></el-input>
            </el-form-item>
            <el-form-item prop="phone">
              <el-input v-model="formVal.phone" placeholder="联系方式"></el-input>
            </el-form-item>
            <el-form-item prop="email">
              <el-input v-model="formVal.email" placeholder="邮箱"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="formVal.password" type="password" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="login-btn-submit" type="primary" @click="onFormSubmit()">注册</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref, onMounted, toRef } from 'vue'
import { useStore } from 'vuex'
// import ValidateInput, { RulesProp } from '../components/ValidateInput.vue'
// import ValidateForm from '../components/ValidateForm.vue'
// import { router } from '../router'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Register',
  components: {
    // ValidateInput,
    // ValidateForm
  },
  setup() {
    // const inputRef = ref<any>()
    const store = useStore()
    const router = useRouter()
    const rules = ref({
      username: [
        { required: true, message: '请输入用户名', trigger: 'blur' }
      ],
      password: [
        { required: true, message: '请输入密码', trigger: 'blur' }
      ],
      phone: [
        { required: true, message: '请输入联系方式', trigger: 'blur' },
        { len: 11, message: '联系方式长度有误', trigger: 'blur' }
      ],
      email: [
        { required: true, message: '请输入邮箱', trigger: 'blur' },
        { type: 'email', message: '邮箱格式有误', trigger: 'blur' }
      ]
    })
    const formVal = reactive({
      username: '',
      password: '',
      phone: '',
      email: ''
    })
    let dataForm: any = ''
    const dataFormDom = (el: any) => {
      dataForm = el
    }
    const onFormSubmit = () => {
      console.log('result', toRefs(formVal))
      // eslint-disable-next-line no-unexpected-multiline
      dataForm.validate((valid: any) => {
        if (valid) {
          router.push('/')
          console.log(formVal)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
    return {
      formVal,
      onFormSubmit,
      rules,
      dataFormDom
      // inputRef
    }
  }
})
</script>
<style lang="scss">
  .site-wrapper.site-page--login {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(38, 50, 56, .6);
    overflow: hidden;
    &:before {
      position: fixed;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      content: "";
      background-image: url(~@/assets/img/login_bg.jpg);
      background-size: cover;
    }
    .site-content__wrapper {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      padding: 0;
      margin: 0;
      overflow-x: hidden;
      overflow-y: auto;
      background-color: transparent;
    }
    .site-content {
      min-height: 100%;
      padding: 30px 500px 30px 30px;
    }
    .brand-info {
      margin: 220px 100px 0 90px;
      color: #fff;
    }
    .brand-info__text {
      margin:  0 0 22px 0;
      font-size: 48px;
      font-weight: 400;
      text-transform : uppercase;
    }
    .brand-info__intro {
      margin: 10px 0;
      font-size: 16px;
      line-height: 1.58;
      opacity: .6;
    }
    .login-main {
      position: absolute;
      top: 0;
      right: 0;
      padding: 150px 60px 180px;
      width: 470px;
      min-height: 100%;
      background-color: #fff;
    }
    .login-title {
      font-size: 16px;
    }
    .login-captcha {
      overflow: hidden;
      > img {
        width: 100%;
        cursor: pointer;
      }
    }
    .login-btn-submit {
      width: 100%;
      margin-top: 38px;
    }
  }
</style>
