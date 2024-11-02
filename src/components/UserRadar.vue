<!-- RadarChart.vue -->
<template>
  <div>
    <radar-chart :chart-data="chartData" :options="chartOptions"/>
  </div>
</template>

<script>
import { Radar } from 'vue-chartjs';
import { reactiveProp } from 'vue-chartjs/mixins';

export default {
  mixins: [reactiveProp],
  components: {
    RadarChart: {
      extends: Radar,
      props: ['options'],
      mounted () {
        this.renderChart(this.chartData, this.options);
      },
      watch: {
        chartData () {
          this.$data._chart.update();
        }
      }
    },
  },
  data() {
    return {
      chartData: {
        labels: ['Quality', 'Service', 'Atmosphere', 'Value'],
        datasets: [
          {
            label: 'User Ratings',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            pointBackgroundColor: 'rgba(255, 99, 132, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
            data: [0, 0, 0, 0], // 初始数据
          },
        ],
      },
      chartOptions: {
        // 雷达图的配置选项
      },
    };
  },
  methods: {
    updateChart(ratings) {
      this.chartData.datasets[0].data = [
        ratings.quality,
        ratings.service,
        ratings.atmosphere,
        ratings.value,
      ];
    },
  },
};
</script>

<style scoped>

</style>