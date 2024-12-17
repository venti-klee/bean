<template>
  <div class="card">
    <div class="card-body" style="margin-top: 10px">
      <el-row :gutter="1"> <!-- 缩小列之间的间距 -->
        <el-col :span="12">
          <div class="avatar-container">
            <el-avatar :size="200" class="avatar-center">{{ user_info ? 'user' : '' }}</el-avatar>
            <div class="username">{{ user_info ? user_info.username || 'user' : 'user' }}</div>
            <div class="fans">观看电影数量：{{ user_info ? user_info.num : '未知' }}</div>
          </div>
        </el-col>
        <el-col :span="10">
          <div id="main" style="width:450px; height: 300px;"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import * as echarts from 'echarts';

export default {
  name: "UserNewsInfo",
  data() {
    return {
      user_info: null // 存储从API获取的用户信息
    };
  },
  created() {
    this.fetchUserInfo();
  },
  mounted() {
    if (this.user_info && this.user_info.genres) {
      this.initChart(this.user_info.genres);
    }
  },
  watch: {
    user_info(newVal) {
      if (newVal && newVal.genres) {
        this.initChart(newVal.genres);
      }
    }
  },
  methods: {
    async fetchUserInfo() {
      try {
        const response = await axios.get('https://apifoxmock.com/m1/5395920-5069443-default/user');
        if (response.data && response.data.user_info && response.data.user_info.length) {
          this.user_info = response.data.user_info[0]; // 假设返回的数据结构与提供的JSON一致
        } else {
          console.error("API响应数据不符合预期");
        }
      } catch (error) {
        console.error("获取用户信息失败:", error);
      }
    },
    initChart(genres) {
      const chartDom = document.getElementById('main');
      const myChart = echarts.init(chartDom);
      let option;

      const legendData = Object.keys(genres);
      const seriesData = legendData.map(key => ({
        name: key,
        value: genres[key]
      }));

      option = {
        title: {
          text: '观看电影类型统计',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          type: 'scroll',
          orient: 'vertical',
          right: 0,
          top: 20,
          bottom: 20,
          data: legendData
        },
        series: [
          {
            name: '电影类型',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: seriesData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };

      myChart.setOption(option);
    }
  }
};
</script>

<style scoped>
.card {
  padding: 20px;
}

.avatar-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px; /* 添加上边距 */
  margin-left: 20px; /* 添加左边距 */
}

.avatar-center {
  font-size: 50px;
  margin-bottom: 10px;
}

img {
  border-radius: 50%;
}

button {
  padding: 2px 4px;
  font-size: 14px;
  width: 70px;
}

.username {
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
}

.fans {
  font-size: 14px;
  color: gray;
  font-weight: bold;
}
</style>



