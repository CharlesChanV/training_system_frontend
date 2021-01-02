<template>
  <div class="test-container">
    <a-alert message="学员列表"></a-alert>
    <a-table :columns="columns" :data-source="data">
      <template #action="{ record }">
        <span>
          <a @click="deleteStudent(record)">删除</a>
          <a-divider type="vertical" />
          <a @click="edit(record)">{{ record.name }}选课信息</a>
          <a-divider type="vertical" />
          <a @click="applyAttendanceCertificate(record)">办理听课证</a>
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
    <a-modal
      title="确认选课信息"
      v-model:visible="courseChooseVisible"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
    >
      <a-card title="Default size card" style="width: 300px">
        <template #extra><a href="#">No</a></template>
        <p>课程：趣味编程</p>
        <p>开课日期：2020.12.20</p>
        <p>上课时间：每周五下午16：00-18：00</p>
      </a-card>
    </a-modal>
  </div>
</template>

<script>
  import { message } from 'ant-design-vue'
  const columns = [
    { title: '编号', dataIndex: 'No', key: 'No' },
    { title: '学员姓名', dataIndex: 'name', key: 'name' },
    { title: '学员年龄', dataIndex: 'age', key: 'age' },
    { title: '学员联系方式', dataIndex: 'phone', key: 'phone' },
    { title: '学员邮箱', dataIndex: 'email', key: 'email' },
    { title: '听课证持有状态', dataIndex: 'hasCard', key: 'hasCard' },
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
      name: 'CHR1',
      age: 32,
      phone: '13524675842',
      email: '12345@qq.com',
      hasCard: 1,
      description: '额外信息',
    },
    {
      key: 2,
      No: 2,
      name: 'CHR2',
      age: 32,
      phone: '13524675842',
      email: '12345@qq.com',
      hasCard: 0,
      description: '额外信息',
    },
    {
      key: 3,
      No: 3,
      name: 'CHR3',
      age: 32,
      phone: '13524675842',
      email: '12345@qq.com',
      hasCard: 1,
      description: '额外信息',
    },
  ]

  export default {
    // name: 'TrainerTable',
    data() {
      return {
        data,
        columns,
        courseChooseVisible: false,
        confirmLoading: false,
        editForm: {},
      }
    },
    methods: {
      deleteStudent(record) {
        for (let i = 0; i < this.data.length; i++) {
          if (this.data[i].key == record.key) {
            this.data.splice(i, 1)
            message.success('删除成功')
            break
          }
        }
      },
      applyAttendanceCertificate(record) {
        message.success('听课证办理成功' + record.name)
      },
      edit(record) {
        this.courseChooseVisible = true
        console.log(record)
      },
      handleOk(data) {
        console.log(data)
        message.success('选课信息确认成功')
        this.courseChooseVisible = false
      },
    },
  }
</script>
