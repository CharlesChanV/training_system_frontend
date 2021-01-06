<template>
  <div class="test-container">
    <a-alert message="新闻列表"></a-alert>
    <a-table :columns="columns" :data-source="data">
      <template #isRelease="{ record }">
        <span>
          <a-tag :color="publishTagIndex[record.isRelease].color">
            {{ publishTagIndex[record.isRelease].value }}
          </a-tag>
        </span>
      </template>
      <template #action="{ record }">
        <span>
          <a>编辑</a>
          <a-divider type="vertical" />
          <a @click="publish(record, record.isRelease)">
            {{ record.isRelease == 0 ? '发布' : '取消发布' }}
          </a>
          <a-divider type="vertical" />
          <a @click="deleteNews(record)">删除</a>
        </span>
      </template>
      <!-- <template #action="{ text }">
        <a>选课信息</a>
      </template>
      <template #action="{ text }">
        <a>办理听课证</a>
      </template> -->
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
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: '新闻主题', dataIndex: 'title', key: 'title' },
    { title: '新闻内容', dataIndex: 'content', key: 'content' },
    { title: '新闻创建时间', dataIndex: 'createTime', key: 'createTime' },
    { title: '新闻发布时间', dataIndex: 'updateTime', key: 'updateTime' },
    {
      title: '新闻发布',
      dataIndex: 'isRelease',
      key: 'isRelease',
      slots: { customRender: 'isRelease' },
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
      title: '新闻主题1',
      content: '新闻内容1',
      keyword: '新闻关键字1',
      publishTime: '2020-12-17 09:35:00',
      isRelease: 1,
      description: '额外信息',
    },
    {
      key: 2,
      No: 2,
      title: '新闻主题2',
      content: '新闻内容2',
      keyword: '新闻关键字2',
      publishTime: '2020-12-17 09:36:00',
      isRelease: 1,
      description: '额外信息',
    },
    {
      key: 3,
      No: 3,
      title: '新闻主题3',
      content: '新闻内容3',
      keyword: '新闻关键字3',
      publishTime: '2020-12-17 09:37:00',
      isRelease: 0,
      description: '额外信息',
    },
  ]
  const publishTagIndex = {
    0: {
      color: 'geekblue',
      value: '未发布',
    },
    1: {
      color: 'green',
      value: '已发布',
    },
  }

  export default {
    // name: 'TrainerTable',
    data() {
      return {
        data,
        columns,
        publishTagIndex,
      }
    },
    methods: {
      deleteNews(record) {
        for (let i = 0; i < this.data.length; i++) {
          if (this.data[i].key == record.key) {
            message.success('删除成功')
            this.data.splice(i, 1)
            break
          }
        }
      },
      publish(record, isRelease) {
        console.log(record)
        if (isRelease == 1) {
          this.data[record.key - 1].isRelease = 0
        } else {
          this.data[record.key - 1].isRelease = 1
        }
        message.success('操作成功')
      },
    },
  }
</script>
