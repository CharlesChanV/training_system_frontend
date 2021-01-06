<template>
  <div class="test-container">
    <a-alert message="培训班列表"></a-alert>
    <a-table :columns="columns" :data-source="data">
      <template #action="{ record }">
        <a @click="deleteClass(record)">删除</a>
        <a-divider type="vertical" />
        <a @click="showClassDetail(record)">修改培训班信息</a>
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
    { title: 'ID', dataIndex: 'No', key: 'No' },
    { title: '开始时间', dataIndex: 'startDate', key: 'startDate' },
    { title: '老师ID', dataIndex: 'teacherId', key: 'teacherId' },
    { title: '课程ID', dataIndex: 'courseId', key: 'courseId' },
    { title: '是否发布培训信息', dataIndex: 'isAnnounce', key: 'isAnnounce' },
    { title: '学费', dataIndex: 'tution', key: 'tution' },
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
      className: '编程教育101班',
      classTime: '每周五下午16：00-18：00',
      classTeacher: '李老师',
      classTimes: 45,
      description: '额外信息',
    },
    {
      key: 2,
      No: 2,
      className: '编程教育202班',
      classTime: '每周五下午16：00-18：00',
      classTeacher: '李老师',
      classTimes: 45,
      description: '额外信息',
    },
    {
      key: 3,
      No: 3,
      className: '编程教育303班',
      classTime: '每周五下午16：00-18：00',
      classTeacher: '李老师',
      classTimes: 45,
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
      deleteClass(record) {
        for (let i = 0; i < this.data.length; i++) {
          if (this.data[i].key == record.key) {
            this.data.splice(i, 1)
            message.success('删除成功')
            break
          }
        }
      },
      showClassDetail(record) {
        console.log(record)
        message.success('修改培训班信息')
      },
    },
  }
</script>
