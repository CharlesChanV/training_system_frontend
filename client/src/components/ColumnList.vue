<template>
  <div class="row">
    <div v-for="column in columnList" :key="column.id" class="col-12 col-sm-6 col-md-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img :src="column.avatar" :alt="column.title" class="rounded-circle border border-light w-25 my-3">
          <h5 class="card-title">{{column.title}}</h5>
          <p class="card-text text-left">{{column.description}}</p>
          <router-link :to="{name: 'ColumnDetail', params: {id: column.id}}" class="btn btn-outline-primary">进入课程</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
export interface ColumnProps {
  id: number;
  title: string;
  avatar: string;
  description: string;
}

const testData: ColumnProps[] = [
  {
    id: 1,
    title: '我与游戏的一二事',
    description: '天美十二周年，腾讯天美工作室群与知乎合作，邀请游戏玩家和开发者们，谈一谈自己与游戏有关的经历与思考。',
    avatar: 'https://pic4.zhimg.com/50/v2-d3553dd542c08c4b89dd161545797a57_720w.jpg?source=b1f6dc53'
  },
  {
    id: 2,
    title: '心动的offer，悸动的职场',
    description: '随着「令人心动的 offer2」热播，你是否也津津乐道于这群实习生的职场表现？如何收获人生的第一份 offer？如何走好职业之路？快来一起参加圆桌讨论吧！',
    avatar: 'https://pic1.zhimg.com/50/v2-56dc08c496ada19a05bd6d6f4d515d10_720w.jpg?source=b1f6dc53'
  },
  {
    id: 3,
    title: '川菜很行',
    description: '不同的饮食文化衍生出了不同的菜系，这是一场众人味蕾间的博弈；菜系的变化和生长，每一个普通人都参与其中。川菜的传承与变革，会用什么方式开启新篇章？',
    avatar: 'https://pic1.zhimg.com/50/v2-938faf36b298a449fcea053d2ddf3d97_720w.jpg?source=b1f6dc53'
  },
  {
    id: 4,
    title: '如何搞定名校MBA申请',
    description: '对于想要提升学习，未来想要在职场中走的更远的年轻人们来说，学历的提升有助于我们走的更远，今天我们就分享一些名校MBA申请那些事儿，专家解读名校MBA申请攻略',
    avatar: 'https://pic1.zhimg.com/50/v2-f6994d8229dd3e293b3532479f80d52b_720w.jpg?source=b1f6dc53'
  }
]

export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true,
      default: testData
    }
  },
  setup(props) {
    const columnList = computed(() => {
      return props.list.map(column => {
        if (!column.avatar) {
          column.avatar = require('@/assets/logo.png')
        }
        return column
      })
    })
    return {
      columnList
    }
  }
})
</script>

<style>
</style>
