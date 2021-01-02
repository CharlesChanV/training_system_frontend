<template>
  <el-container :class="{'bk-light':bkLight}">
    <el-header class="m-5 text-center">
      <h1>{{title}}</h1>
      <label>{{description}}</label>
    </el-header>
    <el-main>
      <slot></slot>
    </el-main>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, reactive, toRefs } from 'vue'
export default defineComponent({
  name: 'ThemeArea',
  props: {
    title: String,
    description: String,
    bkLight: Boolean
  },
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

<style style="sass" scoped>
.footer{
  text-align: center;
}
.bk-light{
  background-color: #f7fcff;
}
</style>
