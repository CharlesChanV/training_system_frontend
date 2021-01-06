<template>
  <div class="test-container">
    <a-alert message="培训师列表"></a-alert>
    <a-table
      :columns="columns"
      :data-source="data"
      :pagination="pagination"
      @change="pageChange"
    >
      <template #action="{ record }">
        <span>
          <a @click="showEdit(record)">编辑</a>
          <a-divider type="vertical" />
          <a @click="sendRegisterMessage(record)">发送注册消息</a>
          <a-divider type="vertical" />
          <a @click="deleteTrainer(record)">删除</a>
        </span>
      </template>
      <!-- <template #action>
        <a>发送注册消息</a>
      </template> -->
      <template #expandedRowRender="{ record }">
        <p style="margin: 0">
          {{ record.description }}
        </p>
      </template>
    </a-table>
    <a-modal
      title="编辑"
      v-model:visible="visible"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
    >
      <a-form :model="editForm">
        <a-form-item label="ID">
          <a-input v-model:value="editForm.id" />
        </a-form-item>
        <a-form-item label="姓名">
          <a-input v-model:value="editForm.name" />
        </a-form-item>
        <a-form-item label="年龄">
          <a-input v-model:value="editForm.age" />
        </a-form-item>
        <a-form-item label="性别">
          <a-input v-model:value="editForm.gender" />
        </a-form-item>
        <a-form-item label="联系方式">
          <a-input v-model:value="editForm.phone" type="textarea" />
        </a-form-item>
        <a-form-item label="邮箱">
          <a-input v-model:value="editForm.email" type="textarea" />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
  import { message } from 'ant-design-vue'
  import { getAllTeacher, updateTeacher, deleteTeacher } from '@/api/teacher'
  import { genderEnum } from '@/api/enum'
  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: '年龄', dataIndex: 'age', key: 'age' },
    { title: '邮箱', dataIndex: 'email', key: 'email' },
    { title: '性别', dataIndex: 'gender', key: 'gender' },
    { title: '用户名', dataIndex: 'username', key: 'username' },
    { title: '联系方式', dataIndex: 'phone', key: 'phone' },
    { title: '姓名', dataIndex: 'name', key: 'name' },
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
  //     description: '额外信息',
  //   },
  //   {
  //     key: 2,
  //     No: 2,
  //     name: 'CHR2',
  //     age: 20,
  //     phone: '13647264734',
  //     email: '123431235@qq.com',
  //     description: '额外信息',
  //   },
  //   {
  //     key: 3,
  //     No: 3,
  //     name: 'CHR3',
  //     age: 18,
  //     phone: '13647264734',
  //     email: '1212313345@qq.com',
  //     description: '额外信息',
  //   },
  // ]

  export default {
    // name: 'TrainerTable',
    data() {
      return {
        data: [],
        columns,
        visible: false,
        confirmLoading: false,
        editForm: {},
        pagination: {
          pageSize: 10,
          current: 1,
          pageSizeOptions: ['10', '20', '30'],
          total: 100,
        },
      }
    },
    mounted() {
      this.fetchTeacherList()
    },
    methods: {
      fetchTeacherList(page = 1, size = 10) {
        getAllTeacher({ page, size }).then((response) => {
          console.log(response)
          this.data = response.data?.records
          this.pagination.current = response.data?.current
          this.pagination.total = response.data?.total
        })
      },
      pageChange(page, pageSize) {
        console.log(page, pageSize)
        this.pagination.current = page.current
        this.pagination.pageSize = page.pageSize
        this.fetchTeacherList(page.current)
      },
      deleteTrainer(record) {
        deleteTeacher(record.id).then((response) => {
          console.log(response)
          message.success('success')
          this.fetchTeacherList()
        })
        // for (let i = 0; i < this.data.length; i++) {
        //   if (this.data[i].key == record.key) {
        //     this.data.splice(i, 1)
        //     break
        //   }
        // }
      },
      sendRegisterMessage(record) {
        message.success(record.name + '注册信息发送成功')
      },
      async handleOk(data) {
        console.log(data)
        let sex_type
        await genderEnum().then((response) => {
          console.log(response)
          sex_type = response.data
        })
        let form = {}
        Object.assign(form, this.editForm)
        form.gender = sex_type[form.gender]
        updateTeacher(this.editForm).then((response) => {
          console.log(response)
          message.success('编辑信息修改成功')
        })
        this.visible = false
      },
      showEdit(record) {
        this.editForm = record
        this.visible = true
      },
    },
  }
</script>
