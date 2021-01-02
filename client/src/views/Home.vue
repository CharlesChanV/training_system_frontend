<template>
  <!-- <section class="text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <img src="http://zhihu.vikingship.xyz/img/callout.5b86dfc8.svg" alt="callout" class="w-50" />
        <h2 class="font-weight-light">创新教育，时代先锋</h2>
        <p><a href="#" class="btn btn-primary my-2">开始报名{{biggerColumnLen}}</a></p>
      </div>
    </div>
  </section> -->
  <div class="sticky-top scroll-top" style="z-index: 100">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <!-- <router-link to="/column/list" class="nav-link">基本信息</router-link> -->
              <router-link  to="/" :class="{'nav-link':true,'active':activeIndex==0}" aria-current="page" @click="activeIndex=0">首页</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/news" :class="{'nav-link':true,'active':activeIndex==1}" @click="activeIndex=1">新闻</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/CourseDetail" :class="{'nav-link':true,'active':activeIndex==2}" @click="activeIndex=2">培训信息</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <el-carousel indicator-position="outside" height="500px">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
  <theme-area title="基本信息" description="新东莞培训机构教学管理系统基本信息" id="BaseInformation">
    <el-row :gutter="12">
      <el-col v-for="(item, index) in detailDataList" :key="index" :xs="18" :sm="14" :md="12" :lg="7" :offset="1">
        <el-card class="box-card m-2">
          <template #header>
            <!-- <div class="clearfix">
              <span>{{item.title}}</span>
              <el-button style="float: right; padding: 3px 0" type="text">优秀</el-button>
            </div> -->
            <el-image src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"></el-image>
          </template>
          <div>
            <h3>{{item.title}}</h3>
          </div>
          <div class="text-muted item">
            {{item.description}}
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!-- <template #footer>213</template> -->
  </theme-area>
  <theme-area title="新闻" description="新东莞培训机构教学管理系统新闻信息" :bkLight="true" id="News">
    <div class="main">
      <column-list :list="list" />
    </div>
    <!-- <template #footer>213</template> -->
  </theme-area>
  <theme-area title="课程信息" description="新东莞培训机构教学管理系统课程信息" id="ClassInformation">
    <div class="main">
      <column-list :list="list" />
    </div>
    <!-- <template #footer>213</template> -->
  </theme-area>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed, onMounted, ref, Ref } from 'vue'
// import store, { GlobalDataProps } from '../store'
import store from '../store'
import ColumnList from '../components/ColumnList.vue'
import ThemeArea from '../components/ThemeArea.vue'
// this.$router
// this.$store
export interface InstitutionsDetailDataProps {
  title: string;
  description: string;
}

export default defineComponent({
  name: 'Home',
  components: {
    ColumnList,
    ThemeArea
  },
  setup() {
    // const store = useStore<GlobalDataProps>()
    const list = computed(() => store.state.columns)
    // const biggerColumnLen = computed(() => store.state.columns.filter(c => c.id > 2).length)
    const biggerColumnLen = computed(() => store.getters.biggerColumnLen)
    const activeIndex = ref(0)
    const detailDataList: InstitutionsDetailDataProps[] = [
      {
        title: '新东莞一对一',
        description: '全部运用目标调控高效学习法，以学定教，按需施教，外引导+内驱动，让孩子形成学习策略体系，构建学习禀赋模型，个性化定制，VIP精准提升'
      },
      {
        title: '精品课堂',
        description: '注重培养学习习惯，差异化关注，将“竞争学习”与“个性化辅导”实现结合的教学形式，专业师资任教，严谨分层教学，提供互动高效、精细服务。这个小班更有效'
      },
      {
        title: '初三特色班',
        description: '专门针对初三学生的课程产品，通过全科辅导、全年跟踪、培养孩子良好的学习习惯、乐观向上的性格，更有效地助力孩子考上理想高中'
      }
    ]
    const handleSelect = (key: any, keyPath: any) => {
      console.log(key, keyPath)
    }
    onMounted(() => {
      // store.commit('add')
    })
    const data = reactive({
      list1: [1, 2, 3]
    })
    const dataRefs = toRefs(data)
    return {
      ...dataRefs,
      // store,
      list,
      biggerColumnLen,
      activeIndex,
      handleSelect,
      detailDataList
    }
  }
})
</script>

<style>
.main {
  margin: 10px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
}
</style>
