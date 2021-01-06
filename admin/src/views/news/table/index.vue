<template>
  <div class="test-container">
    <a-alert message="新闻列表"></a-alert>
    <a-table
      :columns="columns"
      :data-source="data"
      @change="pageChange"
      :pagination="pagination"
    >
      <template #publish="{ record }">
        <span>
          <a-tag :color="publishTagIndex[record.publish == true ? 1 : 0].color">
            {{ publishTagIndex[record.publish == true ? 1 : 0].value }}
          </a-tag>
        </span>
      </template>
      <template #action="{ record }">
        <span>
          <a @click="showEdit(record)">编辑</a>
          <a-divider type="vertical" />
          <a @click="publish(record, record.publish)">
            {{ record.publish == false ? '发布' : '取消发布' }}
          </a>
          <a-divider type="vertical" />
          <!-- <a @click="deleteNews(record)">删除</a> -->
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
    <a-modal title="编辑" v-model:visible="editVisible" @ok="handleEditOk">
      <a-form :model="newsForm">
        <a-form-item label="ID">
          <a-input v-model:value="newsForm.id" readonly />
        </a-form-item>
        <a-form-item label="主题">
          <a-input v-model:value="newsForm.title" />
        </a-form-item>
        <a-form-item label="内容">
          <a-input v-model:value="newsForm.content" />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
  import { message } from 'ant-design-vue'
  import { getAllNews, changeReleaseNews, saveNews } from '@/api/news'
  // import { getAllNews, updateNews, changepublishNews } from '@/api/news'
  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: '新闻主题', dataIndex: 'title', key: 'title' },
    { title: '新闻内容', dataIndex: 'content', key: 'content' },
    { title: '新闻创建时间', dataIndex: 'createTime', key: 'createTime' },
    // { title: '新闻发布时间', dataIndex: 'updateTime', key: 'updateTime' },
    {
      title: '新闻发布',
      dataIndex: 'publish',
      key: 'publish',
      slots: { customRender: 'publish' },
    },
    {
      title: '操作',
      dataIndex: '',
      key: 'x',
      slots: { customRender: 'action' },
    },
  ]

  // const data = [
  //   {
  //     key: 1,
  //     No: 1,
  //     title: '新闻主题1',
  //     content: '新闻内容1',
  //     keyword: '新闻关键字1',
  //     publishTime: '2020-12-17 09:35:00',
  //     publish: 1,
  //     description: '额外信息',
  //   },
  //   {
  //     key: 2,
  //     No: 2,
  //     title: '新闻主题2',
  //     content: '新闻内容2',
  //     keyword: '新闻关键字2',
  //     publishTime: '2020-12-17 09:36:00',
  //     publish: 1,
  //     description: '额外信息',
  //   },
  //   {
  //     key: 3,
  //     No: 3,
  //     title: '新闻主题3',
  //     content: '新闻内容3',
  //     keyword: '新闻关键字3',
  //     publishTime: '2020-12-17 09:37:00',
  //     publish: 0,
  //     description: '额外信息',
  //   },
  // ]
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
        data: [],
        columns,
        editVisible: false,
        publishTagIndex,
        pagination: {
          pageSize: 10,
          current: 1,
          pageSizeOptions: ['10', '20', '30'],
          total: 100,
        },
        newsForm: {},
      }
    },
    mounted() {
      this.fetchNewsList()
    },
    methods: {
      fetchNewsList(page = 1, size = 10) {
        getAllNews({ page, size }).then((response) => {
          console.log(response)
          this.data = response.data?.data
          this.pagination.total = response.data?.totalCount
        })
      },
      pageChange(page, pageSize) {
        console.log(page, pageSize)
        this.pagination.current = page.current
        this.pagination.pageSize = page.pageSize
        this.fetchNewsList(page.current)
      },
      deleteNews(record) {
        for (let i = 0; i < this.data.length; i++) {
          if (this.data[i].key == record.key) {
            message.success('删除成功')
            this.data.splice(i, 1)
            break
          }
        }
      },
      publish(record, publish) {
        let open = 1
        if (publish == true) {
          open = 0
        }
        changeReleaseNews({ newsId: record.id, open }).then((response) => {
          console.log(response)
          message.success('success')
          this.fetchNewsList()
        })
      },
      showEdit(record) {
        this.newsForm = record
        this.editVisible = true
      },
      handleEditOk() {
        saveNews({ newId: this.newsForm.id, ...this.newsForm }).then(
          (response) => {
            console.log(response)
            message.success(response.message)
            this.fetchNewsList()
          }
        )
        this.editVisible = false
      },
    },
  }
</script>
