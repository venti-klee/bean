<template>
  <el-row>
    <el-col :span="17" :offset="1">
      <div id="bubble" style="width: 650px; height: 650px;"></div>
    </el-col>
    <el-col :span="6" >
      <div id="right-panel" style="background:repeating-linear-gradient(to top,#cbdfd9,wheat); padding:0px; color: black;">

      </div>
    </el-col>
  </el-row>
</template>
<script>
import * as echarts from 'echarts/core';
import {
  DatasetComponent,
  TooltipComponent,
  VisualMapComponent
} from 'echarts/components';
import { CustomChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([
  DatasetComponent,
  TooltipComponent,
  VisualMapComponent,
  CustomChart,
  CanvasRenderer
]);
import * as d3 from 'd3';

export default {
  data() {
    return {
      option: {},
      colorList: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc']
    };
  },
  mounted() {
    let that = this;
    let seriesData = [
      {
        "depth": 0,
        "id": "电影",
        "index": 0,
        "value": 0,
        "movies": [],
        "pictures":[]
      },
      {
        "depth": 1,
        "id": "电影.动作片 成龙 冒险",
        "index": 1,
        "value": 300,
        "movies": ["黑客帝国", "速度与激情10", "碟中谍7"],
        "pictures": ["https://img1.doubanio.com/view/photo/s_ratio_poster/public/p451926968.webp",
          "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2890967727.webp",
          "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2893481084.webp"]
      },
      {
        "depth": 1,
        "id": "电影.科幻片",
        "index": 2,
        "value": 50,
        "movies": ["星际穿越", "银翼杀手2049", "头号玩家"],
        "pictures": ["https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2614988097.webp",
          "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2501864539.webp",
          "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2893481084.webp"]
      },
      {
        "depth": 1,
        "id": "电影.爱情片",
        "index": 3,
        "value": 300,
        "movies": ["泰坦尼克号", "爱情公寓", "我最好朋友的婚礼"],
        "pictures": ["https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2614988097.webp",
          "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2501864539.webp",
          "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2893481084.webp"]
      },
      {
        "depth": 1,
        "id": "电影.喜剧片",
        "index": 4,
        "value": 40,
        "movies": ["美国派", "我不是药神", "夏洛特烦恼"],
        "pictures": ["https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2614988097.webp",
          "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2501864539.webp",
          "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2893481084.webp"]
      },
      {
        "depth": 1,
        "id": "电影.悬疑片",
        "index": 5,
        "value": 50,
        "movies": ["盗梦空间", "记忆碎片", "解忧杂货店"],
        "pictures": ["https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2614988097.webp",
          "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2501864539.webp",
          "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2893481084.webp"]
      },
      {
        "depth": 1,
        "id": "电影.动画片",
        "index": 6,
        "value": 60,
        "movies": ["千与千寻", "寻梦环游记", "疯狂动物城"],
        "pictures": ["https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2614988097.webp",
          "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2501864539.webp",
          "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2893481084.webp"]
      },
      {
        "depth": 1,
        "id": "电影.冒险片",
        "index": 7,
        "value": 100,
        "movies": ["印第安纳·琼斯", "加勒比海盗", "荒野猎人"],
        "pictures": ["https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2614988097.webp",
          "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2501864539.webp",
          "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2893481084.webp"]
      },
      // 添加新的分类和电影
      {
        "depth": 1,
        "id": "电影.犯罪片",
        "index": 8,
        "value": 70,
        "movies": ["黑暗骑士", "盗梦空间", "无间道"],
        "pictures": ["https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2614988097.webp",
          "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2501864539.webp",
          "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2893481084.webp"]
      },
      {
        "depth": 1,
        "id": "电影.战争片",
        "index": 9,
        "value": 80,
        "movies": ["拯救大兵瑞恩", "兄弟连", "黑鹰坠落"],
        "pictures": ["https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2614988097.webp",
          "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2501864539.webp",
          "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2893481084.webp"]
      },
      {
        "depth": 1,
        "id": "电影.历史片",
        "index": 10,
        "value": 90,
        "movies": ["勇敢的心", "角斗士", "国王的演讲"],
        "pictures": ["https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2614988097.webp",
          "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2501864539.webp",
          "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2893481084.webp"]
      },
      {
        "depth": 1,
        "id": "电影.恐怖片",
        "index": 11,
        "value": 60,
        "movies": ["电锯惊魂", "招魂", "寂静之地"],
        "pictures": ["https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2614988097.webp",
          "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2501864539.webp",
          "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2893481084.webp"]
      },
      // ... 继续添加更多分类和电影直到有40个索引
      {
        "depth": 1,
        "id": "电影.音乐片",
        "index": 38,
        "value": 55,
        "movies": ["音乐之声", "歌剧魅影", "爱乐之城"],
        "pictures": ["https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2614988097.webp",
          "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2501864539.webp",
          "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2893481084.webp"]
      },
      {
        "depth": 1,
        "id": "电影.纪录片",
        "index": 39,
        "value": 45,
        "movies": ["地球脉动", "宇宙之旅", "海豚湾"],
        "pictures": ["https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2614988097.webp",
          "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2501864539.webp",
          "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2893481084.webp"]
      }
    ]


    let displayRoot = stratify1();

    function stratify1() {
      return d3
          .stratify()
          .parentId(function (d) {
            return d.id.substring(0, d.id.lastIndexOf('.'));
          })(seriesData)
          .sum(function (d) {
            return d.value || 0;
          })
          .sort(function (a, b) {
            return b.value - a.value;
          });
    }

    function overallLayout(params, api) {
      let context = params.context;
      d3
          .pack()
          .size([api.getWidth() - 2, api.getHeight() - 2])
          .padding(0)(displayRoot);
      context.nodes = {};
      displayRoot.descendants().forEach(function (node) {
        context.nodes[node.id] = node;
      });
    }

    function renderItem(params, api) {
      let context = params.context;
      let idx = params.dataIndex;

      // Only do that layout once in each time `setOption` called.
      if (!context.layout) {
        context.layout = true;
        overallLayout(params, api);
      }

      let nodePath = api.value('id');
      let nodeName = nodePath
          .slice(nodePath.lastIndexOf('.') + 1)
          .split(/(?=[A-Z][^A-Z])/g)
          .join('\n');

      let node = context.nodes[nodePath];
      if (node.id === '电影') {
        node.r = 0;
      }
      if (!node) {
        // Reder nothing.
        return;
      }

      let z2 = api.value('depth') * 2;
      //let nodeMovies = node.data.movies;

      return {
        type: 'circle',
        shape: {
          cx: node.x,
          cy: node.y,
          r: node.r
        },
        z2: z2,
        textContent: {
          type: 'text',
          style: {
            text: nodeName,
            fill: '#fff',
            fontFamily: 'Arial',
            width: node.r * 1.3,
            overflow: 'truncate',
            fontSize: node.r / 3
          },
          emphasis: {
            style: {
              overflow: null,
              fontSize: Math.max(node.r / 3, 12)
            }
          }
        },
        textConfig: {
          position: 'inside'
        },
        style: {
          fill: that.colorList[idx % that.colorList.length]
        },
        emphasis: {
          style: {
            fontFamily: 'Arial',
            fontSize: 12,
            shadowBlur: 20,
            shadowOffsetX: 3,
            shadowOffsetY: 5,
            shadowColor: 'rgba(0,0,0,0.3)'
          },
          focus: 'self',
          blurScope: 'coordinateSystem'
        },
        events: {
          click: function () {
            console.log('Click event triggered for:', node.id);
            // 使用Vue的$nextTick来确保DOM更新
            this.$nextTick(() => {
              document.getElementById('right-panel').innerHTML = `
        <div></n><strong>类型:</strong> ${node.id}</div>
        <div><strong>电影</strong></div>
          <div id="movie-images">
            ${node.movies.map((movie, index) => `
              <div>
                <p>${movie}</p>
                <img src="${node.pictures[index]}" alt="${movie}" style="max-width: 100%;">
              </div>
            `).join('')}
          </div>
        `;
            });
          }
        }
      };
    }

    this.option = {
      dataset: {
        source: seriesData
      },
      tooltip: {},
      hoverLayerThreshold: Infinity,
      series: [{
        type: 'custom',
        colorBy: 'data',
        renderItem: renderItem,
        progressive: 0,
        coordinateSystem: 'none',
        encode: {
          tooltip: 'value',
          itemName: 'id'
        }
      }]
    };

    this.initEcharts();
  },
  methods: {
    initEcharts() {
      let myChart = echarts.init(document.getElementById('bubble'));
      myChart.setOption(this.option);

      // 添加点击事件监听器
      myChart.on('click', (params) => {
        // 你可以在这里直接处理点击事件
        console.log('Chart click event:', params);
        // 更新right-panel的内容
        let nodePath = params.name;
        nodePath
            .slice(nodePath.lastIndexOf('.') + 1)
            .split(/(?=[A-Z][^A-Z])/g)
            .join('\n');
        let seriesData = this.option.dataset.source;
        let node = seriesData.find(d => d.id === nodePath);

        this.$nextTick(() => {
          document.getElementById('right-panel').innerHTML = `
        <div><strong>类型</strong><p>${node.id.split('.')[1]}</p></div>
        <div><strong>电影</strong></div>
          <div id="movie-images">
            ${node.movies.map((movie, index) => `
              <div>
                <p>${movie}</p>
                <img src="${node.pictures[index]}" alt="${movie}" style="max-width: 100%;">
              </div>
            `).join('')}
          </div>
        `;
        });
      });
    }

  }
};
</script>
