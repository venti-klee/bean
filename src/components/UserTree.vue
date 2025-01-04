<template>
  <div class="container">
    <!-- 矩阵图表 -->
    <div id="chart" class="chart" v-if="showMatrix"></div>

    <!-- 返回按钮 -->
    <button @click="returnToMatrix" v-if="!showMatrix" class="return-button">返回</button>

    <!-- 摘要和电影图片展示区域 -->
    <div class="summary-and-images" v-if="selectedCategory && !showMatrix">
      <!-- 展示完整 summary -->
      <div class="summary-display" v-if="selectedCategory && selectedCategory.summary">
        <h4 style="text-align: center;">摘要</h4>
        <p>{{ selectedCategory.summary }}</p>
        <!-- 显示 tags -->
        <div v-if="selectedCategory.tags.length > 0">
          <h5>相关标签:
            <div class="tag-list">
              <el-tag :type="getTagType(index) || 'info'" v-for="(tag, index) in visibleTags" :key="tag">{{ tag }}</el-tag>
            </div>
            <button @click="toggleShowAllTags" v-if="selectedCategory.tags.length > 5" class="view-more-button">
              {{ showAllTags ? '收起' : '查看更多' }}
            </button>
          </h5>
        </div>
      </div>
      <!-- 电影网格展示 -->
      <div class="movie-grid" v-if="selectedCategory && Array.isArray(selectedCategory.representative_movies)">
        <div v-for="item in selectedCategory.representative_movies" :key="item.id" class="movie-item">
          <div class="movie-title">{{ item.name }}</div>
          <!-- 添加 a 标签用于跳转 -->
          <a :href="'https://movie.douban.com/subject/' + item.id + '/'" target="_blank" rel="noopener noreferrer">
            <el-image :src="item.img" alt="Movie Image" class="movie-image">
              <template #error>
                <div class="image-slot" style="text-align: center;justify-content: center " >
                  <h1 style="color: black"> {{item.name}} </h1>

                </div>
              </template>
            </el-image>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import axios from "axios";
import { ElTag } from 'element-plus';

export default {
  name: 'TreemapMovieWithParent',
  components: {
    ElTag // 注册 el-tag 组件
  },
  data() {
    return {
      movieData: {
        name: '主题类',
        children: []
      },
      selectedCategory: null,
      showMatrix: true, // 控制是否显示矩阵图
      showAllTags: false // 控制是否显示所有标签
    };
  },
  computed: {
    visibleTags() {
      if (this.showAllTags || this.selectedCategory?.tags.length <= 5) {
        return this.selectedCategory?.tags || [];
      } else {
        return this.selectedCategory?.tags.slice(0, 5);
      }
    }
  },
  methods: {
    async fetchData() {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user || !user.id) {
          console.error('未能从 localStorage 获取有效的 user id');
          return;
        }
        const userId = user.id;

        const response = await axios.get('http://112.124.3.24:8927/UserPortrait', {
          params: {
            user_id: userId
          }
        });

        if (response.status !== 200) {
          throw new Error(`Unexpected response status: ${response.status}`);
        }

        const data = response.data;
        console.log("Full Response Data:", data);

        this.movieData.children = data.user_portraits.map(cluster => ({
          summary: cluster.summary,
          name: cluster.summary,
          value: cluster.movie_count,
          children: cluster.keywords ? cluster.keywords.map(keyword => ({
            name: keyword,
            value: cluster.movie_count
          })) : [],
          representative_movies: cluster.representative_movies.map(movie => ({
            ...movie,
            movieTags: this.parseTags(movie.tag) // 解析 tag 字符串为数组
          })),
          tags: cluster.tags || []
        }));

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    parseTags(tagString) {
      if (!tagString) return [];

      // 清除多余的空白和引号，然后分割成数组
      return tagString.replace(/[$$']/g, '').split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);
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
          formatter: function (params) {
            return `<div style="max-width: 300px; white-space: normal; word-break: break-word; font-size: 14px; line-height: 1.5;text-align: left;">
              <strong>${params.name}</strong><br/><br/>
              观看电影数量：${params.value}
            </div>`;
          },
          backgroundColor: '#fff',
          borderColor: '#ddd',
          borderWidth: 1,
          textStyle: {
            color: '#333',
          },
        },
        series: [
          {
            name: this.movieData.name,
            type: 'treemap',
            data: this.movieData.children,
            leafDepth: 1,
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
              position: 'inside',
              fontSize: 18,
              lineHeight: 40,
              formatter: function (params) {
                const text = params.data.summary;
                const lines = text.split('. ').map(sentence => sentence.trim()).filter(sentence => sentence.length > 0);
                return lines.slice(0, 2).join('\n') + (lines.length > 3 ? '...' : '');
              },
              overflow: 'breakAll',
              width: 'auto',
              padding: 25,
              fontWeight: 'normal',
              rich: {
                default: {
                  align: 'left',
                  verticalAlign: 'middle',
                  padding: [20, 30, 20, 30]
                }
              }
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

      myChart.on('click', (params) => {
        const category = this.findTopLevelCategory(params);
        if (category) {
          this.selectedCategory = category;
          this.showMatrix = false; // 隐藏矩阵图
        }
      });
    },
    findTopLevelCategory(params) {
      let currentData = params.data;
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
      return null;
    },
    getTagType(index) {
      const types = ['primary'];
      return types[Math.abs(index) % types.length];
    },
    toggleShowAllTags() {
      this.showAllTags = !this.showAllTags;
    },
    returnToMatrix() {
      this.showMatrix = true;
      this.selectedCategory = null;
      this.fetchData().then(() => {
        this.initChart();
        console.log('Movie Data:', this.movieData); // 输出 movieData 数据以进行调试
      });
    }
  },
  mounted() {
    this.fetchData().then(() => {
      this.initChart();
      console.log('Movie Data:', this.movieData); // 输出 movieData 数据以进行调试
    });
  }
};
</script>

<style scoped>
/* 容器样式 */
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
}

/* 图表样式 */
.chart {
  width: 100%;
  height: 600px;
  max-width: 1200px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: #fff;
  margin-bottom: 20px;
}

/* Summary 和电影图片展示区域 */
.summary-and-images {
  display: flex;
  gap: 20px;
}

/* Summary 显示样式 */
.summary-display {
  margin-top: 20px;
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 18px;
  line-height: 2;
  width: 50%;
  height: 455px;
  text-align: left;
  overflow-y: auto;
}

/* 相关标签样式 */
.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  background-color: #e0e0e0;
  color: #333;
  padding: 5px 10px;
  border-radius: 4px;
}

/* 查看更多按钮样式 */
.view-more-button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.view-more-button:hover {
  background-color: #0056b3;
}

/* 电影图片展示区域 */
.movie-grid {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 20px;
  margin-top: 20px;
  height: 470px;
}

.movie-item {
  min-width: 250px;
  max-width:250px;
  flex-shrink: 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  background-color: #f9f9f9;
  text-align: center;
  height: 430px;
}

.movie-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.movie-image {
  width: 250px;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
}

/* 电影下的标签样式 */
.movie-tags {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 10px;
}

/* 悬浮窗样式 */
.tooltip-content {
  max-width: 300px;
  white-space: normal;
  word-break: break-word;
  font-size: 14px;
  line-height: 1.5;
  color: #333;
}

/* 返回按钮样式 */
.return-button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.return-button:hover {
  background-color: #0056b3;
}
</style>