<template>
  <div class="bestsellers-container">
    <chart-word-cloud :options="state.chartOptions"></chart-word-cloud>
  </div>
</template>

<script setup>
import ChartWordCloud from '@/components/SonCloud.vue'
import { reactive } from 'vue'
const state = reactive({
  chartOptions: {
    series: [{
      data: [
        { name: '惊悚', value: 30 },
        { name: '爱情', value: 30 },
        { name: '丧尸', value: 28 },
        { name: '悬疑故事', value: 25 },
        { name: '战争史诗', value: 15 },
        { name: '神秘事件', value: 20 },
        { name: '家庭剧', value: 14 },
        { name: '友谊岁月', value: 19 },
        { name: '励志故事', value: 11 },
        { name: '治愈系', value: 17 },
        { name: '幻想旅程', value: 12 },
        { name: '魔法师', value: 10 },
        { name: '犯罪心理', value: 9 },
        { name: '乡村爱情', value: 10 },
        { name: '都市传说', value: 7 },
        { name: '旅行记录', value: 6 },
        { name: '搞笑漫画', value: 5 },
        { name: '校园青春', value: 15 },
        { name: '星空探秘', value: 14 },
        { name: '温暖瞬间', value: 16 },
        { name: '欢乐时光', value: 14 },
        { name: '思念的心', value: 13 },
        { name: '期待未来', value: 12 },
        { name: '礼物交换', value: 10 },
        { name: '成长故事', value: 19 },
        { name: '亲密关系', value: 17 },
        { name: '团结力量', value: 15 },
        { name: '快乐时光', value: 18 },
        { name: '努力拼搏', value: 14 },
        { name: '梦想旅程', value: 18 },
        { name: '探索未知', value: 25 },
        { name: '分享快乐', value: 22 },
        { name: '真诚友谊', value: 19 },
        { name: '希望之声', value: 18 },
        { name: '勇敢追梦', value: 15 },
        { name: '智慧光芒', value: 14 },
        { name: '热爱生活', value: 6 },
        { name: '欢笑声', value: 5 },
        { name: '阳光下', value: 4 },
        { name: '美好愿望', value: 3 }
      ],
    }],
  },
})

</script>

<style scoped>
.bestsellers-container {
  height: 600px;
  width: 600px;
  background:white;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  margin-left: 240px;
  margin-bottom: 20px
}
#charts-content {
  /* 需要设置宽高后才会显示 */
  width: 100%;
  height: 100%;
}
</style>