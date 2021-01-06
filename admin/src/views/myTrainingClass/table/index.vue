<template>
  <div class="test-container">
    <a-alert message="培训班列表"></a-alert>
    <a-table :columns="columns" :data-source="data">
      <template #action="{ record }">
        <a @click="deleteClass(record)">删除</a>
        <a-divider type="vertical" />
        <a @click="showClassScore(record)">查看学员成绩</a>
      </template>
      <template #expandedRowRender="{ record }">
        <p style="margin: 0">
          {{ record.description }}
        </p>
      </template>
      <template #isAnnounce="{ text }">
        <p style="margin: 0">
          {{ text == true ? '已确认' : '未确认' }}
        </p>
      </template>
    </a-table>
    <a-modal
      title="查看学员成绩"
      v-model:visible="classScoreVisible"
      :confirm-loading="confirmLoading"
      @ok="handleClassScoreOk"
    >
      查看学员成绩
    </a-modal>
  </div>
</template>

<script>
  import { message } from 'ant-design-vue'
  import { getMyClass } from '@/api/class'
  const columns = [
    { title: '编号', dataIndex: 'id', key: 'id' },
    { title: '课程ID', dataIndex: 'courseId', key: 'courseId' },
    { title: '培训师ID', dataIndex: 'teacherId', key: 'teacherId' },
    { title: '学费', dataIndex: 'tuition', key: 'tuition' },
    {
      title: '是否确认开设',
      dataIndex: 'isAnnounce',
      key: 'isAnnounce',
      slots: { customRender: 'isAnnounce' },
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
  //     className: '编程教育101班',
  //     classTime: '每周五下午16：00-18：00',
  //     classTeacher: '李老师',
  //     classTimes: 45,
  //     description: '额外信息',
  //   },
  //   {
  //     key: 2,
  //     No: 2,
  //     className: '编程教育202班',
  //     classTime: '每周五下午16：00-18：00',
  //     classTeacher: '李老师',
  //     classTimes: 45,
  //     description: '额外信息',
  //   },
  //   {
  //     key: 3,
  //     No: 3,
  //     className: '编程教育303班',
  //     classTime: '每周五下午16：00-18：00',
  //     classTeacher: '李老师',
  //     classTimes: 45,
  //     description: '额外信息',
  //   },
  // ]

  export default {
    // name: 'TrainerTable',
    data() {
      return {
        data: [],
        columns,
        classScoreVisible: false,
        confirmLoading: false,
      }
    },
    mounted() {
      this.fetchClassList()
    },
    methods: {
      fetchClassList() {
        getMyClass().then((response) => {
          message.success(response.message)
          this.data = response.data
        })
      },
      deleteClass(record) {
        for (let i = 0; i < this.data.length; i++) {
          if (this.data[i].key == record.key) {
            this.data.splice(i, 1)
            message.success('删除成功')
            break
          }
        }
      },
      showClassScore(record) {
        console.log(record)
        message.success('查看培训班学员成绩')
        this.classScoreVisible = true
      },
      handleClassScoreOk() {
        this.classScoreVisible = false
      },
    },
  }
</script>
