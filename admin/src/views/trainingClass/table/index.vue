<template>
  <div class="test-container">
    <a-alert message="培训班列表"></a-alert>
    <a-table :columns="columns" :data-source="data">
      <template #action="{ record }">
        <a @click="deleteClass(record)">删除</a>
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
    { title: '培训班名称', dataIndex: 'className', key: 'className' },
    { title: '培训时间', dataIndex: 'classTime', key: 'classTime' },
    { title: '培训班老师', dataIndex: 'classTeacher', key: 'classTeacher' },
    { title: '培训班学时', dataIndex: 'classTimes', key: 'classTimes' },
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
    },
  }
</script>
