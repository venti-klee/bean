<template>
  <div id="charts-content"></div>
</template>

<script setup>
import * as echarts from 'echarts';
import 'echarts-wordcloud';
import { defineProps, watch, nextTick, ref } from "vue";
import merge from 'lodash/merge';

const props = defineProps({
  options: {
    type: Object,
    required: true
  }
});

// 词云图默认属性
const defaultSeries = [{
  type: 'wordCloud',
  shape: 'circle',
  keepAspect: false,
  left: 'center',
  top: 'center',
  width: '100%',
  height: '100%',
  sizeRange: [25, 55],
  rotationRange: [-90, 90],
  rotationStep: 45,
  gridSize: 8,
  drawOutOfBound: false,
  layoutAnimation: true,
  textStyle: {
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    color: function () {
      return 'rgb(' +
          [Math.round(Math.random() * 250), Math.round(Math.random() * 250), Math.round(Math.random() * 250)].join(',') +
          ')';
    }
  },
  emphasis: {
    focus: 'self',
    textStyle: {
      textShadowBlur: 10,
      textShadowColor: '#999'
    }
  },
  data: []
}];

// 使用 ref 来存储合并后的图表配置
const mergedSeries = ref({});

// 合并父组件传递的配置
const getMergedSeries = () => {
  const seriesData = props.options.series || [];
  return merge({}, defaultSeries[0], seriesData[0] || {});
}

// 创建词云图
const drawWordCloud = () => {
  const myChart = echarts.init(document.getElementById("charts-content"));
  const series = mergedSeries.value;
  myChart.setOption({
    series: [series] // 使用合并后的配置
  });
};

// 使用 watch 监听 options 的变化
watch(
    () => props.options,
    async () => {
      // 只有在数据变化时更新图表
      const mergedData = getMergedSeries();
      if (JSON.stringify(mergedData) !== JSON.stringify(mergedSeries.value)) {
        mergedSeries.value = mergedData;
        await nextTick(); // 等待 DOM 更新
        drawWordCloud(); // 重新绘制图表
      }
    },
    {immediate: true} // 初次挂载时也立即执行一次
);

</script>

<style scoped>
#charts-content {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
