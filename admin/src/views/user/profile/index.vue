<template>
  <a-form :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="姓名">
      <a-input v-model:value="form.name" />
    </a-form-item>
    <a-form-item label="年龄">
      <a-input v-model:value="form.age" />
    </a-form-item>
    <a-form-item label="性别">
      <a-select v-model:value="form.gender" placeholder="选择性别">
        <a-select-option value="1">男</a-select-option>
        <a-select-option value="2">女</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="联系方式">
      <a-input v-model:value="form.phone" type="textarea" />
    </a-form-item>
    <a-form-item label="邮箱">
      <a-input v-model:value="form.email" type="textarea" />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">修改</a-button>
      <a-button style="margin-left: 10px">取消</a-button>
    </a-form-item>
    <a-form-item label="旧密码">
      <a-input v-model:value="oldPassword" type="password" />
    </a-form-item>
    <a-form-item label="新密码">
      <a-input v-model:value="newPassword" type="password" />
    </a-form-item>
    <a-form-item label="重复新密码">
      <a-input v-model:value="againPassword" type="password" />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="changePassword">修改密码</a-button>
    </a-form-item>
  </a-form>
</template>
<script>
  import { message } from 'ant-design-vue'
  import { updatePassword } from '@/api/user'
  export default {
    data() {
      return {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
        form: {
          name: 'chr',
          age: '18',
          gender: '1',
          type: [],
          phone: '13526535268',
          email: '12312@qq.com',
        },
        newPassword: '',
        againPassword: '',
        oldPassword: '',
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!', this.form)
        message.success('修改成功')
      },
      changePassword() {
        console.log('changePassword!', this.password)
        updatePassword({
          newPassword: this.newPassword,
          againPassword: this.againPassword,
          oldPassword: this.oldPassword,
        }).then((response) => {
          if (response.code == 9999) {
            message.error(response.message)
          } else {
            message.success(response.message)
          }
        })
        this.password = ''
        this.oldPassword = ''
      },
    },
  }
</script>
