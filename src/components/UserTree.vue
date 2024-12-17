<template>
  <div class="container">
    <!-- 单个大图表显示所有数据 -->
    <div id="chart" class="chart"></div>
    <!-- 电影图片展示区域 -->
    <div class="movie-images" v-if="selectedCategory">
      <el-carousel height="600px" direction="vertical" type="card" :autoplay="false">
        <el-carousel-item v-for="item in selectedCategory.representative_movies" :key="item.id">
          <img :src="item.img" alt="Movie Image" class="movie-image">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import { ElCarousel, ElCarouselItem } from 'element-plus';

export default {
  name: 'TreemapMovieWithParent',
  components: {
    ElCarousel,
    ElCarouselItem
  },
  data() {
    return {
      movieData: {
        name: '电影标签',
        children: []
      },
      selectedCategory: null
    };
  },
  mounted() {
    this.fetchData().then(() => {
      this.initChart();
    });
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch('https://apifoxmock.com/m1/5395920-5069443-default/user');
        const data = await response.json();
        this.movieData.children = data.user_portraits.map(cluster => ({
          name: `类${cluster.cluster_id}`,
          value: cluster.movie_count,
          children: cluster.keywords.map(keyword => ({ name: keyword, value: cluster.movie_count })),
          representative_movies: cluster.representative_movies
        }));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    initChart() {
      const chartDom = document.getElementById('chart');
      const myChart = echarts.init(chartDom);
      const option = {
        title: {
          text: this.movieData.name,
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}: {c}'
        },
        series: [
          {
            name: this.movieData.name,
            type: 'treemap',
            data: this.movieData.children,
            leafDepth: 2, // 保持为 2
            levels: [
              {
                itemStyle: {
                  borderColor: '#555',
                  borderWidth: 2,
                  gapWidth: 2
                }
              },
              {
                colorSaturation: [0.3, 0.6],
                itemStyle: {
                  borderColorSaturation: 0.7,
                  gapWidth: 1
                }
              }
            ],
            label: {
              show: true,
              position: 'inside'
            },
            emphasis: {
              itemStyle: {
                borderColor: '#000',
                borderWidth: 2
              }
            },
            itemStyle: {
              cursor: 'pointer'
            },
            universalTransition: {
              enabled: true
            }
          }
        ]
      };
      myChart.setOption(option);

      // 添加点击事件监听器，并阻止默认行为
      myChart.on('click', (params) => {
        const category = this.findTopLevelCategory(params);
        if (category) {
          this.selectedCategory = category;
        }
      });
    },
    findTopLevelCategory(params) {
      let currentData = params.data;
      // 如果点击的是子项，则向上回溯到顶级类别
      while (currentData && !Array.isArray(currentData.children)) {
        currentData = this.getParentCategory(currentData);
        if (!currentData) break;
      }
      return currentData;
    },
    getParentCategory(child) {
      for (let category of this.movieData.children) {
        if (category.children.some(item => item.name === child.name)) {
          return category;
        }
      }
      return null; // 如果没有找到对应的类别，返回null
    }
  }
};
</script>

<style scoped>
/* 容器样式 */
.container {
  display: flex;
  justify-content: center;
  align-items: flex-start; /* 调整对齐方式 */
  padding: 20px;
}

/* 图表样式 */
.chart {
  width: 50%;
  height: 600px;
  max-width: 1200px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: #fff;
}

/* 电影图片展示区域 */
.movie-images {
  width: 20%;
  margin-left: 40px; /* 调整左边距 */
  margin-top: 0; /* 移除顶部边距 */
}

/* 轮播图样式 */
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.movie-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>