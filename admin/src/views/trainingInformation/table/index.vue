<template>
  <div class="test-container">
    <a-alert message="发布的培训信息列表"></a-alert>
    <a-table :columns="columns" :data-source="data">
      <template #action="{ record }">
        <a @click="deleteInformation(record)">删除</a>
      </template>
      <template #expandedRowRender="{ record }">
        <p style="margin: 0">
          {{ record.description }}
        </p>
      </template>
    </a-table>
  </div>
</template>

<script>
  import { message } from 'ant-design-vue'
  const columns = [
    { title: '编号', dataIndex: 'No', key: 'No' },
    { title: '培训主题', dataIndex: 'title', key: 'title' },
    { title: '培训内容', dataIndex: 'content', key: 'content' },
    { title: '联系方式', dataIndex: 'phone', key: 'phone' },
    { title: '邮箱', dataIndex: 'email', key: 'email' },
    {
      title: '操作',
      dataIndex: '',
      key: 'x',
      slots: { customRender: 'action' },
    },
  ]

  const data = [
    {
      key: 1,
      No: 1,
      title: '培训主题',
      content: '培训信息内容',
      phone: '13524675842',
      email: '12345@qq.com',
      description: '额外信息',
    },
    {
      key: 2,
      No: 2,
      title: '培训主题',
      content: '培训信息内容',
      phone: '13524675842',
      email: '12345@qq.com',
      description: '额外信息',
    },
    {
      key: 3,
      No: 3,
      title: '培训主题',
      content: '培训信息内容',
      phone: '13524675842',
      email: '12345@qq.com',
      description: '额外信息',
    },
  ]

  export default {
    // name: 'TrainerTable',
    data() {
      return {
        data,
        columns,
      }
    },
    methods: {
      deleteInformation(record) {
        for (let i = 0; i < this.data.length; i++) {
          if (this.data[i].key == record.key) {
            this.data.splice(i, 1)
            message.success('删除成功')
            break
          }
        }
      },
    },
  }
</script>
