<template>
  <div class="container">
    <theme-area title="新闻" description="新东莞培训机构教学管理系统新闻信息" id="News">
      <div class="main">
        <column-list :list="list" />
      </div>
      <!-- <template #footer>213</template> -->
    </theme-area>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, reactive, toRefs, computed } from 'vue'
import ThemeArea from '../components/ThemeArea.vue'
import ColumnList from '../components/ColumnList.vue'
import store from '../store'
export default defineComponent({
  name: 'News',
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
