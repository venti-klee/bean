<template>
  <div style="background-color:rgba(255, 255, 255, 0.5); height: 800px;">
    <el-row>
      <el-col :span="21" :offset="0" style="height: 800px">
        <div>
          <!-- 电影推荐列表 -->
          <div style="height: 750px">
            <el-row style="height: 300px;">
              <el-col :span="6" v-for="item in displayedMovies" :key="item.id">
                <el-card :body-style="{ padding: '0px' }" shadow="hover" style="height: 360px; position: relative;" @click="openDoubanLink(item)">
                  <div class="card-overlay" v-show="isHovered(item)">
                    <div class="overlay-content">
                      <h4>{{ item.name }}</h4>
                      <p>{{ getSummary(item) }}</p>
                    </div>
                  </div>
                  <el-image :src="item.img" fit="contain" style="height: 280px; padding: 0" @mouseover="hoverItem = item" @mouseleave="hoverItem = null" ></el-image>
                  <div class="el-card__footer" style="margin: 0;padding: 0">
                    <el-rate style="margin: 0"
                             v-model="item.convertedRate"
                             disabled
                             show-score
                             text-color="#ff9900"
                             :score-template="`${item.rate} `"
                    />
                    <h4 style="margin: 0">{{ item.name }}</h4>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
          <!-- 分页组件 -->
          <div style="text-align: center; margin-top: 20px;">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-size="pageSize"
                layout="total, prev, pager, next, jumper"
                background
                :total="totalMovies"
                style="justify-content: center; "
            />
          </div>
        </div>
      </el-col>
      <el-col :span="3" :offset="0">
        <h2 class="two">历史口味推荐区</h2>
        <br>
        <p>拌豆酱根据您历史的电影评分记录猜测也许这些电影比较符合您的口味哦</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "MyMayLike3",
  data() {
    return {
      hoverItem: null,
      movies: [],
      displayedMovies: [],
      totalMovies: 0,
      pageSize: 8,
      currentPage: 1
    };
  },
  created() {
    this.fetchMovies();
  },
  methods: {
    async fetchMovies() {
      try {
        const userId = JSON.parse(localStorage.getItem('user')).id; // 获取用户ID
        const response = await axios.get('http://192.168.43.21:5000/Filtering', {
          params: {
            user_id: userId
          }
        });
        this.movies = response.data.map(item => ({
          ...item,
          convertedRate: item.rate / 2
        }));
        this.totalMovies = this.movies.length;
        this.updateDisplayedMovies();
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    },
    isHovered(item) {
      return this.hoverItem === item;
    },
    getSummary(item) {
      if(item.summary.length===0)
        return "暂无简介";
      return item.summary.slice(0, 50) + "...";
    },
    updateDisplayedMovies() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      this.displayedMovies = this.movies.slice(start, end);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      // 固定每页显示8个，不需要处理这个事件
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.updateDisplayedMovies();
    },
    openDoubanLink(item) {
      const doubanUrl = `https://movie.douban.com/subject/${item.movieID}/`;
      window.open(doubanUrl, '_blank');
    }
  }
};
</script>

<style scoped>
.el-card {
  margin-right: 20px;
  margin-bottom: 20px;
  transition: transform .5s;
}
.el-card:hover {
  transform: translateY(-5px);
}
.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80%;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  z-index: 10; /* 确保遮掩层在图片上方 */
}
.overlay-content {
  text-align: center;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}
.overlay-content h4 {
  margin: 5px 0;
  font-size: 18px;
}
.overlay-content p {
  margin: 5px 0;
  font-size: 14px;
  line-height: 1.5;
}
.two {
  margin: 0 auto;
  height: 300px;
  writing-mode: vertical-lr;
  writing-mode: tb-lr;
}
</style>