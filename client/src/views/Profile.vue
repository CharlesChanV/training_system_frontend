<template>
  <div class="container m-3">
    <div class="row align-items-start">
      <div class="col">
        <div class="card" style="margin: 10px;width: 500px;">
          <div class="card-body">
            <h6 class="card-title">个人信息</h6>
            <form>
              <div class="mb-3 form-floating">
                <input type="text" v-model="form.username" class="form-control" id="username">
                <label for="username" class="col-form-label">账号</label>
              </div>
              <div class="mb-3 form-floating">
                <input type="text" v-model="form.email" class="form-control" id="email">
                <label for="email" class="col-form-label">邮箱</label>
              </div>
              <div class="mb-3 form-floating">
                <input type="text" v-model="form.phone" class="form-control" id="phone">
                <label for="phone" class="col-form-label">联系方式</label>
              </div>
              <div class="mb-3 row">
                <div class="col-sm-10">
                  <button type="button" class="btn btn-primary" @click="updateUserInfo">更新个人信息</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card" style="margin: 10px;width: 500px;">
          <div class="card-body">
            <h6 class="card-title">密码修改</h6>
            <div class="mb-3 row">
              <label for="inputPassword" class="col-form-label">密码</label>
              <div class="col-sm-10">
                <input type="password" class="form-control" v-model="password">
              </div>
            </div>
            <div class="mb-3 row">
              <div class="col-sm-10">
                <button type="button" class="btn btn-primary" @click="changePassword">修改密码</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card" style="margin: 10px;width: 500px;">
          <div class="card-body">
            <h6 class="card-title">申请听课证</h6>
            <div class="m-3">
              <!-- <label for="apply" class="col-form-label">申请听课证</label> -->
              <button type="button" class="btn btn-outline-success" style="width: 15rem;" @click="applyListen">点击申请听课证</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card" style="margin: 10px;width: 1160px;">
      <div class="card-body">
        <h6 class="card-title">查看选课信息</h6>
        <div class="m-3">
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="course"
              label="课程">
            </el-table-column>
            <el-table-column
              prop="startTime"
              label="开课时间">
            </el-table-column>
            <el-table-column
              prop="hasLisence"
              label="是否拥有听课证">
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作"
              width="100">
              <template #default="scope">
                <el-button @click="handleScoreClick(scope.row)" type="text" size="small">查看成绩</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, reactive, toRefs } from 'vue'
import { ElMessage } from 'element-plus'
export default defineComponent({
  name: 'Profile',
  setup() {
    onMounted(() => {
      console.log('onMounted')
    })
    onUnmounted(() => {
      console.log('onUnmounted')
    })
    const data = reactive({
      form: {
        username: 'chr',
        email: 'email@example.com',
        phone: '13524585478'
      },
      password: '',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        course: '课程1',
        startTime: '2021-05-02',
        hasLisence: 1
      }, {
        date: '2016-05-04',
        name: '王小虎',
        course: '课程1',
        startTime: '2021-05-02',
        hasLisence: 1
      }, {
        date: '2016-05-01',
        name: '王小虎',
        course: '课程1',
        startTime: '2021-05-02',
        hasLisence: 1
      }, {
        date: '2016-05-03',
        name: '王小虎',
        course: '课程1',
        startTime: '2021-05-02',
        hasLisence: 1
      }]
    })
    const changePassword = () => {
      console.log(data.password)
      ElMessage.success({
        message: '密码修改成功',
        type: 'success'
      })
    }
    const applyListen = () => {
      ElMessage.success({
        message: '听课证申请已发送',
        type: 'success'
      })
    }
    const updateUserInfo = () => {
      ElMessage.success({
        message: '信息更新成功',
        type: 'success'
      })
    }
    const handleScoreClick = (row: object) => {
      console.log(row)
      ElMessage.success({
        message: '成绩查看成功',
        type: 'success'
      })
    }
    const refData = toRefs(data)
    return {
      ...refData,
      changePassword,
      applyListen,
      updateUserInfo,
      handleScoreClick
    }
  }
})
</script>

<style lang="less" scoped>
</style>
