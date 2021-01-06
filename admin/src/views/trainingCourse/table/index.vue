<template>
  <div class="test-container">
    <a-alert message="课程列表"></a-alert>
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
          <a @click="edit(record)">编辑</a>
          <a-divider type="vertical" />
          <a @click="trainer(record)">获取培训师</a>
          <a-divider type="vertical" />
          <a @click="deleteCourse(record)">删除</a>
          <a-divider type="vertical" />
          <a @click="openChoose(record, record.canChoose)">
            {{ record.canChoose == 0 ? '开设选课' : '关闭选课' }}
          </a>
        </span>
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

  const data = [
    {
      key: 1,
      No: 1,
      name: '编程教育1',
      content: '课程内容1',
      teacher: '李老师',
      times: 45,
      canChoose: 0,
      description: '额外信息',
    },
    {
      key: 2,
      No: 2,
      name: '编程教育2',
      content: '课程内容2',
      teacher: '李老师',
      times: 45,
      canChoose: 0,
      description: '额外信息',
    },
    {
      key: 3,
      No: 3,
      name: '编程教育3',
      content: '课程内容3',
      teacher: '李老师',
      times: 45,
      canChoose: 1,
      description: '额外信息',
    },
  ]
  const chooseTagIndex = {
    0: {
      color: 'geekblue',
      value: '无法选课',
    },
    1: {
      color: 'green',
      value: '开设选课',
    },
  }

  export default {
    // name: 'TrainerTable',
    data() {
      return {
        data,
        columns,
        chooseTagIndex,
      }
    },
    methods: {
      deleteCourse(record) {
        for (let i = 0; i < this.data.length; i++) {
          if (this.data[i].key == record.key) {
            this.data.splice(i, 1)
            message.success('删除成功')
            break
          }
        }
      },
      openChoose(record, canChoose) {
        console.log(record)
        if (canChoose == 1) {
          this.data[record.key - 1].canChoose = 0
        } else {
          this.data[record.key - 1].canChoose = 1
        }
        message.success('操作成功')
      },
      edit(record) {
        message.success('编辑课程信息' + record.name)
      },
      trainer(record) {
        message.success('编辑课程' + record.name + '培训师列表')
      },
    },
  }
</script>
