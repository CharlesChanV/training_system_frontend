<template>
  <div class="test-container">
    <a-alert message="课程列表"></a-alert>
    <a-form layout="inline">
      <a-form-item>
        <a-input-search
          v-model:value="courseParam.year"
          placeholder="年份"
          @search="onSearch"
        >
          <template #prefix>
            <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
          </template>
        </a-input-search>
      </a-form-item>
      <a-form-item>
        <a-input-search
          v-model:value="courseParam.season"
          placeholder="季节"
          @search="onSearch"
        >
          <template #prefix>
            <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
          </template>
        </a-input-search>
      </a-form-item>
      <a-form-item>
        <a-select
          v-model:value="courseParam.isOpen"
          style="width: 120px"
          ref="select"
          allowClear="true"
          placeholder="是否开启选课"
          @change="onSearch"
        >
          <a-select-option :value="0">不可选课</a-select-option>
          <a-select-option :value="1">可选课</a-select-option>
        </a-select>
      </a-form-item>
    </a-form>
    <a-table :columns="columns" :data-source="data">
      <template #isOpen="{ record }">
        <span>
          <a-tag :color="chooseTagIndex[record.isOpen].color">
            {{ chooseTagIndex[record.isOpen].value }}
          </a-tag>
        </span>
      </template>
      <template #action="{ record }">
        <span>
          <a @click="showEdit(record)">编辑</a>
          <a-divider type="vertical" />
          <a @click="trainer(record)">获取培训师</a>
          <a-divider type="vertical" />
          <router-link
            class="ant-dropdown-link"
            :to="{
              path: '/trainingClass/table',
              query: { courseId: record.id },
            }"
          >
            查看培训班
            <down-outlined />
          </router-link>
          <a-divider type="vertical" />
          <a @click="deleteCourse(record)">删除</a>
          <a-divider type="vertical" />
          <a @click="openChoose(record, record.isOpen)">
            {{ record.isOpen == 0 ? '开设选课' : '关闭选课' }}
          </a>
        </span>
      </template>
      <template #expandedRowRender="{ record }">
        <p style="margin: 0">
          {{ record.description }}
        </p>
      </template>
    </a-table>
    <a-modal v-model:visible="editVisible" title="编辑" @ok="handleEditOk">
      <a-form
        name="custom-validation"
        ref="ruleForm"
        :model="editForm"
        v-bind="layout"
      >
        <!-- :rules="rules" -->
        <a-form-item has-feedback label="课程ID">
          <a-input v-model:value="editForm.id" type="text" disabled />
        </a-form-item>
        <a-form-item has-feedback label="课程名称">
          <a-input v-model:value="editForm.courseName" type="text" />
        </a-form-item>
        <a-form-item has-feedback label="季节">
          <a-input v-model:value="editForm.season" type="text" />
        </a-form-item>
        <a-form-item has-feedback label="年份">
          <a-input v-model:value="editForm.year" type="text" />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
  import { message } from 'ant-design-vue'
  import { getAllOpenCourse } from '@/api/student'
  import {
    updateCourse,
    deleteCourse,
    closeCourseByCourseId,
  } from '@/api/course'
  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: '课程名称', dataIndex: 'courseName', key: 'courseName' },
    {
      title: '开放选课',
      dataIndex: 'isOpen',
      key: 'isOpen',
      slots: { customRender: 'isOpen' },
    },
    { title: '季节', dataIndex: 'season', key: 'season' },
    { title: '学年', dataIndex: 'year', key: 'year' },
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
  //     name: '编程教育1',
  //     content: '课程内容1',
  //     teacher: '李老师',
  //     times: 45,
  //     canChoose: 0,
  //     description: '额外信息',
  //   },
  //   {
  //     key: 2,
  //     No: 2,
  //     name: '编程教育2',
  //     content: '课程内容2',
  //     teacher: '李老师',
  //     times: 45,
  //     canChoose: 0,
  //     description: '额外信息',
  //   },
  //   {
  //     key: 3,
  //     No: 3,
  //     name: '编程教育3',
  //     content: '课程内容3',
  //     teacher: '李老师',
  //     times: 45,
  //     canChoose: 1,
  //     description: '额外信息',
  //   },
  // ]
  const chooseTagIndex = {
    [false]: {
      color: 'geekblue',
      value: '无法选课',
    },
    [true]: {
      color: 'green',
      value: '开设选课',
    },
  }

  export default {
    // name: 'TrainerTable',
    data() {
      return {
        data: [],
        columns,
        chooseTagIndex,
        courseParam: {
          year: '',
          season: '',
          isOpen: undefined,
        },
        editVisible: false,
        editForm: {},
        layout: {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
        },
      }
    },
    mounted() {
      this.fetchCourseList()
    },
    methods: {
      fetchCourseList() {
        getAllOpenCourse(this.courseParam).then((response) => {
          this.data = response.data
        })
      },
      deleteCourse(record) {
        deleteCourse(record.id).then((response) => {
          console.log(response)
          message.success('success')
          this.fetchCourseList()
        })
        // for (let i = 0; i < this.data.length; i++) {
        //   if (this.data[i].key == record.key) {
        //     this.data.splice(i, 1)
        //     message.success('删除成功')
        //     break
        //   }
        // }
      },
      openChoose(record, canChoose) {
        let open = 0
        if (canChoose == 1 || canChoose == true) {
          open = 0
        } else {
          open = 1
        }
        closeCourseByCourseId(record.id, open).then((response) => {
          message.success('success')
          console.log(response)
          this.fetchCourseList()
        })
      },
      showEdit(record) {
        message.success('编辑课程信息' + record.name)
        this.editForm = {
          ...record,
          courseId: record.id,
        }
        this.editVisible = true
      },
      handleEditOk() {
        updateCourse(this.editForm).then((response) => {
          console.log(response)
          message.success('success')
          this.fetchCourseList()
        })
        this.editVisible = false
      },
      trainer(record) {
        message.success('编辑课程' + record.name + '培训师列表')
      },
      onSearch() {
        this.fetchCourseList()
      },
    },
  }
</script>
