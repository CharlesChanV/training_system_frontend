export interface ColumnProps {
  id: number;
  title: string;
  avatar: string;
  description: string;
}
export const testData: ColumnProps[] = [
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
export interface PostProps {
  id: number;
  title: string;
  content: string;
  image?: string;
  createAt: string;
  columnId: number;
  canChoose: number;
}
export const testPost: PostProps[] = [
  {
    id: 1,
    title: '青年人恋爱婚姻指南',
    content: '如何经营自己的爱情与婚姻？好的爱情与婚姻需要用一生来维护。拿好这份《青年人恋爱婚姻指南》，在人生路上，抓住爱情与婚姻中那些不经意的瞬间，你的爱情与婚姻，由你自己',
    image: 'https://cn.vuejs.org/images/logo.png',
    createAt: '2020-06-11 10:00:00',
    columnId: 1,
    canChoose: 1
  },
  {
    id: 2,
    title: '如何搞定名校MBA申请',
    content: '对于想要提升学习，未来想要在职场中走的更远的年轻人们来说，学历的提升有助于我们走的更远，今天我们就分享一些名校MBA申请那些事儿，专家解读名校MBA申请攻略',
    image: 'https://pic1.zhimg.com/50/v2-f6994d8229dd3e293b3532479f80d52b_720w.jpg?source=b1f6dc53',
    createAt: '2020-06-12 10:00:00',
    columnId: 1,
    canChoose: 1
  },
  {
    id: 3,
    title: '川菜很行',
    content: '不同的饮食文化衍生出了不同的菜系，这是一场众人味蕾间的博弈；菜系的变化和生长，每一个普通人都参与其中。川菜的传承与变革，会用什么方式开启新篇章？',
    image: 'https://pic1.zhimg.com/50/v2-938faf36b298a449fcea053d2ddf3d97_720w.jpg?source=b1f6dc53',
    createAt: '2020-06-13 10:00:00',
    columnId: 1,
    canChoose: 0
  },
  {
    id: 4,
    title: '川菜很行',
    content: '不同的饮食文化衍生出了不同的菜系，这是一场众人味蕾间的博弈；菜系的变化和生长，每一个普通人都参与其中。川菜的传承与变革，会用什么方式开启新篇章？',
    image: 'https://pic1.zhimg.com/50/v2-938faf36b298a449fcea053d2ddf3d97_720w.jpg?source=b1f6dc53',
    createAt: '2020-06-13 10:00:00',
    columnId: 2,
    canChoose: 1
  },
  {
    id: 5,
    title: '川菜很行',
    content: '不同的饮食文化衍生出了不同的菜系，这是一场众人味蕾间的博弈；菜系的变化和生长，每一个普通人都参与其中。川菜的传承与变革，会用什么方式开启新篇章？',
    image: 'https://pic1.zhimg.com/50/v2-938faf36b298a449fcea053d2ddf3d97_720w.jpg?source=b1f6dc53',
    createAt: '2020-06-13 10:00:00',
    columnId: 3,
    canChoose: 0
  }
]
