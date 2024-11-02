<template>
  <div class='word-box'>
    <div id="word" ref="word-box" class='word-cloud'></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import "echarts-wordcloud/dist/echarts-wordcloud";
import "echarts-wordcloud/dist/echarts-wordcloud.min.js";
export default {
  name: "wordCloud",
  props: {
    word: {
      type: Array,
      default: () => {
        return [
          {
            wordName: '好吃',
            wordValue: 18
          },
          {
            wordName: '美味',
            wordValue: 5
          },
          {
            wordName: '物美价廉',
            wordValue: 7
          },
          {
            wordName: '好吃',
            wordValue: 18
          },
          {
            wordName: '美味',
            wordValue: 15
          },
          {
            wordName: '物美价廉',
            wordValue: 2
          },
          {
            wordName: '好吃',
            wordValue: 18
          },
          {
            wordName: '美味',
            wordValue: 15
          },
          {
            wordName: '物美价廉',
            wordValue: 2
          },
          {
            wordName: '物美价廉',
            wordValue: 2
          },
          {
            wordName: '好吃',
            wordValue: 18
          },
          {
            wordName: '美味',
            wordValue: 15
          },
          {
            wordName: '物美价廉',
            wordValue: 2
          },
          {
            wordName: '物美价廉',
            wordValue: 2
          },
          {
            wordName: '好吃',
            wordValue: 18
          },
          {
            wordName: '美味',
            wordValue: 15
          },
          {
            wordName: '物美价廉',
            wordValue: 2
          },
        ]
      }
    },
  },
  data () {
    return {};
  },
  mounted () {
    // 测试初始化 （可删除）
    this.setWord()
  },
  watch: {
    word: {
      deep: true,
    },
  },
  methods: {
    setWord () {
      let wordList = this.word.map((res) => {
        return { value: res.wordValue, name: res.wordName };
      });
      let a = this.$refs["word-box"];
      let myChart2 = echarts.init(a);
      myChart2.setOption({
        series: [
          {
            type: "wordCloud",
            //用来调整词之间的距离
            gridSize: 10,
            //用来调整字的大小范围
            sizeRange: [14, 60],
            //用来调整词的旋转方向，，[0,0]--代表着没有角度，也就是词为水平方向，需要设置角度参考注释内容
            rotationRange: [-90, 90],
            //随机生成字体颜色
            textStyle: {
              fontFamily: "sans-serif",
              fontWeight: "bold",
              color: function () {
                // Random color
                return (
                    "rgb(" +
                    [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                    ].join(",") +
                    ")"
                );
              },
            },
            emphasis: {
              focus: "self",

              textStyle: {
                shadowBlur: 10,
                shadowColor: "#333",
              },
            },
            //位置相关设置
            left: "center",
            top: "center",
            right: null,
            bottom: null,
            width: "200%",
            height: "200%",
            //数据
            data: wordList,
          },
        ],
      });
      //点击事件
      myChart2.on("click", function (params) {
        alert(params.name);
      });
    },
  },
};
</script>
<style lang='scss' scoped>
.word-box {
  display: flex;
  justify-content: center;
  width: 100%;
}

.word-cloud {
  height: 500px;
  width: 1100px;
}
</style>
