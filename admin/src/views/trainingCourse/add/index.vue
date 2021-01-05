<template>
  <a-form :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="课程名称">
      <a-input v-model:value="form.name" />
    </a-form-item>
    <a-form-item label="课程内容">
      <a-input v-model:value="form.content" />
    </a-form-item>
    <a-form-item label="课程老师">
      <a-input v-model:value="form.teacher" />
    </a-form-item>
    <a-form-item label="课程学时">
      <a-input v-model:value="form.courseTimes" />
    </a-form-item>
    <a-form-item label="开始时间">
      <a-date-picker
        v-model:value="form.startTime"
        show-time
        type="date"
        placeholder="选择日期"
        style="width: 100%"
      />
    </a-form-item>
    <a-form-item label="联系方式">
      <a-input v-model:value="form.phone" />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">添加</a-button>
      <a-button style="margin-left: 10px">取消</a-button>
    </a-form-item>
  </a-form>
</template>
<script>
  import { message } from 'ant-design-vue'
  export default {
    data() {
      return {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
        form: {
          name: '',
          content: '',
          teacher: '',
          courseTimes: '',
          startTime: '',
          phone: '',
        },
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!', this.form)
        message.success('添加成功')
      },
    },
  }
</script>
