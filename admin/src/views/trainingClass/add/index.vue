<template>
  <a-form :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="开课时间">
      <a-date-picker
        v-model:value="form.startDate"
        show-time
        type="date"
        placeholder="选择日期"
        style="width: 100%"
      />
    </a-form-item>
    <a-form-item label="学费">
      <a-input v-model:value="form.tution" />
    </a-form-item>
    <a-form-item label="教师ID">
      <a-input v-model:value="form.teacherId" />
    </a-form-item>
    <a-form-item label="课程ID">
      <a-input v-model:value="form.courseId" />
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
          startDate: '',
          tution: '',
          teacherId: '',
          courseId: '',
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
