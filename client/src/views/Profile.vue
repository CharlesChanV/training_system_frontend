<template>
  <div class="container m-3">
    <div class="mb-3 row">
      <label for="staticEmail" class="col-sm-2 col-form-label">账号</label>
      <div class="col-sm-10">
        <input type="text" readonly class="form-control-plaintext" id="username" value="20184141310">
      </div>
    </div>
    <div class="mb-3 row">
      <label for="staticEmail" class="col-sm-2 col-form-label">邮箱</label>
      <div class="col-sm-10">
        <input type="text" class="form-control-plaintext" id="email" value="email@example.com">
      </div>
    </div>
    <div class="mb-3 row">
      <label for="staticEmail" class="col-sm-2 col-form-label">联系方式</label>
      <div class="col-sm-10">
        <input type="text" class="form-control-plaintext" id="phone" value="13524585478">
      </div>
    </div>
    <div class="mb-3 row">
      <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
      <div class="col-sm-10">
        <input type="password" class="form-control" id="inputPassword">
      </div>
    </div>
    <div class="mb-3 row">
      <label for="apply" class="col-sm-2 col-form-label">申请听课证</label>
      <div class="col-sm-10">
        <button type="button" class="btn btn-primary">点击申请</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, reactive, toRefs } from 'vue'
export default defineComponent({
  name: 'App',
  setup() {
    onMounted(() => {
      console.log('onMounted')
    })
    onUnmounted(() => {
      console.log('onUnmounted')
    })
    const data = reactive({

    })
    const refData = toRefs(data)
    return {
      ...refData
    }
  }
})
</script>

<style lang="less" scoped>
</style>
