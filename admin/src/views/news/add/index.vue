<template>
  <a-form :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="新闻主题">
      <a-input v-model:value="form.title" />
    </a-form-item>
    <a-form-item label="新闻内容">
      <a-input v-model:value="form.content" />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">添加</a-button>
      <a-button style="margin-left: 10px">取消</a-button>
    </a-form-item>
  </a-form>
</template>
<script>
  import { message } from 'ant-design-vue'
  import { saveNews } from '@/api/news'
  export default {
    data() {
      return {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
        form: {
          title: '',
          content: '',
        },
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!', this.form)
        saveNews(this.form).then((response) => {
          message.success(response.message)
          this.$router.push('/news/table')
        })
      },
    },
  }
</script>
