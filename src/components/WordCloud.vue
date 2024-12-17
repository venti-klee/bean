<template>
  <div class="bestsellers-container">
    <div id="charts-content">
      <chart-word-cloud v-if="state.chartOptions.series[0].data.length > 0" :options="state.chartOptions"></chart-word-cloud>
    </div>
  </div>
</template>

<script>
import {reactive} from 'vue'
import axios from 'axios'
import ChartWordCloud from '@/components/SonCloud.vue'

export default {
  components: {
    ChartWordCloud
  },
  data() {
    return {
      state: reactive({
        chartOptions: {
          series: [{
            type: 'wordCloud', // 确保图表类型是词云
            data: [] // 这里应该是数据数组
          }],
        },
      }),
    }
  },
  // 在组件挂载时请求数据
  created() {
    this.fetchData()
  },
  methods: {
    // 获取API数据
    async fetchData() {
      try {
        const userId = JSON.parse(localStorage.getItem('user')).id;
        const response = await axios.get('http://112.124.3.24:8927/UserPortrait', {
          params: {
            user_id: userId
          }
        });
        //const response = await axios.get('http://112.124.3.24:8927/UserPortrait');
        const data = response.data;

        // 假设返回的数据结构为 { user_info: [{ tags: {...} }] }
        if (data.user_info && data.user_info.length > 0) {
          const tags = data.user_info[0].tags;

          // 将标签数据转化为词云所需的格式
          const transformedData = [];
          for (const tag in tags) {
            transformedData.push({
              name: tag,
              value: tags[tag] * 5, // 使用标签的值作为词频（权重）
            });
          }

          // 更新chartOptions中的data
          this.state.chartOptions.series[0].data = transformedData;
          console.log(this.state.chartOptions);
        } else {
          console.error("API响应数据不符合预期");
        }
      } catch (error) {
        console.error('获取数据失败:', error);
      }
    }
  },
}
</script>

<style scoped>
.bestsellers-container {
  height: 550px;
  width: 550px;
  background: white;
  position: relative;
  margin-left: auto;
  margin-right: auto;
}

#charts-content {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>



