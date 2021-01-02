<template>
  <div class="test-container">
    <a-alert message="发布的培训信息列表"></a-alert>
    <a-table :columns="columns" :data-source="data">
      <template #action="{ record, index }">
        <a
          v-if="record.publishStatus == 0"
          @click="publishInformation(index, 1)"
        >
          发布
        </a>
        <a v-else @click="publishInformation(index, 0)">取消发布</a>
        <a-divider type="vertical" />
        <a @click="deleteInformation(record)">删除</a>
      </template>
      <template #expandedRowRender="{ record }">
        <p style="margin: 0">
          {{ record.description }}
        </p>
      </template>
      <template #publishStatus="{ record }">
        <span>
          <a-tag :color="publishStatusDescription[record.publishStatus].color">
            {{ publishStatusDescription[record.publishStatus].value }}
          </a-tag>
        </span>
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
      title: '发布状态',
      dataIndex: 'publishStatus',
      key: 'publishStatus',
      slots: { customRender: 'publishStatus' },
    },
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
      publishStatus: 0,
    },
    {
      key: 2,
      No: 2,
      title: '培训主题',
      content: '培训信息内容',
      phone: '13524675842',
      email: '12345@qq.com',
      description: '额外信息',
      publishStatus: 0,
    },
    {
      key: 3,
      No: 3,
      title: '培训主题',
      content: '培训信息内容',
      phone: '13524675842',
      email: '12345@qq.com',
      description: '额外信息',
      publishStatus: 1,
    },
  ]

  const publishStatusDescription = {
    0: {
      value: '未发布',
      color: 'geekblue',
    },
    1: {
      value: '已发布',
      color: 'green',
    },
  }

  export default {
    // name: 'TrainerTable',
    data() {
      return {
        data,
        columns,
        publishStatusDescription,
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
      publishInformation(index, publishStatus) {
        console.log(index, publishStatus)
        this.data[index].publishStatus = publishStatus
        message.success('发布培训信息')
      },
    },
  }
</script>
