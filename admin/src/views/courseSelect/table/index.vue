<template>
  <div class="test-container">
    <a-alert message="学员列表"></a-alert>
    <a-form layout="inline">
      <a-form-item>
        <a-input-search
          v-model:value="queryParam.classId"
          placeholder="培训班ID"
          @search="onSearch"
        >
          <template #prefix>
            <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
          </template>
        </a-input-search>
      </a-form-item>
    </a-form>
    <a-table :columns="columns" :data-source="data">
      <template #action="{ record }">
        <span>
          <a @click="deleteStudent(record)">删除</a>
          <a-divider type="vertical" />
          <a @click="showInputModel(record)">录入成绩</a>
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
      <template #hasConfirm="{ record }">
        <p style="margin: 0">
          {{ record.hasConfirm == true ? '已确认' : '未确认' }}
        </p>
      </template>
      <template #hasLosed="{ record }">
        <p style="margin: 0">
          {{ record.hasLosed == true ? '已丢失' : '未丢失' }}
        </p>
      </template>
    </a-table>
    <a-modal
      title="录入分数"
      v-model:visible="inputScoreVisible"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
    >
      <a-card title="录入分数" style="width: 300px">
        <template #extra><a href="#">No</a></template>
        <a-form layout="inline">
          <a-form-item>
            <label>选课ID</label>
            <a-input v-model:value="scoreForm.id" placeholder="选课ID">
              <template #prefix>
                <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item>
            <label>实验成绩</label>
            <a-input v-model:value="scoreForm.scoreLab" placeholder="实验成绩">
              <template #prefix>
                <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item>
            <label>理论成绩</label>
            <a-input
              v-model:value="scoreForm.scoreTheory"
              placeholder="理论成绩"
            >
              <template #prefix>
                <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
              </template>
            </a-input>
          </a-form-item>
        </a-form>
      </a-card>
    </a-modal>
  </div>
</template>

<script>
  import { message } from 'ant-design-vue'
  import { getAllStudentByClassId, inputScore } from '@/api/courseSelect'
  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: '课程名称', dataIndex: 'courseName', key: 'courseName' },
    {
      title: '是否确认',
      dataIndex: 'hasConfirm',
      key: 'hasConfirm',
      slots: { customRender: 'hasConfirm' },
    },
    {
      title: '丢失与否',
      dataIndex: 'hasLosed',
      key: 'hasLosed',
      slots: { customRender: 'hasLosed' },
    },
    { title: '实验成绩', dataIndex: 'scoreLab', key: 'scoreLab' },
    { title: '理论成绩', dataIndex: 'scoreTheory', key: 'scoreTheory' },
    // { title: '学员信息', dataIndex: 'student', key: 'student' },
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
  //     name: 'CHR1',
  //     age: 32,
  //     phone: '13524675842',
  //     email: '12345@qq.com',
  //     hasCard: 1,
  //     description: '额外信息',
  //   },
  //   {
  //     key: 2,
  //     No: 2,
  //     name: 'CHR2',
  //     age: 32,
  //     phone: '13524675842',
  //     email: '12345@qq.com',
  //     hasCard: 0,
  //     description: '额外信息',
  //   },
  //   {
  //     key: 3,
  //     No: 3,
  //     name: 'CHR3',
  //     age: 32,
  //     phone: '13524675842',
  //     email: '12345@qq.com',
  //     hasCard: 1,
  //     description: '额外信息',
  //   },
  // ]

  export default {
    // name: 'TrainerTable',
    data() {
      return {
        data: [],
        columns,
        inputScoreVisible: false,
        confirmLoading: false,
        scoreForm: {},
        queryParam: {
          classId: 0,
        },
      }
    },
    mounted() {
      if (this.$route.query.classId) {
        this.queryParam.classId = this.$route.query.classId
      }
      this.fetchStudentList()
    },
    methods: {
      fetchStudentList(page = 1, size = 10) {
        getAllStudentByClassId({
          page,
          size,
          classId: this.queryParam.classId,
        }).then((response) => {
          console.log(response)
          this.data = response.data?.data
        })
      },
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
      showInputModel(record) {
        this.scoreForm = {
          id: record.id,
          scoreLab: record.scoreLab,
          scoreTheory: record.scoreTheory,
        }
        this.inputScoreVisible = true
        console.log(record)
      },
      handleOk(data) {
        console.log(data)
        inputScore(this.scoreForm).then((response) => {
          console.log(response)
          if (response.code == 9999) {
            message.error(response.message)
          } else {
            message.success(response.message)
          }
          this.fetchStudentList()
        })
        this.inputScoreVisible = false
      },
      onSearch() {
        this.fetchStudentList()
      },
    },
  }
</script>
