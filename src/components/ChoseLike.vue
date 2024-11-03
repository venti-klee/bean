<template>
  <div :style="{ height: contentHeight + 'px', backgroundColor: 'rgba(255, 255, 255, 0.5)' }">
    <el-row>
      <el-col :span="3" :offset="0">
        <h2 class="two">自由小料推荐区</h2>
        <br>
        <p>拌豆酱将根据您选择的标签展开推荐哦</p>
      </el-col>
      <el-col :span="21" :offset="0" style="height: 100%;">
        <el-row style="height: 400px;">
          <el-form>
            <el-form-item prop="chose_tag">
              <label>请选择您感兴趣的标签</label>
              <hr>
              <el-checkbox-group v-model="checkboxGroup1">
                <el-row>
                  <el-col :span="3" :offset="0" v-for="item in genresList" :key="item.key">
                    <el-checkbox-button style="margin-right: 20px; margin-bottom: 20px;" :label="item.label">
                      {{ item.label }}
                    </el-checkbox-button>
                  </el-col>
                </el-row>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item>
              <label>请选择个性化程度</label>
              <div class="slider-demo-block" style="width: 600px">
                <el-slider v-model="value" show-input />
              </div>
              <el-button type="primary" @click="fetchRecommendations" style="float: right;">嘟，拌豆启动</el-button>
            </el-form-item>
          </el-form>
        </el-row>
        <el-row v-loading="loading" element-loading-text="加载中..."  style="height: 100%;">
          <el-col :span="6" v-for="item in recommendations" :key="item.id">
            <el-card :body-style="{ padding: '0px' }" shadow="hover" style="height: 400px;" @click="openDoubanLink(item)">
              <div class="card-header" style="height: 40px">
                <h4>{{ item.name }}</h4>
              </div>
              <el-image :src="item.img" fit="cover" style="height: 240px; padding: 0"></el-image>
              <div class="el-card__footer" style="margin: 0; padding: 0">
                <p style="font-size: 10px">{{item.summary.slice(0,80)+"..."}}</p>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      checkboxGroup1: [],
      value: 0,
      loading: false,
      recommendations: [],
      genresList: [
        { label: '未知', key: 0 },
        { label: '喜剧', key: 1 },
        { label: '爱情', key: 2 },
        { label: '动作', key: 3 },
        { label: '科幻', key: 4 },
        { label: '动画', key: 5 },
        { label: '悬疑', key: 6 },
        { label: '犯罪', key: 7 },
        { label: '惊悚', key: 8 },
        { label: '冒险', key: 9 },
        { label: '音乐', key: 10 },
        { label: '历史', key: 11 },
        { label: '奇幻', key: 12 },
        { label: '恐怖', key: 13 },
        { label: '战争', key: 14 },
        { label: '传记', key: 15 },
        { label: '歌舞', key: 16 },
        { label: '武侠', key: 17 },
        { label: '情色', key: 18 },
        { label: '灾难', key: 19 },
        { label: '西部', key: 20 },
        { label: '纪录片', key: 21 },
        { label: '短片', key: 22 },
        { label: '剧情', key: 23 },
        { label: '古装', key: 24 },
        { label: '家庭', key: 25 },
        { label: '儿童', key: 26 },
        { label: '运动', key: 27 },
        { label: '同性', key: 28 },
        { label: '荒诞', key: 29 },
        { label: '惊栗', key: 30 },
        { label: '鬼怪', key: 31 },
        { label: '戏曲', key: 32 },
        { label: '真人秀', key: 33 },
        { label: '黑色电影', key: 34 },
        { label: '舞台艺术', key: 35 },
        { label: '脱口秀', key: 36 },
        { label: '成人', key: 37 },
        { label: '记录', key: 38 }
      ]
    };

  },

  computed: {
    contentHeight() {
      // 计算推荐卡片的高度总和
      const cardHeight = 400; // 每个卡片的高度
      const cardsPerRow = 4; // 每行显示的卡片数量
      const numRows = Math.ceil(this.recommendations.length / cardsPerRow); // 总行数
      const totalCardHeight = numRows * cardHeight; // 所有卡片的总高度

      // 加上表单和其他固定部分的高度
      const fixedHeight = 400; // 表单部分的高度
      const loadingHeight = this.loading ? 100 : 0; // 加载提示的高度

      return fixedHeight + totalCardHeight + loadingHeight;
    }
  },
  methods: {

    async fetchRecommendations() {
      this.loading = true;

      console.log(this.checkboxGroup1.slice());
      console.log(this.value);

      try {
        const response = await axios.post('https://apifoxmock.com/m1/5395920-5069443-default/choselike', {
          tags: this.checkboxGroup1.slice(),
          personalizationLevel: this.value
        });

        this.recommendations = response.data;
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      } finally {
        this.loading = false;
      }
    },
    openDoubanLink(item) {
      const doubanUrl = `https://movie.douban.com/subject/${item.movieID}/`;
      window.open(doubanUrl, '_blank');
    }
  },

};
</script>

<style scoped>
/* ... 原有样式 */
.slider-demo-block {
  min-width: 600px;
  display: flex;
  align-items: center;
}
.slider-demo-block .el-slider {
  margin-top: 0;
  margin-left: 12px;
}
.two {
  margin: 0 auto;
  height: 300px;
}

/* 自定义加载样式 */
.example-showcase .el-loading-mask {
  z-index: 9;
}
</style>