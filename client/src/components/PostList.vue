<template>
  <div class="post-list">
    <article v-for="post in list" :key="post.id" class="card mb-3 shadow">
      <!-- shadow-sm -->
      <div class="card-body">
        <h4>{{post.title}}</h4>
        <div class="row my-3 align-items-center">
          <div v-if="post.image" class="col-3">
            <img :src="post.image" :alt="post.title" class="rounded-lg w-75">
            <!-- style="max-width: 100%;height: auto;" -->
          </div>
          <p :class="{'col-9': post.image}">{{post.content}}</p>
        </div>
        <span class="text-muted">{{post.createAt}}</span>
        <div v-if="post.canChoose == 1" class="m-2"><button type="button" class="btn btn-outline-primary el-icon-arrow-right">加入课程</button></div>
      </div>
      <!-- <pre>{{post}}</pre> -->
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { PostProps } from '../testData'
export default defineComponent({
  name: 'PostList',
  props: {
    list: {
      required: true,
      type: Array as PropType<PostProps[]>
    }
  }
})
</script>

<style lang="less" scoped>
</style>
