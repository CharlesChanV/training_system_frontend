<template>
  <theme-area title="课程信息" description="新东莞培训机构教学管理系统课程信息" id="ClassInformation">
    <div class="main">
      <column-list :list="list" />
    </div>
    <!-- <template #footer>213</template> -->
  </theme-area>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, reactive, toRefs, computed } from 'vue'
import ThemeArea from '../components/ThemeArea.vue'
import ColumnList from '../components/ColumnList.vue'
import store from '../store'
export default defineComponent({
  name: 'CourseDetail',
  components: {
    ThemeArea,
    ColumnList
  },
  setup() {
    const list = computed(() => store.state.columns)
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
      ...refData,
      list
    }
  }
})
</script>

<style lang="less" scoped>
</style>
