import { createStore } from 'vuex'
import { testData, testPost, ColumnProps, PostProps } from './testData'
interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}
export interface GlobalDataProps {
  columns: ColumnProps[];
  posts: PostProps[];
  user: UserProps;
}

const store = createStore<GlobalDataProps>({
  state: {
    columns: testData,
    posts: testPost,
    user: { isLogin: false }
  },
  mutations: {
    login(state) {
      state.user = { ...state.user, isLogin: true, name: 'chr' }
    },
    logout(state) {
      state.user = { isLogin: false }
    },
    add(state) {
      state.columns.push({
        id: 10,
        title: '我与游戏的一二事',
        description: '天美十二周年，腾讯天美工作室群与知乎合作，邀请游戏玩家和开发者们，谈一谈自己与游戏有关的经历与思考。',
        avatar: 'https://pic4.zhimg.com/50/v2-d3553dd542c08c4b89dd161545797a57_720w.jpg?source=b1f6dc53'
      })
    }
  },
  getters: {
    biggerColumnsLen(state) {
      return state.columns.filter(c => c.id > 2).length
    }
  }
})
// store.state.columns
export default store
