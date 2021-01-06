<template>
  <div class="test-container">
    <a-alert message="培训班列表"></a-alert>
    <a-form layout="inline">
      <a-form-item>
        <a-input-search
          v-model:value="queryParam.courseId"
          placeholder="课程ID"
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
        <a @click="deleteClass(record)">删除</a>
        <a-divider type="vertical" />
        <router-link
          class="ant-dropdown-link"
          :to="{
            path: '/student/table',
            query: { classId: record.id },
          }"
        >
          查询培训班学生
          <down-outlined />
        </router-link>
      </template>
      <template #isAnnounce="{ text }">
        <!-- <p style="margin: 0"> -->
        <pre>{{ text }}</pre>
        <!-- </p> -->
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
  import { getAllClassesByCourseId } from '@/api/student'
  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: '开始时间', dataIndex: 'startDate', key: 'startDate' },
    { title: '老师ID', dataIndex: 'teacherId', key: 'teacherId' },
    { title: '课程ID', dataIndex: 'courseId', key: 'courseId' },
    { title: '学费', dataIndex: 'tuition', key: 'tuition' },
    // { title: '是否发布培训信息', dataIndex: 'isAnnounce', key: 'isAnnounce' },
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
        queryParam: {
          courseId: 0,
        },
      }
    },
    mounted() {
      if (this.$route.query.courseId) {
        this.queryParam.courseId = this.$route.query.courseId
      }
      this.fetchClassList()
    },
    methods: {
      fetchClassList() {
        getAllClassesByCourseId(this.queryParam.courseId).then((response) => {
          console.log(response)
          this.data = response.data
        })
      },
      onSearch() {
        this.fetchClassList()
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
      // showClassDetail(record) {
      //   console.log(record)
      //   message.success('修改培训班信息')
      // },
    },
  }
</script>
